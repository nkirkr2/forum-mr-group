import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import Script from "next/script";

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
      <head>
        <meta
          name="yandex-verification"
          content="f710f09e02fc0d9c"
        />
        <Script 
          type="text/javascript" 
          src="https://app.comagic.ru/static/cs.min.js?k=XmZcX1deUQbZo5Vl5mAI60C9P9ZgKGnt" 
        />
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){ w[l]=w[l]||[];w[l].push({ 'gtm.start':
                  new Date().getTime(),event:'gtm.js' });var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKJ5MD9D');
          `}
        </Script>
        <Script
          async
          type="text/javascript" 
          src="https://smartcallback.ru/api/SmartCallBack.js?t=kUp43RtwmYtq46zaqKrtyh" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
