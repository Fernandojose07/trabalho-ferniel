const Icones = document.querySelectorAll(".filmes .filme");

const cards = document.querySelectorAll(".filmes .assistir");

Icones.forEach(function (icone, indice) {
  icone.addEventListener("click", function () {
    cards.forEach(function (carta) {
      carta.classList.remove("visible");
    });

    cards[indice].classList.add("visible");
  });
});