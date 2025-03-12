"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {!hideLayout && <Nav />}
      <div className={`${!hideLayout && "app"}`}>{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}
