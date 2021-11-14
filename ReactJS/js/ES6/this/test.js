const log = () => {
  console.log(this);
};

const a = {
  name: "a",
  log: "logA",
};

const b = {
  name: "b",
  log: "logB",
};

log();
a.log();
b.log.apply(a);

const newLog = b.log.bind(b);
newLog.apply(a);
