import Link from "next/link";

export const Sidebar = async () => {
  const blogs: Blog[] = await (
    await fetch(`${process.env.JSON_URL}/articles`)
  ).json();
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">All Blogs</h2>
      <ul className="border-r">
        {blogs?.map(({ id, slug, title }) => (
          <li key={id} className="flex flex-col gap-2">
            <Link
              href={`/blog/${slug}`}
              className="text-md w-full border-b bg-gray-950 px-4 py-2 text-gray-50"
            >
              {id} | {title.toLocaleUpperCase()}
            </Link>
          </li>
        ))}
        {/* <li>
        <Link href={`/blog/1`}>Post 1</Link>
      </li>
      <li>
        <Link href={`/blog/2`}>Post 2</Link>
      </li>
      <li>
        <Link href={`/blog/3`}>Post 3</Link>
      </li> */}
      </ul>
    </section>
  );
};

type Blog = {
  id: string;
  slug: string;
  title: string;
  description: string;
};
