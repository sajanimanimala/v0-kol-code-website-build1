import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const courses = [
    {
      title: "Beginner's Guide to Kolams",
      description: "Learn the basics of dots, lines, and loops.",
      level: "Beginner",
      duration: "2 weeks",
    },
    {
      title: "Kolam Patterns & Symmetry",
      description: "Understand rhythm, geometry, and balance.",
      level: "Intermediate",
      duration: "3 weeks",
    },
    {
      title: "Kolam & Culture",
      description: "Explore the traditions and stories woven into Kolams.",
      level: "All Levels",
      duration: "4 weeks",
    },
    {
      title: "Advanced Digital Kolams",
      description: "Blend creativity with modern design tools.",
      level: "Advanced",
      duration: "6 weeks",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="fixed inset-0 kolam-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Kolam Learning Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master the art of Kolam creation through our structured learning path, from traditional techniques to modern
            digital applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{course.level}</span>
                </div>
                <p className="text-muted-foreground">{course.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Duration: {course.duration}</span>
                  <Button className="bg-primary hover:bg-primary/90">Start Learning</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join thousands of learners who have discovered the beauty and mathematics behind traditional Kolam art
                while exploring modern creative possibilities.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Enroll Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
