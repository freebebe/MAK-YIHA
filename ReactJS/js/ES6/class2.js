// 继承     ---    extends
// 继承可盖过原来的function
// super    ---    调用父值

class Car {
  constructor(initName) {
    this.name = initName
  }
  start() {
  }

class Miao extends Car {
  constructor(nameMiao) {
    super(nameMiao)
  }
  start2() {
    super.miaoPop()
    console.log('喵排气');
  }

  start3() {
    super.miaoPop()
    console.log('喵车叫动');
  }
}


const a1 = new Miao('喵的喵车')
a1.start()

console.log('name', a1.name);
