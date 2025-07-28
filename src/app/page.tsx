import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { courses } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Clock, BrainCircuit, Dna, Landmark, Palette, Languages } from 'lucide-react';

export default function Home() {
  const fieldsOfStudy = [
    { name: 'STEM', icon: <Dna className="h-8 w-8 text-primary" />, courses: courses.filter(c => c.fieldOfStudy === 'STEM') },
    { name: 'Humanities', icon: <Landmark className="h-8 w-8 text-primary" />, courses: courses.filter(c => c.fieldOfStudy === 'Humanities') },
    { name: 'Social Sciences', icon: <BrainCircuit className="h-8 w-8 text-primary" />, courses: courses.filter(c => c.fieldOfStudy === 'Social Sciences') },
    { name: 'Arts', icon: <Palette className="h-8 w-8 text-primary" />, courses: courses.filter(c => c.fieldOfStudy === 'Arts')},
    { name: 'Language', icon: <Languages className="h-8 w-8 text-primary" />, courses: courses.filter(c => c.fieldOfStudy === 'Language')},
  ];

  const popularCourses = courses.slice(0, 5);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-5"></div>
        <div className="z-10">
          <h1 className="text-5xl md:text-8xl font-headline font-bold text-foreground">
            <span className="animate-float inline-block">Master</span>{" "}
            <span className="animate-fade-in-out inline-block">Anything.</span>
          </h1>
          <h1 className="text-5xl md:text-8xl font-headline font-bold text-foreground mt-4">Efficiently.</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crash courses powered by smart learning science.
          </p>
          <Link href="/courses">
            <Button size="lg" variant="outline" className="mt-8 glassmorphism hover:bg-primary/20 transition-all duration-300 border-primary/50">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-12 bg-background/80">
        <div className="container mx-auto">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 glassmorphism transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-headline font-semibold mb-2">1. Choose Your Field</h3>
              <p className="text-muted-foreground">Navigate through curated fields of study to find your subject.</p>
            </div>
            <div className="p-8 glassmorphism transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-headline font-semibold mb-2">2. Select Your Course</h3>
              <p className="text-muted-foreground">Pick a crash course designed for focused, high-impact learning.</p>
            </div>
            <div className="p-8 glassmorphism transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-headline font-semibold mb-2">3. Study Smarter</h3>
              <p className="text-muted-foreground">Use our materials to absorb key concepts faster than ever before.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Field of Study Explorer */}
      <section className="py-20 px-4 md:px-12 bg-background">
         <div className="container mx-auto">
           <h2 className="text-4xl font-headline font-bold text-center mb-12">Explore Fields of Study</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {fieldsOfStudy.filter(field => field.courses.length > 0).map(field => (
               <Link href="/courses" key={field.name}>
                 <div className="p-8 glassmorphism h-full flex flex-col justify-between items-center text-center transition-all duration-300 hover:scale-105 hover:bg-primary/10">
                    <div>
                        {field.icon}
                        <h3 className="text-3xl font-headline font-semibold mt-4">{field.name}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2">{field.courses.length} Courses</p>
                 </div>
               </Link>
             ))}
           </div>
         </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-headline font-bold">Ready to reinvent how you learn?</h2>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/courses">
                <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-foreground">Start Now</Button>
            </Link>
            <Link href="/courses">
                <Button size="lg" variant="secondary" className="bg-primary/80 text-foreground hover:bg-primary">Browse All Courses</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
