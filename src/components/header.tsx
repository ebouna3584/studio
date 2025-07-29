import Link from 'next/link';
import { Compass } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/account', label: 'Account' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold font-headline text-foreground">
            <div className="p-2 border-2 border-foreground/10">
              <Compass className="h-6 w-6 text-foreground" />
            </div>
            Course Compass
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground hover:text-shadow transition-all duration-200 pb-1 relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
