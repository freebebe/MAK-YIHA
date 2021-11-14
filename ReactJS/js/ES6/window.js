function testClick() {
  window.addEventListener("load", function () {
    let p1 = document.getElementById("title");
    console.log(p1);
    p1.innerText = "测试训练";

    let push1 = document.getElementById("btn");
    push1.addEventListener("click", function () {
      console.log("click in");
    });

    let box1 = document.getElementById("boxz");
    box1.innerHTML = "<p>hona</p>";

    let input1 = document.getElementById("in1");
    input1.addEventListener("keyup", function (passwd) {
      console.log("passwd.target.value", passwd.target.value);
    });
  });
}

console.log("testClick: ", testClick);
