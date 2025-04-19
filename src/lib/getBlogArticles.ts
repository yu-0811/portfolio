import { supabase } from "./supabaseClient";


export async function getBlogArticles() {
  // data の型は配列で、各要素は blogs テーブルの行を表すオブジェクト
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error.message);
    throw error;
  }

  return data;
}