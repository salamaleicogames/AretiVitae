//Gsap
//Scroll Trigger
import gsap from "https://cdn.skypack.dev/gsap";
  import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
  

const mainImg = document.getElementById('.im2sticky');
    const textBlocks = document.querySelectorAll('.texto');

    textBlocks.forEach(block => {
      ScrollTrigger.create({
        trigger: block,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          const src = block.getAttribute('data-img');
          mainImg.src = src; // troca a imagem
        },
        onEnterBack: () => {
          const src = block.getAttribute('data-img');
          mainImg.src = src; // troca a imagem ao subir
        }
      });
    });