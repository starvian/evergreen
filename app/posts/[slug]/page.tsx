import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
  } catch (error) {
    return null;
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const content = await getPost(params.slug);

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
