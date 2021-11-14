// let createCard = (initName) => {
//   this.name = initName
// }
// 其中一种function方式

function createCard(initName) {
  this.name = initName
}

// this 可理解为置入

const member1 = new createCard('jack');
const member2 = new createCard('marry');
const member3 = new createCard('mick');
const member4 = new createCard('kitty');
const member5 = new createCard('jerry');

console.log(member1);
console.log(member2);
console.log(member3);
console.log(member4);
console.log(member5);

