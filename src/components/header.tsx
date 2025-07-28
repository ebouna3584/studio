import Link from 'next/link';
import { Compass } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-foreground">
            <Compass className="h-6 w-6 text-primary" />
            Course Compass
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
