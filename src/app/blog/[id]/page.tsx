import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function BlogDetailPage({ params }: Props) {
  // 記事を取得
  // data には取得したデータが入り、それに article という名前をつけている
  // error にはエラーが入る
  const { data: article, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", params.id)
    .single(); // 単一のレコードを取得

  // 記事が存在しない場合は 404 ページを表示
  if (error || !article) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.content}</p>
      <p className="text-sm text-gray-400 mb-6">
        投稿日: {new Date(article.created_at).toLocaleDateString()}
      </p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        ← ブログ一覧に戻る
      </Link>
    </main>
  );
}