const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// pré-carrega gif
const preloadGif = new Image();
preloadGif.src = "./img/Reply me love.gif";

// botão NO fugindo
noBtn.addEventListener("mouseover", () => {

  const newX = Math.random() * 200 - 100;
  const newY = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${newX}px, ${newY}px)`;

});

// botão YES
yesBtn.addEventListener("click", () => {

  questionContainer.style.display = "none";

  // MOSTRA O CORAÇÃO
  heartLoader.style.display = "flex";

  setTimeout(() => {

    // ESCONDE O CORAÇÃO
    heartLoader.style.display = "none";

    // MOSTRA RESULTADO
    resultContainer.style.display = "flex";

  }, 1500);

});