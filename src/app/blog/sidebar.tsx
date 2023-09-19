import Link from "next/link";

export const Sidebar = ({ blogs }: { blogs: Array<Blog> }) => {
  return (
    <ul>
      {blogs?.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

type Blog = {
  id: string;
  title: string;
  description: string;
};
