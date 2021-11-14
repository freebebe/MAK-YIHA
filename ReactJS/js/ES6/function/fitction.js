let testOBJ = {
  value: "test",
  init: function () {
    this.value += typeof num === "string" ? String : 0;
  },
};

testOBJ.init("test num 1");
console.log(testOBJ.value);
testOBJ.init("test num 2");
console.log(testOBJ.value);
testOBJ.init("test num 3");
console.log(testOBJ.value);
