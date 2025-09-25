"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { allContentData, type ContentItem } from "./allContentData"

// Animation configuration constants
const ANIMATION_CONFIG = {
  scroll: {
    start: 10,
    endRatio: 0.4,
  },
  fan: {
    totalCards: 6,
    totalSets: 2,
    setSpacing: 800,
    setConfigs: [
      {
        // First set - more clustered
        angle: 100,
        baseRadius: 100,
        radiusStep: 30,
        xMultiplier: 0.8,
        yMultiplier: 0.1,
        rotationFactor: 0.15,
        offset: { x: 200, y: 0 },
      },
      {
        // Second set - more spread out
        angle: 140,
        baseRadius: 140,
        radiusStep: 50,
        xMultiplier: 1.5,
        yMultiplier: 0.15,
        rotationFactor: 0.25,
        offset: { x: -600, y: 50 },
      },
    ],
  },
  grid: {
    columns: 3,
    cardSpacing: 460,
    rowSpacing: 260,
    offset: 200,
  },
  positioning: {
    initialYRatio: 0.0,
    finalYRatio: 0.1,
  },
  transition: {
    duration: "0.5s",
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
} as const

// Style constants
const CARD_STYLES = {
  container: "w-96 hover:scale-105 transition-transform duration-200 bg-white rounded-lg shadow-lg",
  image: "rounded-t-lg brightness-[70%] w-full h-48 object-cover",
  overlay: "absolute inset-0 flex flex-col items-center justify-center",
  overlayText: "text-white text-lg font-semibold text-center px-2",
  overlayTextSmall: "text-white text-sm font-semibold text-center px-2",
  title: "text-sm font-semibold text-gray-800 dark:text-white leading-snug line-clamp-2",
  tag: "inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
} as const

// Type definitions
interface CardPosition {
  x: number
  y: number
  rotation: number
}

// Utility functions
class AnimationUtils {
  static smoothstep(progress: number): number {
    return progress * progress * (3 - 2 * progress)
  }

  static degToRad(degrees: number): number {
    return (degrees * Math.PI) / 180
  }

  static calculateGridPosition(index: number): { row: number; col: number } {
    return {
      row: Math.floor(index / ANIMATION_CONFIG.grid.columns),
      col: index % ANIMATION_CONFIG.grid.columns,
    }
  }

  static calculateFinalGridCoords(row: number, col: number, windowHeight: number): CardPosition {
    const { columns, cardSpacing, rowSpacing, offset } = ANIMATION_CONFIG.grid
    const { finalYRatio } = ANIMATION_CONFIG.positioning

    return {
      x: (col - (columns - 1) / 2) * cardSpacing - offset,
      y: row * rowSpacing + windowHeight * finalYRatio,
      rotation: 0,
    }
  }

  static calculateInitialFanCoords(index: number, row: number, windowHeight: number): CardPosition {
    const { totalCards, totalSets, setSpacing, setConfigs } = ANIMATION_CONFIG.fan
    const { initialYRatio } = ANIMATION_CONFIG.positioning

    // Determine which set it belongs to (0 or 1)
    const setIndex = Math.floor(index / totalCards)
    const cardIndexInSet = index % totalCards

    // Get the configuration for that set
    const setConfig = setConfigs[setIndex]

    const angleStep = setConfig.angle / (totalCards + 1)
    const cardAngle = (cardIndexInSet - totalCards / 2) * angleStep
    const radius = setConfig.baseRadius + Math.floor(cardIndexInSet / 3) * setConfig.radiusStep

    // Base X offset per set (for horizontal arrangement)
    const baseSetXOffset = (setIndex - (totalSets - 1) / 2) * setSpacing

    return {
      x: Math.sin(this.degToRad(cardAngle)) * radius * setConfig.xMultiplier + baseSetXOffset + setConfig.offset.x,
      y:
        Math.cos(this.degToRad(cardAngle)) * radius * setConfig.yMultiplier +
        windowHeight * initialYRatio +
        setConfig.offset.y,
      rotation: cardAngle * setConfig.rotationFactor,
    }
  }
}

// Custom hooks
const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight)
    }

    updateWindowHeight()
    window.addEventListener("resize", updateWindowHeight)
    return () => window.removeEventListener("resize", updateWindowHeight)
  }, [])

  return windowHeight
}

