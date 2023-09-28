"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ClientLink = ({ path, name }: { path: string; name: string }) => {
  const pathname = usePathname();
  const sendAnalytics = async () => {
    if (name === "Next13 App Router") {
      const data = {
        event: "logo_clicked",
        data: {
          name: "Next13 App Router",
          pageSection: "Header",
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
    }
  };
  return (
    <Link
      href={path}
      className={`${path === pathname ? "underline" : ""}`}
      onClick={sendAnalytics}
    >
      {name}
    </Link>
  );
};

export default ClientLink;
