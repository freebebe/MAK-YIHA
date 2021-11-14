type Player = {
  name: string;
  age: number;
};

const playerA: Player = {
  name: "mike",
  age: 30,
};

type List = {
  name: string;
  age: number;
};

const listA: List = {
  name: "mike",
  age: 30,
};

const listB: List = {
  name: "marry",
  age: 11,
};

for (let i = 0; List.length; i++) {
  if (i === 1) {
    let listRun = List[i];
    console.log(listRun);
  }
}
