'use client';
import { useEffect, useState } from "react";
import styles from "./Cookies.module.scss";

class Cookie {
  constructor(public name: string) {}

  get() {
    const matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" + this.name.replace(/([.$?*|{}()\\[\]\\/+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : false;
  }

  set(value: string, days: number) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${this.name}=${value || ""}${expires}; path=/`;
  }

  destroy() {
    this.set("", -1);
  }
}

const BASE_DURATION = 30; 

function Cookies() {
  const consentCookie = new Cookie("has_cookie_consent");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!consentCookie.get()) {
       const timer = setTimeout(() => setActive(true), 310);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (e: React.MouseEvent) => {
    e.preventDefault();
    consentCookie.set("yes", BASE_DURATION);
    setActive(false);
  };

  return (
    <div
      className={`${styles.cookie} ${active ? "is-active" : ""}`}
      data-cookies
      style={{ display: consentCookie.get() ? "none" : undefined }}
    >
      <div className={styles.cookie__content}>
        <p className={styles.cookie__text}>
          Мы&nbsp;используем cookie-файлы, чтобы вам было проще работать
          с&nbsp;сайтом
        </p>
      </div>
      <div className={styles.cookie__btns}>
        <a
          href="#"
          className={styles.cookie__btn}
          data-cookies-consent
          onClick={handleAccept}
        >
          ОК
        </a>
      </div>
    </div>
  );
}

export default Cookies;
