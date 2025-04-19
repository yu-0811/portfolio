"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  blogId: string;
  initialLikes: number;
};

export default function BlogLikeButton({ blogId, initialLikes }: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    setLoading(true);
    // いいねを更新する処理
    const { error } = await supabase
      .from("blogs")
      .update({ likes: likes + 1 })
      .eq("id", blogId);

    if (!error) {
      setLikes((prev) => prev + 1);
    } else {
      alert("エラーが発生しました！");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className={`inline-flex items-center px-6 py-3 border border-gray-300 text-gray-800 bg-white font-medium rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300 ${
        loading ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "送信中…" : `❤️ いいね (${likes})`}
    </button>
  );
}
