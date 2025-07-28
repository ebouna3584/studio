'use client';

import { useRef } from 'react';
import type { Course } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Download, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Extend window type for html2pdf
declare global {
  interface Window {
    html2pdf: any;
  }
}

type CoursePageProps = {
  course: Course;
  quote: string;
};

export default function CoursePage({ course, quote }: CoursePageProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const element = contentRef.current;
    if (element && window.html2pdf) {
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${course.slug}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      const contentToPrint = element.cloneNode(true) as HTMLElement;
      // Force all accordions to be open for PDF export
      const triggers = contentToPrint.querySelectorAll('[data-state="closed"]');
      triggers.forEach(trigger => {
        const content = trigger.nextElementSibling as HTMLElement;
        if(content) {
            trigger.setAttribute('data-state', 'open');
            content.setAttribute('data-state', 'open');
            // Inline styles to ensure content is visible
            content.style.height = 'auto';
            content.style.visibility = 'visible';
            content.style.display = 'block';
        }
      });
      // Remove download button from PDF
      const button = contentToPrint.querySelector('#download-button');
      if (button) {
          button.remove();
      }

      window.html2pdf().from(contentToPrint).set(opt).save();
    } else {
        console.error("PDF generation failed. Element or html2pdf.js not found.")
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div ref={contentRef}>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline">
            {course.courseTitle}
          </h1>
          <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground">
            {quote}
          </blockquote>
        </div>

        <p className="text-lg text-foreground mb-8">{course.courseDescription}</p>
        
        <div id="download-button" className="mb-8">
            <Button onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF Version
            </Button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold font-headline mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            {course.sections.map((section, index) => (
              <li key={index}>
                <a href={`#section-${index}`} className="text-primary hover:underline">
                  {section.topicTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-headline mb-6">Course Sections</h2>
          <Accordion type="single" collapsible className="w-full">
            {course.sections.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger id={`section-${index}`} className="text-xl hover:no-underline font-headline">
                  {section.topicTitle}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed py-4">
                  <p className="whitespace-pre-wrap">{section.explanation}</p>
                  {section.studyTip && (
                    <Card className="mt-6 bg-secondary border-primary/50">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                                <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-secondary-foreground mb-2">Study Tip</h4>
                                    <p className="text-secondary-foreground">{section.studyTip}</p>
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
    </div>
  );
}
