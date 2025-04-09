// Qiitaの最新記事を取ってくる
export async function getLatestQiitaArticles(limit = 1) { // limit = 1 : 最新1件
  const res = await fetch(
    `https://qiita.com/api/v2/users/yuu_kyopro/items?page=1&per_page=${limit}`,
    { next: { revalidate: 3600 } } // 1時間ごとに再取得
  );
  if (!res.ok) throw new Error("記事の取得に失敗しました");
  return res.json(); // jsonにして返してる
}
