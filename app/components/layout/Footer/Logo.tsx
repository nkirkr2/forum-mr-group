import Image from "next/image";
import styles from './Header.module.scss';

export default function Logo() {
  return (
    <div className={styles.footer__logo}>
      <Image
        src="/images/icons/text-logo.svg"
        alt="Логотип"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
