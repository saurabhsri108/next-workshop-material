import ClientLink from "@/app/(public)/components/client/ClientLink";
import Link from "next/link";

const Header = async () => {
  const navigations: Navigation[] = await (
    await fetch(`${process.env.JSON_URL}/navigations`, {
      cache: "no-cache",
    })
  ).json();

  return (
    <header className="h-full bg-slate-950 px-4 text-slate-50">
      <section className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <div className="flex items-center justify-start gap-6">
          <ClientLink path="/" name="Next13 App Router" />
          <nav>
            <ul className="flex items-center justify-start gap-2">
              {navigations.map((item) => {
                return (
                  <li key={item.id}>
                    <ClientLink path={item.path} name={item.name} />
                  </li>
                );
              })}
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

type Navigation = {
  id: number;
  name: string;
  path: string;
};

export default Header;
