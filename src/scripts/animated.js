const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

const observeAndAnimate = (element, animation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCSS(element, animation).then(() => {
            // Al terminar, vuelve a observar el elemento para futuras animaciones
            observer.observe(entry.target);
          });
        }
      });
    },
    { threshold: 0.50 }
  );

  observer.observe(document.querySelector(element));
};

observeAndAnimate('.left', 'fadeInLeft');
observeAndAnimate('.about-img', 'fadeInLeft');
observeAndAnimate('.right', 'fadeInRight');
observeAndAnimate('.about-info', 'fadeInRight');
observeAndAnimate('.services-container', 'flipInY');