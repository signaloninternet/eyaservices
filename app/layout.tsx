import './globals.css';
import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';


export const metadata: Metadata = {
  title: 'eya services - order your health supplies',
  description: 'Eya Services is your trusted partner in health and wellness, delivering essential medical supplies with care and reliability.',
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