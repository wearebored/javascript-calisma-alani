// console.log("start");

// FONKSİYONLARR

// function yaş_yazdır(yaş) {
//   console.log(`Ben ${yaş} yaşındayım.`);
// }
// yaş_yazdır(24);

// YAŞ HESABI

// function yaş_hesabı(isim, doğum_yılı) {
//   let yaşı = 2022 - doğum_yılı;
//   console.log(`${isim} yaşınız: ${yaşı}`);
//   return isim, yaşı;
// }
// yaş_hesabı("enes", 1997);

//         2. YÖNTEMLE FONKS ATAMA MODERN JAVASCRİPT

// const yaş_hesap = function (isim, doğum_yılı) {
//   let yaşı = 2022 - doğum_yılı;
//   console.log(`${isim} yaşınız: ${yaşı}`);
// };

// yaş_hesap("enes", 1997);

// 3 SAYININ EN BÜYÜĞÜNÜ BULAN FONKSİYON

// const en_büyük = function (n1, n2, n3 = Number.NEGATIVE_INFINITY) {
//   if (n1 >= n2 && n1 >= n3) {
//     console.log(`Girilen en büyük sayı : ${n1}`);
//   } else if (n2 >= n1 && n2 >= n3) {
//     console.log(`Girilen en büyük sayı : ${n2}`);
//   } else if (n3 >= n1 && n3 >= n2) {
//     console.log(`Girilen en büyük sayı : ${n3}`);
//   } else {
//     console.log("girilen sayılarda hata var.");
//   }
// };
// en_büyük(-24, -12, 2);
