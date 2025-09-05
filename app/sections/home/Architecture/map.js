import { resizeObserver } from '../utils/observers';
const map = document.querySelector('[data-map="block"]');
const breakpoint = window.matchMedia('(max-width:1023px)');

const openPin = (pin) => {
  if (pin.classList.contains('is-active')) {
    return;
  }
  pin.classList.add('is-active');
  const content = pin.querySelector('[data-pin="content"]');
  const wrapper = pin.querySelector('[data-pin="wrapper"]');
  content.style.width = ${wrapper.scrollWidth}px;
  content.addEventListener('transitionend', () => {
    content.style.width = 'none';
  }, { once: true });
};

const closePin = (pin) => {
  pin.classList.remove('is-active');
  const content = pin.querySelector('[data-pin="content"]');
  content.style.width = ${content.scrollWidth}px;
  setTimeout(() => {
    content.style.width = null;
  }, 0);
};

const setPinsSize = (pins) => {
  pins.forEach((pin) => {
    pin.style.width = null;
    pin.style.height = null;
    if (breakpoint.matches) {
      return;
    }
    const pinWidth = Number(window.getComputedStyle(pin).getPropertyValue('width').replace(/px$/, ''));
    pin.style.width = ${Math.round(pinWidth)}px;
    pin.style.height = ${Math.round(pinWidth)}px;
  });
};

const initMap = () => {
  if (!map) {
    return;
  }

  const mapContent = map.querySelector('[data-map="content"]');
  const pins = map.querySelectorAll('[data-pin="element"]');

  setPinsSize(pins);

  map.panzoom = window.panzoom(mapContent, {
    disableZoom: true,
    contain: 'outside',
    duration: 0,
    startScale: 1,
    animate: false,
    startX: map.offsetWidth !== mapContent.scrollWidth ? (map.offsetWidth - mapContent.scrollWidth) / 2 : 0,
  });

  map.classList.add('is-active');

  const resize = () => {
    setPinsSize(pins);
    map.panzoom.reset({
      startScale: 1,
      startX: map.offsetWidth !== mapContent.scrollWidth ? (map.offsetWidth - mapContent.scrollWidth) / 2 : 0,
    });
  };

  resizeObserver.subscribe(resize);

  pins.forEach((pin) => {
    pin.addEventListener('click', () => {
      if (map.openedPin && map.openedPin !== pin) {
        closePin(map.openedPin);
      }
      map.openedPin = pin;
      openPin(pin);
    });

    map.addEventListener('click', (evt) => {
      if (evt.target.closest('[data-pin]')) {
        return;
      }
      if (map.openedPin) {
        closePin(map.openedPin);
        map.openedPin = null;
      }
    });
  });
};

export { initMap };