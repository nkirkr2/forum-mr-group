import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.scss';

export default function Logo() {
  return (
    <div className={styles.header__logo}>
      <Link href={'/'}>
        <Image
          src="/images/icons/forum-logo.svg"
          alt="Логотип"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
}
