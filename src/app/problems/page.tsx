import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default async function ProblemListPage() {
  const { data: problems, error } = await supabase
    .from("problems")
    .select("*")
    .order("date", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    return <p className="text-red-500">データの取得に失敗しました。</p>;
  }

  return (
    <main className="flex flex-col items-center px-4 py-12 bg-gray-50 min-h-screen">
      <section className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8 border-b pb-2">作問集</h1>
        <p className="text-gray-600 mb-4">
          ここでは、私が過去に作成した競技プログラミングの問題を一覧で表示しています。
        </p>
        <ul className="space-y-4">
          {problems?.map((problem) => (
            <li key={problem.id} className="bg-white p-4 rounded shadow-sm">
              <p className="text-sm text-gray-400">
                {new Date(problem.date).toLocaleDateString()}
              </p>
              <a
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {problem.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
