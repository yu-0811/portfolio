import Link from "next/link";
import { getBlogArticles } from "@/lib/getBlogArticles";

export default async function BlogPage() {
  const articles = await getBlogArticles();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 bg-gray-50 text-gray-900">
      <section className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 inline-block">
          ブログ記事一覧
        </h1>
        <ul className="space-y-6">
          {articles.map((article) => (
            <li
              key={article.id}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${article.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600 line-clamp-3">
                {article.content.slice(0, 100)}...
              </p>
              <p className="text-sm text-gray-400 mt-2">
                投稿日: {new Date(article.created_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}