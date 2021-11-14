class Cat {
  constructor(version) {
    this.version = version;
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
}

const white = new Cat("white");
const yello = new LinuxVersionCat("yello");
