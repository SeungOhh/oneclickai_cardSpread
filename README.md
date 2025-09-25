# write a concise README.md in one go
cat > README.md <<'MD'
# OneClick AI — Card Spreading Component

스크롤에 따라 **부채꼴 → 그리드**로 전환되는 인터랙티브 카드 쇼케이스(Next.js 14 + TS + Tailwind).

## ✨ Features
- 스크롤 트리거 전환(10px 시작, 뷰포트 40% 내 완결)
- 부채꼴(12) + 그리드(6) 카드 구성, 부드러운 트랜지션/호버
- 반응형 레이아웃, 다크/라이트 테마
- 다층 그라디언트 + 패턴 배경

## 🧰 Tech Stack
Next.js 14(App Router), TypeScript, Tailwind v4, shadcn/ui(Radix), lucide-react, Geist Sans/Mono

## ⚙️ Install & Run
git clone https://github.com/seungohh/oneclickai_cardSpread.git
cd oneclickai_cardSpread
npm i
npm run dev   # http://localhost:3000

## 🧩 Key Components
- TrainExampleComponent: 스크롤 진행도에 따라 카드 각도/위치/스케일 보간(메모이제이션)
- DynamicBackground: 다층 그라디언트·패턴, 스크롤 연동 투명도

## 🧮 Animation Config
const ANIMATION_CONFIG = {
  scroll: { start: 10, endRatio: 0.4 },
  fan: { totalCards: 6, totalSets: 2 },
  grid: { columns: 3, cardSpacing: 460 },
  transition: { duration: "0.5s", easing: "cubic-bezier(0.25,0.46,0.45,0.94)" }
};

## 📁 Structure
app/{globals.css, layout.tsx, page.tsx}
components/{ui/, TrainExampleComponent.tsx, allContentData.tsx, navbar.tsx, theme-provider.tsx}
public/*.jpg

## 📱 Breakpoints
Mobile <768px(1열), Tablet 768–1024px(2열), Desktop >1024px(3열)

## 🚀 Deploy (Vercel)
npm run build && npm run start

## 🔗 Links
OneClick AI: https://oneclickai.co.kr
GitHub: https://github.com/seungohh

## 📄 License
MIT

## 👨‍💻 Author
Seung Young Oh — @SeungOhh
MD
