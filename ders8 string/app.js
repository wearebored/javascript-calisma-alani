// console.log("hi");

// STRİNGLER

// let names = "enes";
// let lastname = "GOKTAS";
// console.log(names.toUpperCase());
// console.log(lastname.toLowerCase());

// KELİME EŞİTLİK SORGUSU

// let ifade1 = prompt("1. ifadeyi yazınız:");
// let ifade2 = prompt("2. ifadeyi yazınız:");
// const eşitmi = (ifade1, ifade2) => {
//   let sonuc =
//     ifade1.toLocaleLowerCase() === ifade2.toLocaleLowerCase()
//       ? `${ifade1} ile ${ifade2} eşittir.`
//       : `${ifade1} ile ${ifade2} eşit değildir.`;
//   return sonuc;
// };
// console.log(eşitmi(ifade1, ifade2));

// CÜMLEDE KELİME ARAMA

// const cümle = "string içErisinde kelime arama.";
// console.log(cümle.toLocaleLowerCase().includes("içe"));

// SEARCH -ARAMA
// let metin = prompt("metini giriniz:");
// let aranacak = /[A-Z]/;
// console.log(metin.search(aranacak));

let metin = "Clarusway Rocks!";
let metin2 = "";
let sayaç = metin.length;
for (let i = 1; i <= metin.length; i++) {
  metin2 = metin2.concat(metin[sayaç - 1]);
  sayaç = sayaç - 1;
}
console.log(metin2);
