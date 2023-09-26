// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

const SingleBlog = async ({ params: { id } }: { params: { id: string } }) => {
  console.log("main-page");
  const { title, description }: Blog = await (
    await fetch(`${process.env.JSON_URL}/posts/${id}`)
  ).json();

  return (
    <section className="flex-1">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-slate-600">{description}</p>
    </section>
  );
};
// const SingleBlog = ({ params: { id } }: { params: { id: string } }) => {
//   console.log("main-page");
//   const searchParams = useSearchParams();
//   const id2 = searchParams?.get("id");
//   console.log(id);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const { title, description }: Blog = await (
//         await fetch(`${process.env.NEXT_PUBLIC_JSON_URL}/posts/${id}`)
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
  title: string;
  description: string;
};
