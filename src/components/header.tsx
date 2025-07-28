import Link from 'next/link';
import { Compass } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/library', label: 'Library' },
    { href: '/explore', label: 'Explore Fields' },
    { href: '/account', label: 'Account' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-foreground">
            <div className="p-2 glassmorphism">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            Course Compass
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground hover:border-b-2 hover:border-primary transition-all duration-200 pb-1">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
