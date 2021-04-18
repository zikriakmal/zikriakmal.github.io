
const preloader = document.querySelector('#loader');
const fadeEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    let temp=0;
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } 
    else {
        clearInterval(fadeEffect);
        preloader.classList.remove('preloader');
    }
  }, 100);
