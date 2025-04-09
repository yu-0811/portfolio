import Image from "next/image";

export const metadata = {
  title: "競技プログラミング | yuu's Portfolio",
};

export default function CompetitiveProgramming() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 text-gray-900">
      <section className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6">競技プログラミングについて</h1>
        <p className="mb-4">
          競技プログラミングは、与えられた問題に対して制限時間内に最適なアルゴリズムを設計・実装する力を競うプログラミングコンテストです。
          参加者は問題を解決するプログラムを作成し、その正確性と効率性を競います。
        </p>
        <p className="mb-4">
          コンテストには、大きく分けて<strong>アルゴリズム部門</strong>と<strong>ヒューリスティク部門</strong>の2つがあります。
        </p>

        <h2 className="text-3xl font-bold mb-6">アルゴリズム部門</h2>
        <p className="mb-4">
          アルゴリズム部門では、以下のような問題が出題されます。
        </p>
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">問題文</h2>
          <p className="mb-4">
            <strong>N</strong> 個の食べ物があり、それぞれの食べ物にはビタミン <strong>1, 2, 3</strong> のうちちょうど 1 種類のみが含まれています。
            <br />
            具体的には、<strong>i</strong> 番目の食べ物を食べると、ビタミン <strong>V<sub>i</sub></strong> を <strong>A<sub>i</sub></strong> だけ摂取でき、カロリー <strong>C<sub>i</sub></strong> も摂取されます。
          </p>
          <p className="mb-4">
            高橋君は、摂取するカロリーの合計が <strong>X</strong> 以下になるように、<strong>N</strong> 個の食べ物のうちいくつか（0 個でも可）を選んで食べます。
            <br />
            このとき、「ビタミン <strong>1, 2, 3</strong> のうちもっとも摂取量が少ないものの摂取量」として考えられる<strong>最大の値</strong>を求めてください。
          </p>
          <h4 className="text-xl font-bold mb-4">制約</h4>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>1 ≤ <strong>N</strong> ≤ 5000</li>
            <li>1 ≤ <strong>X</strong> ≤ 5000</li>
          </ul>
        </section>
        <p className="mb-4">
          食べ物の組み合わせは 2<sup>N</sup> 通り存在するため、全てを調べるのは現実的ではありません。
          しかし、動的計画法と二分探索というアルゴリズムを用いることで、1 秒以内に解を求めることが可能です。
        </p>

        <h2 className="text-3xl font-bold mb-6">ヒューリスティク部門</h2>
        <p className="mb-4">
          ヒューリスティク部門では、最適解の導出が困難な問題に対して、<strong>現実的な時間内にできるだけ良い解を見つける</strong>ことが求められます。
        </p>
        <p className="mb-4">
          以下は、ヒューリスティク部門で出題された問題の一例です。
          クレーンを使って左側のコンテナを、右側の複数の搬出口に指定された順に最速で運ぶための操作手順を考える問題です。
        </p>
        <div className="mb-6">
          <Image
            src="/visualizer.gif"
            alt="ヒューリスティク部門のビジュアライザ"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <p className="mb-4">
          私は大学1年生から競技プログラミングを始め、現在ではアルゴリズム部門・ヒューリスティク部門の両方で<strong>上位10%</strong>のランクを獲得しています。
        </p>

        <h2 className="text-3xl font-bold mb-6">オンサイトイベントについて</h2>
        <p className="mb-4">
          コンテストにはオンライン開催のほか、オフライン（オンサイト）で行われるイベントもあります。
        </p>
        <p className="mb-4">
          私は 2024 年 9 月に「KSDUPC（京都産業大学・同志社大学プログラミングコンテスト）」というオンサイトイベントを企画・開催しました。
          問題の作成、会場の手配、参加者管理など、運営全般を担当しました。
        </p>
        <p className="mb-4">
          当日は40名以上の参加者が集まり、盛況のうちに終了しました。
        </p>
        <div className="mb-6 text-center">
          <Image
            src="/onsite.jpg"
            alt="KSDUPCのオンサイトイベントの様子"
            width={500}
            height={300}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="mt-2 text-sm text-gray-500">当日の様子</p>
        </div>
        <p className="mb-4">
          詳しくは
          <a
            href="https://yukun-py.hatenablog.com/entry/2024/09/16/210912"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mx-1"
          >
            こちらの記事
          </a>
          をご覧ください。
        </p>

      </section>
    </main>
  );
}
