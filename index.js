const block = document.querySelector(".block");
const btns = document.querySelectorAll(".btn");

const btnText = [
  "Здание",
  "Мост",
  "Стадион",
  "Здание",
  "Комплекс",
  "Отель",
  "Стадион",
  "Отель",
  "Стадион",
  "Стадион",
];
let btnOpen = false;
let btnId = "";

block.addEventListener("click", function (event) {
  btns.forEach((item, i) => {
    if (btnOpen === false && +i === +event.target.id) {
      openBtn(i);
      btnOpen = true;
      btnId = +i;
    } else {
      closeBtn(i);
      btnOpen = false;
      btnId = "";
    }

    if (event.target.id === "") {
      closeBtn(i);
      btnId = "";
    }
  });
});

function openBtn(i) {
  console.log("open");
  btns[i].classList.add("btn_big");
  btns[i].innerHTML = `<img src="/icons/Minus.svg" alt="minus"/>${btnText[i]}`;
}

function closeBtn(i) {
  console.log("close");
  btns[i].classList.remove("btn_big");
  btns[i].innerHTML = `<img src="/icons/Plus.svg" alt="plus"/>`;
}
