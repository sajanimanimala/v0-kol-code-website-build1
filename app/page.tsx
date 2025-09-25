"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Background overlay */}
      <div className="fixed inset-0 kolam-background pointer-events-none" />

      {/* Kolam For The Day Section */}
      <section className="newspaper-header bg-primary text-white py-4 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Kolam For The Day</h2>
              <p className="text-white/90 mt-1">Try out this kolam today</p>
            </div>
            <div className="kolam-frame">
              <img
                src="/images/kolam-day.png"
                alt="Today's featured kolam pattern"
                className="w-20 h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full-size image view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <img
              src="/images/kolam-day.png"
              alt="Today's featured kolam pattern - Full view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img src="/images/Screenshot 202" alt="Kolam Samskriti" className="h-24 w-auto mx-auto mb-6" />
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Where tradition meets technology in the language of Kolams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/features">Explore Features</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <Link href="/courses">Learn Kolams</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">Our Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="feature-icon">📸</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Recreate Your Kolam Input</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload or snap your Kolam, and see it digitally come alive.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="feature-icon">✨</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Generate a Kolam from Your Prompt</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Give us a storyline — whether it's about friendship, festivals, or even your vibe — and let us craft a
                  Kolam inspired by your words.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="feature-icon">📚</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Courses Offered</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn Kolams step by step — from tradition to tech-powered creativity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
