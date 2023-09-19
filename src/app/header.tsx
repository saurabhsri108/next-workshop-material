import Link from "next/link";

const Header = () => {
  return (
    <header className="h-full bg-slate-950 px-4 text-slate-50">
      <section className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <div className="flex items-center justify-start gap-6">
          <Link href="/" className="font-bold">
            Next13 App Router
          </Link>
          <nav>
            <ul className="flex items-center justify-start gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog/1">Blogs</Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex items-center justify-start gap-2">
          <li>
            <Link
              href="/login"
              className="flex rounded-sm border border-slate-50 px-4 py-2"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="flex rounded-sm bg-slate-50 px-4 py-2 text-slate-950"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
