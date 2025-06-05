import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // 使用标准的 Google 字体 'Inter'
import './globals.css';
import Navbar from './components/Navbar'; // 确保 Navbar 组件路径正确

// 初始化 Inter 字体，并指定 'latin' 子集
const inter = Inter({ subsets: ['latin'] });

// 为您的网站设置元数据 (用于搜索引擎优化和浏览器标签页标题)
export const metadata: Metadata = {
  title: 'Yucai Sydney Chinese School - Embrace Chinese Language & Culture',
  description:
    'Yucai Sydney Chinese School offers professional Chinese language education and cultural programs in Sydney. Join us to explore the richness of Chinese culture.',
};

// 这是您网站的根布局 (Root Layout)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 将 inter 字体的类名应用到 body 标签，使字体全局生效 */}
      <body className={inter.className}>
        <Navbar />

        {/* 使用 <main> 标签包裹主要页面内容，这是语义化 HTML 的好习惯 */}
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
