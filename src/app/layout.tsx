import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Clarity Capture',
  description: 'Welcome to the Ultimate Notes Capturer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
    <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
      <body>
        <Header />

        <div className="flex min-h-screen">
          < Sidebar />

        <div className='flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide'>{children}</div>
        </div>

        <Toaster position='top-center' />
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  );
}
