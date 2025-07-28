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
import { marked } from 'marked';

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

  const createPdfHtml = () => {
    const markdownHtml = marked(course.pdfMarkdown);
    const styles = `
      <style>
        body { font-family: 'Cormorant Garamond', serif; line-height: 1.6; color: #222; padding: 20px; }
        h1, h2, h3 { color: #1a355b; margin-top: 25px; font-weight: 700; }
        h1 { font-size: 28pt; }
        h2 { font-size: 20pt; }
        h3 { font-size: 16pt; }
        p, li { font-size: 12pt; color: #333; }
        blockquote { border-left: 4px solid #ccc; padding-left: 15px; font-style: italic; color: #555; }
        hr { border: none; border-top: 1px solid #eee; margin: 40px 0; }
        strong { font-weight: 700; }
      </style>
    `;
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${course.courseTitle}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
          ${styles}
        </head>
        <body>
          ${markdownHtml}
        </body>
      </html>
    `;
  };

  const handleDownload = () => {
    if (window.html2pdf) {
      const htmlContent = createPdfHtml();
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${course.slug}-notes.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      
      window.html2pdf().from(htmlContent).set(opt).save();
    } else {
        console.error("PDF generation failed. html2pdf.js not found.")
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
                Download Notes as PDF
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
