//
//
// function addMoney(price1, price2, discount) {
//   console.log("price1", price1);
//   console.log("price2", price2);
//   console.log("discount", discount);
//   console.log(price1 + price2 - discount);
// }
//
// // 结帐页面
// addMoney(3000, 200, 50); //50 = discount
//
// // 购物车页面
// addMoney(1100, 231, 50); // 50 = discount

// 回传值 function (return)

function addMoney(price1, price2, discount) {
  let resule = price1 + price2;

  if (resule >= 20000) {
    resule = price1 + price2 - discount;
  }

  if (resule >= 50000) {
    resule = price1 + price2 - discount;
  }

  return resule;
}

function discount1111(price1, price2) {
  let resule = price1 + price2;
  let message = "购满活动价格减免";

  if (resule >= 20000) {
    message = "你已购满20000元，可享受满20000减1000优惠";
    return message;
  }

  if (resule >= 50000) {
    message = "你已购满50000元，可享受满50000减2500优惠";
    return message;
  }

  return message;
}

let total = addMoney(3000, 4200, 50);
let member = discount1111;
console.log(member);
console.log("你需付款的价格是: ", total);

