import { Fragment } from "react";
import { Sidebar } from "./sidebar";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <section className="mt-4 flex items-start justify-between gap-4 px-4 ">
        <Sidebar />
        {children}
      </section>
    </Fragment>
  );
};

export default BlogLayout;
