class NeedList {
  constructor(car, house) {
    this.car = car;
    this.house = house;
  }
  toHarry() {
    console.log(
      `car: ${this.car}, house: ${this.house}`,
    );
  }
}

let needList = new NeedList("dog, cat");
needList.toHarry();

console.log(`check Information: ${needList instanceof NeedList}`);
console.log(`check Car: ${needList.hasOwnProperty("car")}`);
console.log(`dog: ${needList.hasOwnProperty("dog")}`);
console.log(`test: ${needList.hasOwnProperty("toHarry")}`);

class House extends NeedList {
  constructor(testAction) {
    super("dog", "cat");
    this.testAction = testAction;
  }

  toHarry() {
    super.toHarry();
  }
}

let mokey = new Mokey("jackChan");
mokey.toHarry();

console.log(mokey instanceof Mokey);
console.log(mokey instanceof NeedList);
