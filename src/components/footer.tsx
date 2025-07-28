import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold font-headline text-lg mb-2">Course Compass</h3>
            <p className="text-sm text-muted-foreground">Study smarter, not harder.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link href="/courses" className="hover:text-foreground">Courses</Link></li>
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
             <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="hover:text-foreground">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-8 border-t pt-4">
          © {new Date().getFullYear()} Course Compass. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
