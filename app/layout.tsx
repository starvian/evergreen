import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar'; // 确保路径正确

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yucai Sydney Chinese School - Embrace Chinese Language & Culture',
  description:
    'Yucai Sydney Chinese School offers professional Chinese language education and cultural programs in Sydney. Join us to explore the richness of Chinese culture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {' '}
      {/* 修改为 "en" */}
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* Footer (可选) */}
        <footer className="bg-header-dark text-gray-300 py-8 text-center">
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
