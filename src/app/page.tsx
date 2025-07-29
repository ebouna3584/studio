import { course, quotes } from '@/lib/courses';
import { notFound } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Download, BookOpen, Clock, Lightbulb, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import CoursePdfButton from '@/components/course-pdf-button';

const toSlug = (text: string) => {
    return text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
};


export default function Home() {
  if (!course) {
    notFound();
  }

  // Deterministically select a quote to prevent hydration mismatch
  const quoteIndex = course.courseTitle.length % quotes.length;
  const quote = quotes[quoteIndex];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline">
          {course.courseTitle}
        </h1>
        <p className="text-lg text-muted-foreground mt-2">{course.mindsetTagline}</p>
        <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground">
          {quote}
        </blockquote>
      </div>

      <p className="text-lg text-foreground mb-8">{course.courseDescription}</p>
      
      <div id="download-button" className="mb-8">
        <CoursePdfButton course={course} />
      </div>
      
      <div>
        <h2 className="text-3xl font-bold font-headline mb-6">Course Phases</h2>
        <Accordion type="single" collapsible className="w-full">
          {course.sections.map((section, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger id={`section-${index}`} className="text-xl hover:no-underline font-headline">
                <div className="flex items-center gap-4">
                  <span>{section.topicTitle}</span>
                  {section.recommended && (
                     <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                      <Star className="h-4 w-4 mr-1.5 text-green-600" />
                      Recommended Start
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed py-4">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-1.5" />
                    Approx. {section.estimatedUnitTimeMinutes} minutes per unit
                </div>

                {section.understandFirst && (
                  <Card className="mb-6 bg-secondary border-primary/20">
                    <CardContent className="pt-6">
                        <p className="font-semibold text-secondary-foreground">{section.understandFirst}</p>
                    </CardContent>
                  </Card>
                )}
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Lessons in this phase:</h4>
                  <ul className="space-y-2">
                    {section.lessonHeaders.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center group">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <Link href={`/courses/${course.slug}/${toSlug(lesson)}`} className="hover:text-primary hover:underline flex-grow">
                          {lesson}
                        </Link>
                        <ArrowRight className="h-4 w-4 text-primary ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>

                {section.studyTips && section.studyTips.length > 0 && (
                  <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                              <Lightbulb className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                              <div>
                                  <h4 className="font-bold text-blue-900 mb-2">Strategic Purpose</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-blue-800">
                                    {section.studyTips.map((tip, tipIndex) => (
                                        <li key={tipIndex}>{tip}</li>
                                    ))}
                                  </ul>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
