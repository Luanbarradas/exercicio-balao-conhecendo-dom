/* remove o botão do DOM */

const explodir = document.querySelector(".balao");

explodir.onclick = () => {
  explodir.remove();
};

/* Apenas deixar o botão invisível */

// const explodir = document.querySelector(".balao");

// explodir.onclick = () => {
//   explodir.style.display = "none";
// };
