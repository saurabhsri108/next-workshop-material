"use client";

import { useRouter } from "next/navigation";

const ClientButton = ({ cta }: { cta: string }) => {
  const router = useRouter();
  const sendAnalytics = async () => {
    const data = {
      event: "cta_clicked",
      data: {
        name: "Go to blog",
        pageSection: "Hero",
      },
    };
    try {
      await fetch(`${process.env.NEXT_PUBLIC_JSON_URL}/analytics`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const routeToBlog = () => {
    sendAnalytics();
    router.push("/blog/1?q=something");
  };

  return (
    <button
      type="button"
      className="rounded-sm bg-gray-950 px-6 py-4 text-xl text-gray-50"
      onClick={() => routeToBlog()}
    >
      {cta}
    </button>
  );
};

export default ClientButton;
