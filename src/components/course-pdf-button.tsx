'use client';

import { useRef } from 'react';
import type { Course } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { marked } from 'marked';

// Extend window type for html2pdf
declare global {
  interface Window {
    html2pdf: any;
  }
}

type CoursePdfButtonProps = {
  course: Course;
};

export default function CoursePdfButton({ course }: CoursePdfButtonProps) {
  const createPdfHtml = () => {
    const markdownHtml = marked(course.pdfMarkdown);
    const styles = `
      <style>
        body { font-family: 'Cormorant Garamond', serif; line-height: 1.6; color: #222; padding: 20px; }
        h1, h2, h3 { color: #1a355b; margin-top: 25px; font-weight: 700; page-break-after: avoid; }
        h1 { font-size: 28pt; }
        h2 { font-size: 20pt; }
        h3 { font-size: 16pt; }
        p, li { font-size: 12pt; color: #333; page-break-inside: avoid; }
        ul, blockquote { page-break-inside: avoid; }
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
        margin: [0.7, 0.5, 0.7, 0.5],
        filename: `${course.slug}-syllabus.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      window.html2pdf().from(htmlContent).set(opt).save();
    } else {
        console.error("PDF generation failed. html2pdf.js not found.")
    }
  };

  return (
    <Button onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" />
      Download Syllabus
    </Button>
  );
}
