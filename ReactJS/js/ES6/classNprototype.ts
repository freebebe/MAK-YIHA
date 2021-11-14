// class Too {
//   constructor() {
//   }
//   Hi() {
//     console.log("Hi");
//   }
// }
// class navBar extends Too {
//   constructor() {
//     super();
//   }
//   ciao() {
//     console.log("ciao");
//   }
// }
// class navBaz extends navBar {
//   constructor() {
//     super();
//   }
// }

// skip { constructor }
// class Too {
//   hi() {
//     console.log("hihi");
//   }
// }
//
// class navBar extends Too {
//   ciao() {
//     console.log("ciao");
//   }
// }
//
// class navBaz extends navBar {
// }

// PHP version => shitUP
// class Too {
//   constructor(checkPoint) {
//     super(checkPoint);
//     this.checkPoint = checkPoint;
//   }
//   cryThis() {
//     console.log(this.checkPoint);
//   }
// }
//
// const someThing = Too.bind("check");
//
interface Too {
  testBlah(): void;
}

function needWorkC(class_: { new (): Too }) {
  let too: Foo = new class_();
}
