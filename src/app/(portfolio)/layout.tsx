import MaxWidthWrapper from '@/components/reusable/maxWidthWrapper';
import { about } from '@/data';
import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import '../globals.css';

const instrumentalSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrumentalSans',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${about.name} | Portfolio`,
    default: about.name + ' | Portfolio',
  },
  description: about.role,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${instrumentalSans.variable} font-primary`}>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </body>
      <Toaster richColors position="bottom-center" />
    </html>
  );
}
