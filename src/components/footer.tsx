import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-bold font-headline text-lg mb-2">Course Compass</h3>
            <p className="text-sm text-muted-foreground">Study smarter, not harder.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses" className="hover:text-background">Courses</Link></li>
                <li><Link href="/about" className="hover:text-background">About</Link></li>
                <li><Link href="/faq" className="hover:text-background">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-background">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-background">Terms of Service</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-4">Connect</h4>
               <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-background">Contact</Link></li>
                <li><Link href="#" className="hover:text-background">Twitter</Link></li>
              </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-3">Get updates on new courses.</p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Email" className="bg-background/10 border-border/20 text-background placeholder:text-muted-foreground" />
                    <Button type="submit" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-foreground">Sign Up</Button>
                </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-16 border-t border-border/20 pt-8">
          © {new Date().getFullYear()} Course Compass. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
