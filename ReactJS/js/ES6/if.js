// let condition = true && false
// if (conntect) {
//   console.log(‘大于50’)
// } else {
//   console.log(‘warnning’)
// }
const list = [
  {
    name: "mike",
    age: 13,
    score: 38,
  },

  {
    name: "jack",
    age: 15,
    score: 55,
  },

  {
    name: "marry",
    age: 13,
    score: 78,
  },

  {
    name: "kate",
    age: 12,
    score: 82,
  },
];

if (list.score > 60) {
  console.log("合格: ", list.name[0]);
}

