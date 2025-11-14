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
          src="https://app.comagic.ru/static/cs.min.js?k=OvKXDWSlorAc7kQq8IE41zoGUxIiZIcm" 
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
        <Script id="ym-init" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=95223539', 'ym');

            ym(95223539, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/95223539" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        <Script id="mindbox" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              mindbox = window.mindbox || function() { mindbox.queue.push(arguments); };
              mindbox.queue = mindbox.queue || [];
              mindbox('create', {
                  endpointId: 'Mr-group.forum.mr-group.ru'
              });
            });
          `}
        </Script>
        <Script
          async
          type="text/javascript" 
          src="https://api.mindbox.ru/scripts/v1/tracker.js"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
