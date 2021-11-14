class Cat {
  constructor(version) {
    this.version = {
      beta: "v1.0.8",
      state: "v0.5.1",
    };
  }
  lastVersion() {
    console.log(this.version, "v1.0.2");
  }
}

class LinuxVersionCat extends Cat {
  constructor(version) {
    super(version);
    this.lastVersion();
  }
  historyVersion = () => {
    let { ageHistory } = this.version;
    ageHistory += 1;
    this.setVersion({ age: age });
  };
}

const white = new Cat("white");
const yello = new LinuxVersionCat("yello");
