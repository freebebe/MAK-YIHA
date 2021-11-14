const omg = {
  ohThis: function () {
    console.log("this is this ", this);
  },
};

const test = (a, b, c) => {
  console.log("this: ", this);
  console.log(a, b, c);
};

const haha = omg.ohThis;

// every time fucntion use this ,this will be change
// so we have bind to lock this feback => super this

const talk = omg.ohThis.bind("hi");
talk();
talk.call("what");
