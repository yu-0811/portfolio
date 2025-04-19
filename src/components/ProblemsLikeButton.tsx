"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  problemId: string;
  initialLikes: number;
};

export function ProblemsLikeButton({ problemId, initialLikes }: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("problems")
      .update({ likes: likes + 1 })
      .eq("id", problemId);

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
      className={`inline-flex items-center text-pink-500 hover:text-pink-600 transition-colors ${
        loading ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "…" : `❤️ ${likes}`}
    </button>
  );
}
