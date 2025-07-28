import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { courses } from '@/lib/courses';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, BookOpen, Clock, BrainCircuit, Dna, Landmark } from 'lucide-react';

export default function CoursesPage() {
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
          All Courses
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Find your subject and start mastering it today.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={fieldsOfStudy} className="w-full max-w-5xl mx-auto space-y-8">
        {fieldsOfStudy.map(field => (
          <AccordionItem value={field} key={field} className="border-none">
             <AccordionTrigger className="text-3xl font-bold font-headline py-4 px-6 glassmorphism border-none hover:no-underline hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-4">
                  {getFieldIcon(field)} 
                  <span>{field}</span>
                </div>
              </AccordionTrigger>
            <AccordionContent className="pt-6 pb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.filter(course => course.fieldOfStudy === field).map((course) => (
                  <Link href={`/courses/${course.slug}`} key={course.id} className="group">
                    <Card className="h-full flex flex-col glassmorphism transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10">
                      <CardHeader className="flex-grow">
                        <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">{course.courseTitle}</CardTitle>
                        <CardDescription className="italic text-base mb-3">{course.mindsetTagline}</CardDescription>
                        <CardDescription className="text-sm">{course.courseDescription}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4 mt-4">
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
