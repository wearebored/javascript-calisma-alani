//  N KADAR SAYI TOPLAMA

// let adet = prompt("kaç adet sayı toplayacaksınız:")
// let toplam = 0
// for(i=1; i<=adet; i++){
//     toplam += +prompt(`${i}. sayıyı giriniz:`)
// }
// console.log(`Girdiğin ${adet} adet sayının toplamları: ${toplam}`)

// RASTGELE SAYI ÜRETME
// for (i = 0; i<10; i++){
//     console.log(Math.floor(Math.random()*100));
// }

// ASAL SAYI BULMA
// let sayı = +prompt("Asallığı kontrol etmek için bir sayı giriniz:")
// let sayaç = 0
// for(i=2; i<=sayı; i++){
//     if(sayı%i===0){
//         sayaç+=1

//     }

// }
// if(sayaç>1){
//     console.log(`${sayı} asal sayı değildir.`);
// }
// else{
//     console.log(`${sayı} asal sayıdır.`);
// }

// WHİLE DÖNGÜ
// let sayı = +prompt("Bir sayı giriniz:")
// while (true) {
//     if(sayı>=0 && sayı<=100){
//         console.log("girilen değer sayı");
//         break
//     }
//     else{
//         sayı = +prompt("tekrar sayı giriniz:")
//     }

// }

//     EN BÜYÜK SAYI BULMA

// const buyukbul = function (n1, n2, n3 = Number.NEGATIVE_INFINITY) {
//   let büyüksayı;
//   if (n1 >= n2 && n1 >= n3) {
//     büyüksayı = n1;
//   } else if (n2 >= n1 && n2 >= n3) {
//     büyüksayı = n2;
//   } else if (n3 >= n2 && n3 >= n1) {
//     büyüksayı = n3;
//   }
//   return büyüksayı;
// };
// console.log("girlen en büyük", buyukbul(12, -2, 33));
