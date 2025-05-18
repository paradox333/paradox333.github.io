const phrases = [
    "Resolviendo desafíos con código",
    "Creando sistemas escalables",
    "Código limpio y soluciones robustas",
    "En aprendizaje continuo",
    "Iterar, adaptar, construir",
    "Software con impacto",
    "Creando experiencias digitales"
  ];

  let i = 0, j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  const typedText = document.getElementById("typed-text");

  function loop() {
    isEnd = false;
    typedText.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        typedText.innerHTML = currentPhrase.join("");
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        typedText.innerHTML = currentPhrase.join("");
      }

      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) i = 0;
      }
    }

    const speed = isEnd ? 1500 : isDeleting ? 40 : 80;
    setTimeout(loop, speed);
  }

  document.addEventListener("DOMContentLoaded", loop);

  