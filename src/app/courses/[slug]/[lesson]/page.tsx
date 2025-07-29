import { course, allLessonContent } from '@/lib/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const toSlug = (text: string) => {
    return text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
};

type Props = {
  params: { slug: string; lesson: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (course.slug !== params.slug) {
    return {
      title: 'Course Not Found',
    };
  }

  let lessonTitle = "Lesson Not Found";

  for (const section of course.sections) {
    const foundLesson = section.lessonHeaders.find(
      (header) => toSlug(header) === params.lesson
    );
    if (foundLesson) {
      lessonTitle = foundLesson;
      break;
    }
  }

  return {
    title: `${lessonTitle} | ${course.courseTitle}`,
    description: `Detailed analysis of ${lessonTitle}.`,
  };
}

export async function generateStaticParams() {
    const params: { slug: string; lesson: string }[] = [];
    course.sections.forEach(section => {
        section.lessonHeaders.forEach(lessonHeader => {
            params.push({ slug: course.slug, lesson: toSlug(lessonHeader) });
        });
    });
    return params;
}

export default function Page({ params }: { params: { slug: string; lesson: string } }) {
  if (course.slug !== params.slug) {
    notFound();
  }
  
  let lessonTitle: string | undefined;
  let unitTitle: string | undefined;

  for (const section of course.sections) {
    const foundLesson = section.lessonHeaders.find(
      (header) => toSlug(header) === params.lesson
    );
    if (foundLesson) {
      lessonTitle = foundLesson;
      unitTitle = section.topicTitle;
      break;
    }
  }
  
  const courseContent = allLessonContent[params.slug] || {};
  const lessonContent = courseContent[params.lesson];

  if (!lessonTitle) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href={`/`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {course.courseTitle}
          </Button>
        </Link>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">{unitTitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline mt-2">
          {lessonTitle}
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        {lessonContent ? (
          <>
            <Card className="bg-secondary border-primary/20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Lesson Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{lessonContent.summary}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Key Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {lessonContent.keyConcepts.map((concept, index) => (
                    <li key={index} className="text-lg">{concept}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-destructive">Common Pitfalls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {lessonContent.commonPitfalls.map((pitfall, index) => (
                    <li key={index} className="text-lg">{pitfall}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold font-headline">Lesson Analysis</h2>
            <p>
              This is a placeholder for the detailed analysis of the lesson: <strong>{lessonTitle}</strong>.
            </p>
            <p>
              Content for this lesson is being prepared and will be available soon. It will include a thorough and efficient rundown of the topic, including key concepts, examples, and study hacks.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
