import Link from 'next/link';
import fs from 'fs';
import path from 'path';

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  try {
    const files = fs.readdirSync(postsDirectory);
    return files.map((file) => ({
      slug: file.replace(/\.md$/, ''),
      title: file.replace(/\.md$/, '').replace(/-/g, ' '),
    }));
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
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">点击阅读全文 →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
