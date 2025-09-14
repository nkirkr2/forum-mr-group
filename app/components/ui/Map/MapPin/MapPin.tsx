import styles from './MapPin.module.scss';
import { MapPinTypes } from '../types';
import { useEffect, useRef } from 'react';

type MapPinProps = {
  pin: MapPinTypes;
  index: number;
  isOpen: boolean;                
  onToggleClick: (id: number) => void;
}

function MapPin({ pin, isOpen, onToggleClick }: MapPinProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const content = contentRef.current;
    const wrapper = wrapperRef.current;
    if (!content || !wrapper) return;

    content.style.overflow = 'hidden';
    content.style.willChange = 'max-width';
    wrapper.style.willChange = 'width';

    const fullWidth = `${wrapper.scrollWidth}px`;

    if (isOpen) {
      wrapper.style.width = fullWidth;
      const onEnd = () => {
        content.style.maxWidth = 'none';
        wrapper.style.width = 'auto';
        wrapper.removeEventListener('transitionend', onEnd);
        content.style.willChange = '';
        wrapper.style.willChange = '';
      };

      content.style.maxWidth = fullWidth;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      wrapper.offsetWidth;
      wrapper.addEventListener('transitionend', onEnd);
    } else {
      content.style.maxWidth = fullWidth;
      wrapper.style.width = fullWidth;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      wrapper.offsetWidth;
      requestAnimationFrame(() => {
        wrapper.style.width = '0px';
      });

      const onEnd = () => {
        content.style.maxWidth = '0px';
        wrapper.removeEventListener('transitionend', onEnd);
        content.style.willChange = '';
        wrapper.style.willChange = '';
      };
      wrapper.addEventListener('transitionend', onEnd);
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.MapPin} ${isOpen ? styles.active : ''}`} 
      data-pin-id={pin.id} 
      style={{ top: `${pin.position[0]}%`, left: `${pin.position[1]}%` }}
      onClick={(e) => {
        e.stopPropagation();
        onToggleClick(pin.id); 
      }}
    >
      <div
        className={styles.MapPin__icon}
        style={{ backgroundImage: `url(${pin.icon})` }}
      />
      <div
        ref={contentRef}
        className={styles.MapPin__content}
        aria-hidden={!isOpen}
      >
        <div
          ref={wrapperRef}
          className={styles.MapPin__content_wrapper}
          data-pin="wrapper"
        >
          <div className={styles.MapPin__content_wrapper__post}>
            <span className={styles.MapPin__text}>{pin.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPin;
