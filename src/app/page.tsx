import Image from "next/image";

const Home = () => {
  console.log("Root Page");
  return (
    <main className="flex flex-col items-center justify-center">
      <Image
        src="/test.jpg"
        alt="Big big image"
        width={480}
        height={240}
        quality={100}
        priority={true}
      />
    </main>
  );
};

export default Home;
