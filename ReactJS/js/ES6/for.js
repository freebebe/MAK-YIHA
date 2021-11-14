const player1 = {
  name: 'mike',
  desc: 'tab1'
}

console.log(player1.name);
console.log(player1.desc);

const lists = [
  {
    name: 'mike',
    desc: 'tab1',
  },
  {
    name: 'marry',
    desc: 'tab2',
  }
]

for (let i = 0; lists.length; i++) {
  if (i === 1) {
    let list = lists[i]
    console.log(list);
  }
}


