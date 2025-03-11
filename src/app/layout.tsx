import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "GlobalNomad",
  description: "다양한 체험들을 경험해보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="public/images/logo_icon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
