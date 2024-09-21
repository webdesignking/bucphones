setTimeout(function(){
    document.querySelector('.splash-screen').style.display = 'none';
}, 5000);

const scrollElements = document.querySelectorAll('.animate-on-scroll');

const scrollReveal = () => {
    scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight * 0.8) {
            element.classList.add('scroll-reveal');
        } else {
            element.classList.remove('scroll-reveal');
        }
    });
};

window.addEventListener('scroll', scrollReveal);




