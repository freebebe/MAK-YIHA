import _ from "loadsh";

function createElement() {
  const dom = document.getElementById("div");
  dom.innerHTML = _.join(["aicoder", ".com", "wow"]);
  return dom;
}

document.body.appendChild(createDomElement());
