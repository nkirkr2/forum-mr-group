// app/layout.tsx
import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "/fonts/elmamonodemo-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-family",
});

export const metadata: Metadata = {
  title: "FORUM - FORUM. Официальный сайт клубного дома от компании MR Group",
  description: 'Клубный дом с видовыми квартирами за бывшим кинотеатром Форум от MR Private'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={myFont.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