const useScrollProgress = (windowHeight: number) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (windowHeight === 0) return

    const handleScroll = () => {
      const { start, endRatio } = ANIMATION_CONFIG.scroll
      const scrollY = window.scrollY
      const animationEnd = windowHeight * endRatio

      const progress = Math.max(0, Math.min(1, (scrollY - start) / (animationEnd - start)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [windowHeight])

  return scrollProgress
}

// Card component
interface CardProps {
  item: ContentItem
  index: number
  isFanCard: boolean
  transform: string
  zIndex: number
}

const Card: React.FC<CardProps> = ({ item, index, isFanCard, transform, zIndex }) => {
  return (
    <Link
      href={`${item.link}/${item._id}`}
      className="cursor-pointer absolute"
      style={{
        transform,
        transition: `${ANIMATION_CONFIG.transition.duration} ${ANIMATION_CONFIG.transition.easing}`,
        transformOrigin: "center bottom",
        willChange: "transform",
        zIndex,
      }}
    >
      <div className={CARD_STYLES.container}>
        <div className="relative">
          <img src={item.image || "/placeholder.svg"} alt={item.alt} className={CARD_STYLES.image} />
          <div className={CARD_STYLES.overlay}>
            <div className={CARD_STYLES.overlayText}>{item.text}</div>
            <div className={CARD_STYLES.overlayText}>{item.text1}</div>
          </div>
        </div>

        <div className="p-2">
          <div className="space-y">
            <div className={CARD_STYLES.title}>{item.title}</div>
            <div className="flex gap-1 flex-wrap">
              {item.nav.slice(0, 2).map((navItem: string, navIdx: number) => (
                <span key={navIdx} className={CARD_STYLES.tag}>
                  {navItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Main component
export default function TrainExampleComponent() {
  const windowHeight = useWindowHeight()
  const scrollProgress = useScrollProgress(windowHeight)

  // Split card data (memoized)
  const { fanCards, gridCards } = React.useMemo(() => {
    const totalFanCards = ANIMATION_CONFIG.fan.totalCards * ANIMATION_CONFIG.fan.totalSets
    return {
      fanCards: allContentData.slice(0, totalFanCards),
      gridCards: allContentData.slice(totalFanCards),
    }
  }, [])

  // Calculate card transform (memoized)
  const getCardTransform = React.useCallback(
    (index: number): string => {
      if (windowHeight === 0) return "translate(-300px, 2000px)"

      const { row, col } = AnimationUtils.calculateGridPosition(index)
      const finalPosition = AnimationUtils.calculateFinalGridCoords(row, col, windowHeight)
      const initialPosition = AnimationUtils.calculateInitialFanCoords(index, row, windowHeight)

      const easedProgress = AnimationUtils.smoothstep(Math.min(scrollProgress, 1))

      const currentX = initialPosition.x + (finalPosition.x - initialPosition.x) * easedProgress
      const currentY = initialPosition.y + (finalPosition.y - initialPosition.y) * easedProgress
      const currentRotation =
        initialPosition.rotation + (finalPosition.rotation - initialPosition.rotation) * easedProgress

      return `translate(${currentX}px, ${currentY}px) rotate(${currentRotation}deg)`
    },
    [scrollProgress, windowHeight],
  )

  // Calculate grid card transform
  const getGridCardTransform = React.useCallback(
    (cardIndex: number): string => {
      if (windowHeight === 0) return "translate(0px, 2000px)"
      const { row, col } = AnimationUtils.calculateGridPosition(cardIndex)
      const { x, y } = AnimationUtils.calculateFinalGridCoords(row, col, windowHeight)
      return `translate(${x}px, ${y}px)`
    },
    [windowHeight],
  )

  return (
    <section className="my-5 max-w-screen-xl w-full sm:px-4 md:px-4 mx-auto">
      {/* Title section */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">✨ Scroll Down to Explore AI Projects ✨</h2>
      </div>

      <div className="relative min-h-[200vh] flex items-start justify-center pt-8 pb-20">
        <div className="relative">
          {/* Fan animation cards */}
          {fanCards.map((item, index) => (
            <Card
              key={`fan-${item._id}-${index}`}
              item={item}
              index={index}
              isFanCard={true}
              transform={getCardTransform(index)}
              zIndex={fanCards.length - index}
            />
          ))}

          {/* Static grid cards */}
          {gridCards.map((item, index) => {
            const cardIndex = ANIMATION_CONFIG.fan.totalCards * ANIMATION_CONFIG.fan.totalSets + index
            return (
              <Card
                key={`grid-${item._id}-${index}`}
                item={item}
                index={index}
                isFanCard={false}
                transform={getGridCardTransform(cardIndex)}
                zIndex={gridCards.length - index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
