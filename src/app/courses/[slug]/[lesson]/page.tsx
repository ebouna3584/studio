
'use client';

import { course, allLessonContent } from '@/lib/courses';
import { notFound, useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const toSlug = (text: string) => {
    return text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
};

// This is a client component, so we can't use generateMetadata directly.
// We'll manage the title dynamically using useEffect.

export default function Page() {
  const router = useRouter();
  const params = useParams() as { slug: string; lesson: string };
  
  if (course.slug !== params.slug) {
    notFound();
  }
  
  let lessonTitle: string | undefined;
  let unitTitle: string | undefined;
  let lessonIndex: number = -1;
  let sectionIndex: number = -1;

  for (let i = 0; i < course.sections.length; i++) {
    const section = course.sections[i];
    const foundIndex = section.lessonHeaders.findIndex(
      (header) => toSlug(header) === params.lesson
    );
    if (foundIndex !== -1) {
      lessonTitle = section.lessonHeaders[foundIndex];
      unitTitle = section.topicTitle;
      lessonIndex = foundIndex;
      sectionIndex = i;
      break;
    }
  }
  
  const courseContent = allLessonContent[params.slug] || {};
  const lessonData = courseContent[params.lesson];

  if (!lessonTitle || !lessonData) {
    notFound();
  }

  // Set document title
  if (typeof window !== 'undefined') {
    document.title = `${lessonTitle} | ${course.courseTitle}`;
  }
  
  const getNextLesson = () => {
    if (sectionIndex === -1 || lessonIndex === -1) return null;

    const currentSection = course.sections[sectionIndex];
    if (lessonIndex < currentSection.lessonHeaders.length - 1) {
      // Next lesson in the same section
      return {
        title: currentSection.lessonHeaders[lessonIndex + 1],
        slug: toSlug(currentSection.lessonHeaders[lessonIndex + 1])
      };
    } else if (sectionIndex < course.sections.length - 1) {
      // First lesson of the next section
      const nextSection = course.sections[sectionIndex + 1];
      return {
        title: nextSection.lessonHeaders[0],
        slug: toSlug(nextSection.lessonHeaders[0])
      };
    }
    return null; // End of the course
  }

  const nextLesson = getNextLesson();

  const handleNextLesson = () => {
    if (nextLesson) {
      router.push(`/courses/${course.slug}/${nextLesson.slug}`);
    } else {
      router.push('/'); // Or a "Course Completed" page
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href={`/`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Course Outline
          </Button>
        </Link>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">{unitTitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline mt-2">
          {lessonTitle}
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <Card className="bg-secondary border-primary/20">
            <CardContent className="pt-6">
                <p className="text-lg italic">{lessonData.introduction}</p>
            </CardContent>
        </Card>

        {lessonData.sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {typeof section.content === 'string' ? (
                  <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                ) : (
                  section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                  ))
                )}
                {section.chart && (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {section.chart.headers.map((header, hIndex) => (
                                        <TableHead key={hIndex} className="font-bold">{header}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {section.chart.rows.map((row, rIndex) => (
                                    <TableRow key={rIndex}>
                                        {row.map((cell, cIndex) => (
                                            <TableCell key={cIndex}>{cell}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
              </CardContent>
            </Card>
        ))}
        
        {lessonData.finalThoughts && (
             <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-destructive">Final Thoughts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">{lessonData.finalThoughts}</p>
              </CardContent>
            </Card>
        )}
      </div>

      <div className="mt-12 flex justify-end">
          {nextLesson ? (
            <Button onClick={handleNextLesson} size="lg">
                Finish Lesson & Start: {nextLesson.title}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
             <Button onClick={() => router.push('/')} size="lg">
                Congratulations! Course Complete
                <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
          )}
      </div>
    </div>
  );
}

// Since this is a client component, we handle static params generation differently if needed,
// but for this structure, dynamic routing on the client is sufficient.
// To optimize for build times, you could fetch this data in a parent server component
// and pass it down, but for this case, we'll keep it simple.
