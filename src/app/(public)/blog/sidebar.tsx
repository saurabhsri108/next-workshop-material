// "use client";

import Link from "next/link";

export const Sidebar = async () => {
  console.log("Sidebar");
  const blogs: Blog[] = await (
    await fetch(`${process.env.JSON_URL}/posts`)
  ).json();
  return (
    <ul>
      {blogs?.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
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
  );
};

type Blog = {
  id: string;
  title: string;
  description: string;
};
