import Image from "next/image";
import coffeeImage from "@/app/(public)/assets/images/coffee.jpg";
import ClientButton from "./(public)/components/client/ClientButton";

const Home = () => {
  return (
    <section className="mt-6 flex h-full items-center justify-between px-4">
      <section className="flex flex-1 flex-col items-start justify-start gap-2">
        <h1 className="text-4xl font-bold">The finest brew</h1>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ClientButton cta="Go to blogs" />
      </section>
      <section className="flex flex-1 items-center justify-center">
        <Image src={coffeeImage} alt="Coffee Mug" width={320} priority />
      </section>
    </section>
  );
};

export default Home;
