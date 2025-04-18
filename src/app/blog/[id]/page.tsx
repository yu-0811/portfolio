import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

// よくわからないけどこう書かないとエラーがでるからもう触らない方がいい

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  // 記事を取得
  // data に記事のデータが入り、それに article という名前をつけている
  // error にエラーが入る
  const { data: article, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 bg-gray-50 text-gray-900">
      <section className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-gray-300 inline-block">
          {article.title}
        </h1>
        <p className="text-lg text-gray-700 mb-6">{article.content}</p>
        <p className="text-sm text-gray-400 mb-8">
          投稿日: {new Date(article.created_at).toLocaleDateString()}
        </p>
        <Link href="/blog" className="inline-block text-blue-600 hover:underline">
          ← ブログ一覧に戻る
        </Link>
      </section>
    </main>
  );
}
