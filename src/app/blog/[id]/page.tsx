const SingleBlog = async ({ params: { id } }: { params: { id: string } }) => {
  const { title, description }: Blog = await (
    await fetch(`http://localhost:5000/posts/${id}`)
  ).json();

  return (
    <section className="flex-1">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-slate-600">{description}</p>
    </section>
  );
};

export default SingleBlog;

type Blog = {
  id: string;
  title: string;
  description: string;
};
