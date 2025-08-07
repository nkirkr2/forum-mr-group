import styles from './SliderControls.module.scss';
import SliderBtn from '../SliderBtn/SliderBtn';
import { RefObject } from 'react';


type SliderControlsProps = {
  paginationRef: React.RefObject<HTMLDivElement | null>;
};


const SliderControls = ({paginationRef}: SliderControlsProps) => (
  <div className={styles.slider_controls}>
    <SliderBtn direction='prev' />
    <div ref={paginationRef} className={`custom-pagination ${styles.pagination}`} />
    <SliderBtn direction='next' />
  </div>
);

export default SliderControls;
