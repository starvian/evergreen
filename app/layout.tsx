import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yucai Sydney Chinese School - Embrace Chinese Language & Culture',
  description:
    'Yucai Sydney Chinese School offers professional Chinese language education and cultural programs in Sydney. Join us to explore the richness of Chinese culture.',
  // 添加favicon配置
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-header-dark text-gray-300 py-8 text-center mt-auto">
          <p>
            &copy; {new Date().getFullYear()} Yucai Sydney Chinese School. All
            Rights Reserved.
          </p>
          <p className="text-sm">育才悉尼中文学校</p>
        </footer>
      </body>
    </html>
  );
}
