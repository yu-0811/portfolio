import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          yuu&apos;s Portfolio
        </Link>
        <div className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/competitive-programming" className="hover:text-blue-600 transition">競技プログラミング</Link>
          <Link href="https://yukun-py.hatenablog.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
