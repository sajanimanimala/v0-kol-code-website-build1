import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="fixed inset-0 kolam-background pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Story</h1>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Kolam Samskriti is born from a vision to preserve the cultural essence of Kolams while embracing technology. We
                blend art, mathematics, and heritage into an innovative platform that connects tradition with today's
                generation.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To bridge the gap between ancient wisdom and modern creativity, making the beautiful art of Kolam
                    accessible to everyone through technology while preserving its cultural significance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where traditional art forms thrive in the digital age, inspiring new generations to
                    appreciate and create while honoring the wisdom of our ancestors.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Why Kolams Matter</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kolams are more than decorative patterns—they represent mathematical precision, spiritual
                  significance, and community connection. Each design tells a story, embodies cultural values, and
                  demonstrates the perfect harmony between art and science that has been passed down through
                  generations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
