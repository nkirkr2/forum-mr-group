import styles from './Sandwich.module.scss';

type SandwichProps = {
  onClick: () => void;
  isOpen: boolean;
}

export default function Sandwich({onClick, isOpen}: SandwichProps) {
  
  return (
    <button
      onClick={onClick}
      className={`${styles.Sandwich} ${isOpen ? styles.active : ""}`}
      style={{
        position: "relative",
        width: "42rem",
        height: "24rem",
        cursor: 'pointer',
      }}
    >
     <span className={styles.b}></span>
     <span></span>
     <span></span>
    </button>
  );
}
