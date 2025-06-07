import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NewsClient from './NewsClient';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'news' | 'event';
  excerpt: string;
  image: string;
  slug: string;
  featured?: boolean;
}

// 获取所有posts数据
async function getPosts(): Promise<NewsItem[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames
      .filter(name => name.endsWith('.md'))
      .map((filename, index) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // 从文件名生成slug
        const slug = filename.replace(/\.md$/, '');
        
        // 确定分类
        let category: 'news' | 'event' = 'news';
        if (data.category === '活动预告') {
          category = 'event';
        }
        
        return {
          id: index + 1,
          title: data.title || slug,
          date: data.date || new Date().toISOString().split('T')[0],
          category,
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          image: data.image || '/news/default.jpg',
          slug,
          featured: data.featured || false
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch {
    return [];
  }
}

export default async function NewsPage() {
  const newsData = await getPosts();

  return <NewsClient newsData={newsData} />;
}