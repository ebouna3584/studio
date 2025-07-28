import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { courses } from '@/lib/courses';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, BookOpen, Clock, BarChart, Dna, Landmark, BrainCircuit, Microscope, Atom } from 'lucide-react';

export default function Home() {
  const fieldsOfStudy = Array.from(new Set(courses.map(course => course.fieldOfStudy)));
  
  const getFieldIcon = (field: string) => {
    switch (field) {
      case 'STEM':
        return <Dna className="h-6 w-6 text-primary" />;
      case 'Social Sciences':
        return <BrainCircuit className="h-6 w-6 text-primary" />;
      case 'Humanities':
        return <Landmark className="h-6 w-6 text-primary" />;
      default:
        return <BookOpen className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 font-headline">
          Master Your Courses
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your compass to navigating complex subjects with clarity and confidence. Select a field of study to begin your journey.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={fieldsOfStudy} className="w-full max-w-4xl mx-auto space-y-4">
        {fieldsOfStudy.map(field => (
          <AccordionItem value={field} key={field} className="border-b-0">
             <AccordionTrigger className="text-2xl font-bold font-headline py-4 px-6 bg-card border rounded-lg hover:no-underline hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  {getFieldIcon(field)} 
                  <span>{field}</span>
                </div>
              </AccordionTrigger>
            <AccordionContent className="pt-6 pb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.filter(course => course.fieldOfStudy === field).map((course) => (
                  <Link href={`/courses/${course.slug}`} key={course.id} className="group">
                    <Card className="h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 border-2 border-transparent hover:border-primary/80">
                      <CardHeader className="flex-grow">
                        <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{course.courseTitle}</CardTitle>
                        <CardDescription className="italic text-sm mb-3">{course.mindsetTagline}</CardDescription>
                        <CardDescription className="text-sm">{course.courseDescription}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                          <div className="flex items-center">
                            <Clock className="mr-1.5 h-4 w-4" />
                            {course.totalEstimatedTimeHours} hours
                          </div>
                          <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                              Start
                              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
