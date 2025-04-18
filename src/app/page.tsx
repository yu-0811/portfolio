import Image from "next/image";
import Link from "next/link";
import { getLatestQiitaArticles, getLatestHatenaArticles } from "@/lib/getLatestArticles";

export default async function Home() {
  const [QiitaArticle] = await getLatestQiitaArticles(1);
  const [hatenaArticle] = await getLatestHatenaArticles(1);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 bg-gray-50 text-gray-900">
      {/* 自己紹介 */}
      <section className="max-w-2xl w-full text-center mb-16">
        <Image
          src="/profile.jpg"
          alt="プロフィール画像"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h2 className="text-4xl font-bold mb-4 border-b-2 border-gray-300 inline-block">
          yuu
        </h2>
        <div className="text-lg text-gray-700 space-y-2 mt-4">
          <p>所属：同志社大学 文化情報学部 3年</p>
          <p>趣味：競技プログラミング、散歩、温泉巡り</p>
        </div>
      </section>

      {/* 実績・プロジェクト */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 inline-block">
          Achievements・Projects
        </h2>

        {/* 競技プログラミング */}
        <div className="mb-8">
        <div className="flex items-center justify-start space-x-4">
            <h3 className="text-2xl font-semibold text-gray-700">競技プログラミング</h3>
            <Link
              href="/competitive-programming"
              className="text-blue-500 hover:underline text-base"
            >
              詳しくはこちら
            </Link>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
            <li>
              <a
                href="https://atcoder.jp/users/YuuuT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:underline text-gray-700"
              >
                <strong>AtCoder</strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5L21 3m0 0h-6.75M21 3v6.75M21 21H3V3"
                  />
                </svg>
              </a>  
              {" "}  - Algorithm : <span className="text-cyan-600">水色</span>, Heuristic : <span className="text-blue-600">青色</span>
            </li>
            <li>
              <strong>KSDUPC</strong>（京都産業大学・同志社大学プログラミングコンテスト）開催
            </li>
            <li>
              <Link
                href="/problems"
                className="text-blue-500 hover:underline"
              >
                作問集
              </Link>
              {" "} - 過去に作成した問題一覧<br />
            </li>
          </ul>
        </div>

        {/* データサイエンス・AI */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-700">データサイエンス・AI</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>FIDE & Google Efficient Chess AI Challenge (Kaggle)</strong> - 🥉 Bronze Medal (106th / 1120 teams)
            </li>
            <li>
              <strong>第２回NEXCO東日本 渋滞予測チャレンジコンテスト (Signate)</strong> - 🥉 Bronze Medal (71st / 211 teams)
            </li>
            <li>
              <strong>GCI 2023 Winter</strong> - 修了
            </li>
          </ul>
        </div>
      </section>

      {/* Qiita,はてブ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 inline-block">
          Article
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a href="https://qiita.com/yuu_kyopro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Qiita
            </a>
          </li>
          {/* Qiita 最新記事表示 */}
          <div className="bg-white p-3 rounded shadow-md text-sm">
            <p className="text-xs text-gray-500 font-semibold mb-2">🆕 最新記事</p>
            <a
              href={QiitaArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-blue-600 hover:underline"
            >
              {QiitaArticle.title}
            </a>
            <p className="text-gray-700 mt-2 line-clamp-3">
              {QiitaArticle.body.replace(/<[^>]+>/g, "").slice(0, 100)}... {/* 100文字まで表示 */}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              投稿日: {new Date(QiitaArticle.created_at).toLocaleDateString()}
            </p>
          </div>

          <li>
            <a href="https://yukun-py.hatenablog.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              はてなブログ
            </a>
            {/* はてなブログ最新記事表示 */}
            <div className="bg-white p-3 rounded shadow-md text-sm mt-2">
              <p className="text-xs text-gray-500 font-semibold mb-2">
                🆕 最新記事
              </p>
              <a
                href={hatenaArticle?.link ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-blue-600 hover:underline"
              >
                {hatenaArticle?.title ?? "記事タイトル"}
              </a>
              <p className="text-gray-700 mt-2 line-clamp-3">
                {(hatenaArticle?.description ?? "").slice(0, 100)}...
              </p>
              <p className="text-xs text-gray-400 mt-1">
                投稿日: {hatenaArticle?.pubDate}
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* このサイト内のブログ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 inline-block">
          サイト内ブログ
        </h2>
        <p className="text-gray-700 mb-3">
          このサイト内にもブログページを実装しています。
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300"
        >
          サイト内ブログを見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
