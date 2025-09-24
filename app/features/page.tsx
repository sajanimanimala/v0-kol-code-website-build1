"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function FeaturesPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedKolam, setGeneratedKolam] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerateKolam = () => {
    if (prompt.trim()) {
      setGeneratedKolam("/generated-kolam-pattern.jpg")
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="fixed inset-0 kolam-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Features</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recreate Your Kolam Input */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">1. Recreate Your Kolam Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="kolam-upload" className="text-base font-medium">
                  Upload or take a photo of your Kolam
                </Label>
                <Input
                  id="kolam-upload"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="mt-2"
                />
              </div>

              {uploadedImage && (
                <div className="space-y-4">
                  <div className="border-2 border-primary rounded-lg p-4 bg-white">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded Kolam"
                      className="w-full h-48 object-contain"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">Preview on Floor</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      Download as PNG
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generate Your Kolam */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">2. Generate Your Kolam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="kolam-prompt" className="text-base font-medium">
                  Tell us your vibe...
                </Label>
                <Textarea
                  id="kolam-prompt"
                  placeholder="Write a mini story, a mood, or even a crazy idea (e.g. 'bestie vibes under Diwali lights') and we'll turn it into a Kolam."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <Button
                onClick={handleGenerateKolam}
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!prompt.trim()}
              >
                Generate Kolam
              </Button>

              {generatedKolam && (
                <div className="space-y-4">
                  <div className="border-2 border-primary rounded-lg p-4 bg-white">
                    <img
                      src={generatedKolam || "/placeholder.svg"}
                      alt="Generated Kolam"
                      className="w-full h-48 object-contain"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">Preview on Floor</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      Download as PNG
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
