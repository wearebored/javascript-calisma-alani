function toplama(a, b) {
  return a + b;
}
function cik(a, b) {
  return a - b;
}
function car(a, b) {
  return a * b;
}
function bol(a, b) {
  return a / b;
}
function hesM(a, b, islem) {
  if (islem == "+") {
    console.log(toplama(a, b));
  } else if (islem == "-") {
    console.log(cik(a, b));
  } else if (islem == "*") {
    console.log(car(a, b));
  } else if (islem == "/") {
    console.log(bol(a, b));
  } else {
    console.log("girilen parametreler hatalidir");
  }
}
hesM(3, 3, "+");
// const tablo = function (num1, num2, islem) {
//   let sonuc;
//   if (islem === "+") {
//     sonuc = num1 + num2;
//     console.log(num1 + num2);
//   } else if (islem === "-") {
//     sonuc = num1 - num2;
//     console.log(num1 - num2);
//   } else if (islem === "/") {
//     sonuc = num1 / num2;
//     console.log(num1 / num2);
//   } else if (islem === "*") {
//     sonuc = num1 * num2;
//     console.log(num1 * num2);
//   }
//   return sonuc;
// };
// const topa = function (num1, num2) {
//   return num1 + num2;
// };
// const carp = function (num1, num2) {
//   return num1 * num2;
// };
// const cıkra = function (num1, num2) {
//   return num1 - num2;
// };
// const bol = function (num1, num2) {
//   return num1 / num2;
// };
// tablo(3, 5, "+");
// tablo(3, 5, "-");
// tablo(3, 5, "*");
// tablo(3, 5, "/");
