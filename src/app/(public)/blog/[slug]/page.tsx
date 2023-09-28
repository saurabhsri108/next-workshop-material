// "use client";

import { notFound } from "next/navigation";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  try {
    const response = await fetch(`${process.env.JSON_URL}/articles/${slug}`);
    const blogPost = await response.json();
    if (!blogPost)
      return {
        title: "Page not found",
        description: "No such page exists",
      };
    return {
      title: blogPost.title,
      description: blogPost.description,
      category: "technology",
      other: {
        custom: "metassss",
      },
      alternates: {
        canonical: `/articles/${blogPost.slug}`,
        languages: {
          "en-IN": `/en-IN/articles/${blogPost.slug}`,
          "en-US": `/en-US/articles/${blogPost.slug}`,
        },
      },
    };
  } catch (err) {
    console.error(err);
    return {
      title: "Page not found",
      description: "No such page exists",
    };
  }
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.JSON_URL}/articles`);
  const blogs = await response.json();
  if (!blogs) return notFound();
  return blogs.map((blog: any) => ({
    slug: blog.slug.toString(),
  }));
}

const SingleBlog = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const blogs: Blog[] = await (
    await fetch(`${process.env.JSON_URL}/articles?slug=${slug}`)
  ).json();
  const { title, long_description: description } = blogs[0];

  return (
    <section className="flex-1">
      <h1 className="text-4xl font-bold">{title.toLocaleUpperCase()}</h1>
      <p className="text-lg text-slate-600">{description}</p>
    </section>
  );
};
// const SingleBlog = ({ params: { slug } }: { params: { slug: string } }) => {
//   console.log("main-page");
//   const searchParams = useSearchParams();
//   const id2 = searchParams?.get("slug");
//   console.log(slug);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const { title, description }: Blog = await (
//         await fetch(`${process.env.NEXT_PUBLIC_JSON_URL}/articles/${slug}`)
//       ).json();

//       setTitle(title);
//       setDescription(description);
//     };
//     fetchData();
//   });

//   return (
//     <section className="flex-1">
//       <h1 className="text-4xl font-bold">{title}</h1>
//       <p className="text-lg text-slate-600">{description}</p>
//     </section>
//   );
// };

export default SingleBlog;

type Blog = {
  id: string;
  slug: string;
  title: string;
  long_description: string;
};
