import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Script from 'next/script';
import { Inter, DM_Serif_Display } from 'next/font/google';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
});

export const metadata: Metadata = {
  title: 'Course Compass',
  description: 'Your guide to mastering academic subjects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
          integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`font-body bg-background text-foreground antialiased min-h-screen flex flex-col ${inter.variable} ${dmSerifDisplay.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
