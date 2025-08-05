import Image from "next/image";
import styles from './Surroundings.module.scss';

export default function Logo() {
  return (
    <div className={styles.surroundings__logo}>
      <Image
        src="/images/home/surroundings/surr-logo.svg"
        alt="Логотип"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
