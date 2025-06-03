import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 生成静态参数
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames
      .filter(name => name.endsWith('.md'))
      .map(name => ({
        slug: name.replace(/\.md$/, '')
      }));
  } catch {
    return [];
  }
}

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
  } catch {
    return null;
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params;
  const content = await getPost(slug);

  if (!content) {
    notFound();
  }

  const htmlContent = marked(content);

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </main>
  );
}
