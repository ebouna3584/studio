import { courses } from '@/lib/courses';
import { notFound } from 'next/navigation';
import CoursePage from '@/components/course-page';
import { quotes } from '@/lib/quotes';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.courseTitle} | Course Compass`,
    description: course.courseDescription,
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  // Deterministically select a quote to prevent hydration mismatch
  const quoteIndex = course.courseTitle.length % quotes.length;
  const quote = quotes[quoteIndex];

  return <CoursePage course={course} quote={quote} />;
}
