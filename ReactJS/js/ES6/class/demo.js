class AirCat {
  constructor(version) {
    this.version = version;
  }
  lastVersion() {
    console.log("v0.10.2", this.version);
  }
}

const beta = new AirCat("v1.0.2 ");
beta.lastVersion();

const stable = new AirCat("v0.10.3 ");
stable.lastVersion();

// ES5-OOP
const Cat = (version) => {
  this.version = version;
};

AirCat.prototype.lastVersion = function () {
  console.log(this.version, "v1.0.2");
};

const yello = new AirCat("yello");
//_______________________________
//            new - what is 'new'
// function newAirCat('yello') {
// const obj = {};                        1. 创建新的 object -> obj
// AirCat.call(obj.yello);                2. AirCat 充当 constructor, this 指向 obj, 同时将yello也放进去, AirCat 只有一个参数，故用 call, 若有两个以上则用 apply 上阵列
// obj.__proto__ = AirCat.prototype;
// return obj;
// }
const white = new AirCat("white");

white.lastVersion();
yello.lastVersion();
