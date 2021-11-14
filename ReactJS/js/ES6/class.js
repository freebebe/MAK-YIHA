// 物件导向  与 function 相似
// 语法卡 并非象java 那样的class 传统的class

// class 基本操作
// class Card {    // Card 为类别，需大写
//   constructor(initName) {
//     this.name = initName
//   }
// }
//
// const c1 = new Card('jack')
// console.log('c1', c1);
// console.log(c1.name);

// this
// (当下执行者是谁，谁就是this)
// class Card {
//   constructor(initName) {
//     this.name = initName
//   }
//   hello() {
//     console.log("dom", this.name);
//   }
// }
// const a1 = new Card('jack');
// console.log('a1', a1)
// a1.hello()
// // $ dom jack
//
// const partyList = { name: 'kit' }
// partyList.hi = a1.hello
// partyList.hi()

// 如何绑定this
class Card {
  constructor(initName) {
    this.name = initName
    // bind(this) 将this绑定到这个部件class上
    // 绑定 - 方式 I
    // this.mesi = this.hello.bind(this)
  }
  // hello() {
  // 绑定 - 方式 II
  hello = () => {
    console.log("dom", this.name);
  }
}
const a1 = new Card('jack');
console.log('a1', a1);
// a1.mesi()
a1.hello()
// $ dom jack

// @ 当a1执行hello时，a1就是他的this  (未绑定前)

const partyList = { name: 'kit' }
// partyList.hi = a1.mesi
partyList.hi = a1.hello
partyList.hi()
// @ 当partyList执行a1.hello时，partyList 就是他的this (未绑定前)
