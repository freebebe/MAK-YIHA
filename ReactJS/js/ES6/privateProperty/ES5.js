// class version
function Waha(info) {
  let cookies = info;

  this.getCookies = () => cookies;
}

const waha = new Waha(100);
console.log(waha.getCookies());
console.log(waha.cookies);
