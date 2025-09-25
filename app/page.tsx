"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TrainExampleComponent from "@/components/TrainExampleComponent"
import Navbar from "@/components/navbar"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollOpacity = Math.min(scrollY / 1000, 0.8)

  return (
    <>
      <div
        className="fixed inset-0 -z-10 transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, ${0.1 + scrollOpacity * 0.2}) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, ${0.8 - scrollOpacity * 0.3}) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(99, 102, 241, ${0.05 + scrollOpacity * 0.15}) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(255, 255, 255, 1) 0%, 
              rgba(248, 250, 252, ${1 - scrollOpacity * 0.2}) 25%,
              rgba(226, 232, 240, ${0.3 + scrollOpacity * 0.4}) 70%,
              rgba(100, 116, 139, ${0.4 + scrollOpacity * 0.4}) 100%
            )
          `,
        }}
      />

      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, ${0.1 + scrollOpacity * 0.1}) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 gap-8 relative">
        <div className="h-[10vh]"></div>

        <Card className="w-full max-w-md backdrop-blur-md bg-white/95 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-balance">Welcome to OneClick AI!! 🚀</CardTitle>
            <CardDescription>Your ultimate AI education Web page in Korean Only... (Currently)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Make your idea more bright with this card spreading component</p>
              <p className="text-sm text-muted-foreground">Current time: {new Date().toLocaleString("en-US")}</p>
            </div>
            <div className="flex justify-center gap-3">
              <Button
                onClick={() => window.open("https://oneclickai.co.kr", "_blank")}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                OneClickAI
              </Button>
              <Button
                onClick={() => window.open("https://github.com/seungohh", "_blank")}
                variant="outline"
                className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-50"
              >
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="h-[10vh]"></div>
        <TrainExampleComponent />
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </>
  )
}
