import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category?: string;
}

async function getPosts(): Promise<PostItem[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  try {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames
      .filter(name => name.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const slug = filename.replace(/\.md$/, '');
        
        return {
          slug,
          title: data.title || slug.replace(/-/g, ' '),
          date: data.date || new Date().toISOString().split('T')[0],
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          image: data.image || '/images/default-post.jpg',
          category: data.category
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">博客文章</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
                  {post.category && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {post.category}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-blue-600 font-medium">阅读全文 →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
