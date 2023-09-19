import { Fragment } from "react";
import { Sidebar } from "./sidebar";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const blogs = await (await fetch("http://localhost:5000/posts")).json();
  return (
    <Fragment>
      <section className="flex items-start justify-between gap-4">
        <Sidebar blogs={blogs} />
        {children}
      </section>
    </Fragment>
  );
};

export default BlogLayout;
