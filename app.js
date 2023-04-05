// Déclaration de variables
let toggle_btn;
let big_wrapper;
let hamburger_menu;
let mode = "light";

// Fonction pour récupérer des éléments 
//HTML à partir de leur classe CSS
function declare() {
  toggle_btn = document.querySelectorAll(".changebtn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

// Récupération de l'élément HTML <main>
const main = document.querySelector("main");

// Appel de la fonction declare() pour récupérer les éléments HTML
declare();

// Fonction pour animer un changement de mode d'affichage
function toggleAnimation() {

  // Clone de l'élément big_wrapper
  let clone = big_wrapper.cloneNode(true);

  // Ajout ou suppression 
  //des classes CSS pour changer le mode d'affichage
  if (mode === "light") {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  // Ajout de la classe CSS "copy" pour animer le clone
  clone.classList.add("copy");

  // Ajout du clone à l'élément <main>
  main.appendChild(clone);

  // Ajout de la classe CSS "stop-scrolling" à 
  //<body> pour empêcher le défilement pendant l'animation
  document.body.classList.add("stop-scrolling");

  // Écouteur d'événement pour nettoyer 
  //et réinitialiser la page à la fin de l'animation
  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");

    // Réinitialisation des éléments HTML et des écouteurs d'événements
    declare();
    events();
  });
}

// Fonction pour ajouter des écouteurs d'événements à certains éléments HTML
function events() {
  // Écouteur d'événement pour changer le mode d'affichage en mode foncé
  toggle_btn[0].addEventListener("click", () => {
  mode = "dark";
      toggleAnimation();
  });

  // Écouteur d'événement pour changer le mode d'affichage en mode clair
  toggle_btn[1].addEventListener("click", () => {
    mode = "light";
      toggleAnimation();
  });

  // Écouteur d'événement pour activer/désactiver un menu déroulant
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

// Fonction pour changer l'image de la paire
function imgSlider(anything) {
  document.querySelector(".product").src = anything;
}

// Appel de la fonction events() pour initialiser les écouteurs d'événements
events();
