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

// let metin = "Clarusway Rocks!";
// let metin2 = "";
// let sayaç = metin.length;
// for (let i = 1; i <= metin.length; i++) {
//   metin2 = metin2.concat(metin[sayaç - 1]);
//   sayaç = sayaç - 1;
// }
// console.log(metin2);

// let a = "days. big make things Little";
// let b = "";
// let sayaç = a.length;
// console.log(a.lastIndexOf(" ", sayaç - 1));
// sayaç = a.lastIndexOf(" ", sayaç - 1);
// console.log(a.lastIndexOf(" ", sayaç - 1));
// sayaç = a.lastIndexOf(" ", sayaç - 1);
// console.log(a.lastIndexOf(" ", sayaç - 1));
// sayaç = a.lastIndexOf(" ", sayaç - 1);
// console.log(a.lastIndexOf(" ", sayaç - 1));
// sayaç = a.lastIndexOf(" ", sayaç - 1);
// console.log(a.lastIndexOf(" ", sayaç - 1));

// const degerler = [
//   { name: "enes", surname: "gweas", age: "25" },
//   { name: "erw", surname: "gowww", age: "24" },
//   { name: "fsd", surname: "grqs", age: "21" },
//   { name: "ewr", surname: "gqweas", age: "20" },
// ];

// const newname = degerler.map((p) => ({
//   name: p.name.concat(" " + p.surname).toUpperCase(),
//   age: +p.age + 5,
// }));
// console.log(newname);

// const kucuk = degerler.filter((p) => p.age <= 22).map((p) => p.name);
// console.log(kucuk);

// const ortalama = degerler.reduce((acc, val) => acc + Number(val.age), 0)/degerler.length;
// console.log(ortalama);

