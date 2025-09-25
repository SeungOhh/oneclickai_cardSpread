"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TrainExampleComponent from "@/components/TrainExampleComponent"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 gap-8">
        <div className="h-[20vh]"></div>

        <Card className="w-full max-w-md">
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
    </>
  )
}
