import './globals.css';
import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';


export const metadata: Metadata = {
  title: 'Designure - Create Your Dream Fashion Line',
  description: 'Create your dream fashion line, anytime, anywhere with Designure. Professional design tools and end-to-end manufacturing solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-instrument">{children}</body>
    </html>
  );
}