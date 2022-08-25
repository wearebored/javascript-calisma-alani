// console.log("hi");

// STRİNGLER

// let names = "enes";
// let lastname = "GOKTAS";
// console.log(names.toUpperCase());
// console.log(lastname.toLowerCase());

// KELİME EŞİTLİK SORGUSU

let ifade1 = prompt("1. ifadeyi yazınız:");
let ifade2 = prompt("2. ifadeyi yazınız:");
const eşitmi = (ifade1, ifade2) => {
  let sonuc =
    ifade1.toLocaleLowerCase() === ifade2.toLocaleLowerCase()
      ? `${ifade1} ile ${ifade2} eşittir.`
      : `${ifade1} ile ${ifade2} eşit değildir.`;
  return sonuc;
};
console.log(eşitmi(ifade1, ifade2));
