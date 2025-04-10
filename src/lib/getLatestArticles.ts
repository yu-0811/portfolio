import { parseStringPromise } from "xml2js";

type HatenaRSSItem = {
  title: [string];
  link: [string];
  description: [string];
  pubDate: [string];
};

// Qiitaの最新記事を取ってくる
export async function getLatestQiitaArticles(limit = 1) { // limit = 1 : 最新1件
  const res = await fetch(
    `https://qiita.com/api/v2/users/yuu_kyopro/items?page=1&per_page=${limit}`,
    { next: { revalidate: 3600 } } // 1時間ごとに再取得
  );
  if (!res.ok) throw new Error("記事の取得に失敗しました");
  return res.json(); // jsonにして返してる
}

// はてなブログの最新記事を取ってくる
export async function getLatestHatenaArticles(limit = 1) {
  const res = await fetch("https://yukun-py.hatenablog.com/rss");
  if (!res.ok) throw new Error("はてなブログ記事の取得に失敗しました");

  const xmlText = await res.text();

  // XMLをJSオブジェクトに変換
  const parsed = await parseStringPromise(xmlText);

  const items = parsed.rss.channel[0].item.slice(0, limit); // 最新のlimit件を取得
  
  const articles = (items as HatenaRSSItem[]).map((item) => ({
    title: item.title[0],
    link: item.link[0],
    description: item.description[0].replace(/<[^>]+>/g, ""), // HTMLタグを除去
    pubDate: new Date(item.pubDate[0]).toLocaleDateString(), // 日付をフォーマット
  }));
  console.log(articles); 

  return articles;
}


