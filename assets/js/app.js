
const preloader = document.querySelector('.preloader');
const fadeEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    let temp=0;
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } 
    else if(preloader.style.opacity==0){
        preloader.style.zIndex = -999;
        clearInterval(fadeEffect)
    }
  }, 100);
