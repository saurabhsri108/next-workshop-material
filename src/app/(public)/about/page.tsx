import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About us page with information",
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

const About = () => {
  return (
    <section className="flex items-center justify-center">
      <h1 className="text-6xl font-bold">About</h1>
    </section>
  );
};

export default About;
