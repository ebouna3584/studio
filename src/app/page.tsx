import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { courses } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Dna, BrainCircuit, Landmark, Palette, Languages, Check, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const popularCourses = courses.slice(0, 3);
  const fieldsOfStudy = [
    { name: 'STEM', icon: <Dna className="h-6 w-6" />, description: "Science, Technology, Engineering, and Math" },
    { name: 'Humanities', icon: <Landmark className="h-6 w-6" />, description: "History, Literature, Philosophy, and Arts" },
    { name: 'Social Sciences', icon: <BrainCircuit className="h-6 w-6" />, description: "Psychology, Sociology, and Economics" },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-5"></div>
        <div className="z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-shadow">
            Learn Anything, <mark>Faster</mark>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-shadow">
            AI-generated, student-focused courses that let you learn smarter.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80 transition-transform hover:scale-105">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses">
               <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-primary/50 transition-transform hover:scale-105">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-4">Courses You'll Actually Use</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">Focused, high-impact crash courses designed for modern students.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <Link href={`/courses/${course.slug}`} key={course.id} className="group">
                <Card className="h-full flex flex-col glassmorphism transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl group-hover:text-primary-foreground transition-colors">{course.courseTitle}</CardTitle>
                    <CardDescription>{course.mindsetTagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end">
                    <p className="text-sm text-muted-foreground">{course.courseDescription}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4 mt-4">
                      <div className="flex items-center">
                        <BookOpen className="mr-1.5 h-4 w-4" />
                        {course.sections.length} Units
                      </div>
                      <div className="flex items-center text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Start Learning
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Designed for Notetakers</h2>
            <p className="mt-4 text-lg text-muted-foreground">Scroll to see our highlighting feature in action.</p>
            <div className="mt-12 text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center max-w-4xl mx-auto p-8 glassmorphism">
                <p>Welcome to your new academic sidekick. <mark>Effortless note taking</mark>, <mark>clear explanations</mark>, and <mark>beautiful design</mark> await.</p>
            </div>
        </div>
      </section>

      {/* Why It Works Section */}
       <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">Why It Works</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/30 flex items-center justify-center">
                           <Star className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="text-xl font-headline font-semibold">Accelerated Learning</h3>
                            <p className="text-muted-foreground mt-1">Our courses are designed to get you the most important information, fast. We cut the fluff.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/30 flex items-center justify-center">
                           <BookOpen className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="text-xl font-headline font-semibold">Modular Topics</h3>
                            <p className="text-muted-foreground mt-1">Each course is broken down into manageable units and lessons, so you can learn at your own pace.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/30 flex items-center justify-center">
                           <Check className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="text-xl font-headline font-semibold">Customizable Study Plans</h3>
                            <p className="text-muted-foreground mt-1">Focus on what you need to know. Our platform helps you build a study plan that works for you.</p>
                        </div>
                    </div>
                </div>
                 <div className="glassmorphism p-2">
                    <Image 
                        src="https://placehold.co/600x700.png" 
                        alt="A student studying with focus" 
                        width={600} 
                        height={700}
                        className="w-full h-auto"
                        data-ai-hint="student studying"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Ready to reinvent how you learn?</h2>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/courses">
                <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-foreground transition-transform hover:scale-105">Start Now</Button>
            </Link>
            <Link href="/courses">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/80 transition-transform hover:scale-105">Browse All Courses</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
