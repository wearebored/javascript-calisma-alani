//  N KADAR SAYI TOPLAMA

let adet = prompt("kaç adet sayı toplayacaksınız:")
let toplam = 0
for(i=1; i<=adet; i++){
    toplam += +prompt(`${i}. sayıyı giriniz:`)
}
console.log(`Girdiğin ${adet} adet sayının toplamları: ${toplam}`)