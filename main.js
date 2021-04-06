gsap.from('.head-logo', { duration:1, y: '-300%', ease: 'bounce' });
gsap.from('.link', { duration:0.5, opacity: 0, delay: 1, stagger: 0.3 });
gsap.from('.registration', { duration:1, y: '500%', opacity: 0, delay: 2.5, ease: 'elastic'});
gsap.fromTo('.animation-text', { opacity: 0, scale: 0, rotation: 720}, { duration:1, delay: 3, opacity: 1, scale: 1, rotation: 0});

const faders = document.querySelectorAll('.fade-in');
const textSize = document.querySelectorAll('.text-size');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    treshold: 0,
    rootMargin: '0px 0px -180px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})