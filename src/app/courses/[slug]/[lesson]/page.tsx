import { courses, allLessonContent } from '@/lib/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const toSlug = (text: string) => {
    return text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
};

type Props = {
  params: { slug: string; lesson: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug);
  let lessonTitle = "Lesson Not Found";

  if (course) {
    for (const section of course.sections) {
      const foundLesson = section.lessonHeaders.find(
        (header) => toSlug(header) === params.lesson
      );
      if (foundLesson) {
        lessonTitle = foundLesson;
        break;
      }
    }
  }

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${lessonTitle} | ${course.courseTitle}`,
    description: `Detailed analysis of ${lessonTitle}.`,
  };
}

export async function generateStaticParams() {
    const params: { slug: string; lesson: string }[] = [];
    courses.forEach(course => {
        course.sections.forEach(section => {
            section.lessonHeaders.forEach(lessonHeader => {
                params.push({ slug: course.slug, lesson: toSlug(lessonHeader) });
            });
        });
    });
    return params;
}

export default function Page({ params }: { params: { slug: string; lesson: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  
  let lessonTitle: string | undefined;
  let unitTitle: string | undefined;

  if (course) {
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
  }
  
  const courseContent = allLessonContent[params.slug] || {};
  const lessonContent = courseContent[params.lesson];

  if (!course || !lessonTitle) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href={`/courses/${course.slug}`}>
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

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {lessonContent ? (
          <>
            <h2 className="text-2xl font-bold font-headline">Lesson Analysis</h2>
            <p>{lessonContent.summary}</p>
            
            <h3 className="text-xl font-bold font-headline mt-8">Key Concepts</h3>
            <ul>
              {lessonContent.keyConcepts.map((concept, index) => (
                <li key={index}>{concept}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold font-headline mt-8">Common Pitfalls</h3>
            <ul>
              {lessonContent.commonPitfalls.map((pitfall, index) => (
                <li key={index}>{pitfall}</li>
              ))}
            </ul>
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