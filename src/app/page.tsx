import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { courses } from '@/lib/courses';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-headline">
          Welcome to Course Compass
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your minimalist guide to mastering complex subjects. Select a course below to begin your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link href={`/courses/${course.slug}`} key={course.id} className="group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-primary">
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{course.courseTitle}</CardTitle>
                <CardDescription>{course.courseDescription}</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                  <div className="flex items-center text-primary font-semibold">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
