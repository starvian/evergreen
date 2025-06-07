import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import matter from 'gray-matter';

interface PageProps {
  params: { slug: string };
}

// 生成静态参数
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');

  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames
      .filter((name) => name.endsWith('.md'))
      .map((name) => ({
        slug: name.replace(/\.md$/, ''),
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
    const { data, content } = matter(fileContents);
    return {
      frontMatter: data,
      content,
    };
  } catch {
    return null;
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // 配置marked选项
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // 自定义渲染器
  const renderer = new marked.Renderer();

  // 自定义图片渲染
  renderer.image = function (href, title, text) {
    let safeHref = href || '';
    const safeText = text || '';
    
    // 处理路径问题：如果路径以/public开头，去掉/public前缀
    if (safeHref.startsWith('/public/')) {
      safeHref = safeHref.replace('/public/', '/');
    }
    
    // 确保路径以/开头（相对于public目录）
    if (safeHref && !safeHref.startsWith('/') && !safeHref.startsWith('http')) {
      safeHref = '/' + safeHref;
    }
    
    // 使用更简洁的方式获取 caption，优先使用 title，否则使用 alt text
    const caption = title || safeText;

    // 返回图片和可选的标题HTML
    return `<img src="${safeHref}" alt="${safeText}" class="w-full h-auto my-4 rounded-lg shadow-lg" loading="lazy" />${
      caption
        ? `<p class="text-sm text-gray-600 text-center italic mt-2">${caption}</p>`
        : ''
    }`;
  };

  const htmlContent = marked(post.content, { renderer });

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <article className="prose prose-lg max-w-none">
        {post.frontMatter.title && (
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-header-dark mb-4">
              {post.frontMatter.title}
            </h1>
            {post.frontMatter.date && (
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {new Date(post.frontMatter.date).toLocaleDateString('zh-CN')}
              </div>
            )}
            {post.frontMatter.category && (
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  post.frontMatter.category === '学校新闻'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {post.frontMatter.category}
              </span>
            )}
          </header>
        )}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </main>
  );
}
