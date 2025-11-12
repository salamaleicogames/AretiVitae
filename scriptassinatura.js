//Gsap
//Scroll Trigger
import gsap from "https://cdn.skypack.dev/gsap";
  import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
});

document.querySelectorAll('.Network3').forEach((el) => observer.observe(el));
document.querySelectorAll('p').forEach((el) => observer.observe(el));


