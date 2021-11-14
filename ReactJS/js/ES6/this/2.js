class demonTest2 {
  runPlease() {
    console.log("this is runing ", this);
    setTimeout(function () {
      console.log("this is timeSet", this);
    }, 5000);
  }
}

const test2 = new demonTest2();

test2.runPlease();
