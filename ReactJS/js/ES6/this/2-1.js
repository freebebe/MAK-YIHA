class TestDemo001 {
  runPlease() {
    console.log("this is tools", this);
    setTimeout(() => {
      console.log("this is timeSet", this);
    }, 5000);
  }
}

const testLog = new TestDemo001();
testLog.runPlease;

// this 在 arrow function 中，跟在哪裡定義有關，此時的 this 有點像變數的行為，會依照作用域去抓外部的 this，依據上一層的 run: this 是什麼，setTimout: this 就會是什麼。

const talk2 = TestDemo001.runPlease.bind("changeACFUN");
talk2();
