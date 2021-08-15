function checkCashRegister(price, cash, cid) {
  let changeAmount = cash - price;
  let change = [];
  let cidR = cid.slice().reverse();

  const MONEY = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01]
  ]

  function getTotalCash(arr) {
    return arr.reduce(
      function (acc, cur) {
        return acc + cur[1]
      }, -1).toFixed(2);
  }

  function sum(arr) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
      acc += arr[i][1];
    }
    return acc;
  }

  let total = sum(cidR);
  if (total == changeAmount) {
    return { status: "CLOSED", change: cid };
  }
  if (getTotalCash(cidR) < changeAmount) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }


  for (let i = 0; i < MONEY.length; i++) {
    let c = 0;
    let moneyAmount = 0;
    while (changeAmount.toFixed(2) >= MONEY[i][1] && moneyAmount < cidR[i][1]) {
      changeAmount -= MONEY[i][1];
      c++;
      moneyAmount = MONEY[i][1] * c;
    }
    if (moneyAmount != 0) {
      change.push([MONEY[i][0], moneyAmount]);
    }
  }
  return { status: "OPEN", change: change };
}

console.log(checkCashRegister(
  19.5,
  20,
  [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]));