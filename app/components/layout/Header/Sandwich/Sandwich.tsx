import { forwardRef } from 'react';
import styles from './Sandwich.module.scss';

type SandwichProps = {
  onClick: () => void;
  isOpen: boolean;
};

const Sandwich = forwardRef<HTMLButtonElement, SandwichProps>(
  ({ onClick, isOpen }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${styles.Sandwich} ${isOpen ? styles.active : ''}`}
        style={{
          position: 'relative',
          width: '32rem',
          height: '24rem',
          cursor: 'pointer',
        }}
      >
        <span className={styles.b}></span>
        <span></span>
        <span></span>
      </button>
    );
  }
);

Sandwich.displayName = 'Sandwich'; 

export default Sandwich;
