let father = document.querySelector("#father");
let son = document.querySelector("#son");
father.addEventListener(
  "click",
  function () {
    console.log("father...");
  },
  true,
);
son.addEventListener(
  "click",
  function () {
    console.log("son...");
  },
  true,
);
