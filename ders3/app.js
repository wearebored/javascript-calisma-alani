// let sayı1 = prompt("Birinci sayıyı giriniz:")
// let sayı2 = prompt("2.sayıyı giriniz:")
// console.log(`2 sayının toplamı:${+sayı1 + +sayı2}`)
// console.log(`2 sayının çarpımı:${sayı1 * sayı2}`)

// let kenar1 = +prompt("1. kenar uzunluğunu giriniz:")
// let kenar2 = +prompt("2. kenar uzunluğunu giriniz:")
// let kenar3 = +prompt("3. kenar uzunluğunu giriniz:")
// let s = (kenar1 + kenar2 + kenar3)/2
// let alan = ((s*(s - kenar1)*(s-kenar2)*(s-kenar3))**(1/2))
// console.log(`üçgenin alanı:${alan}`)

// let a = +prompt("1. kenarı giriniz:")
// let b = +prompt("2. kenarı giriniz:")

// let d_alan = a*b
// console.log(`dikdörtgenin alanı:${d_alan}`)

// let yarı_cap = +prompt("Dairenin yarı çapını giriniz:")
// let d_alan = Math.PI * (yarı_cap**2)
// let d_cevre = Math.PI * yarı_cap * 2
// console.log(`Dairenin alanı:${d_alan}`)
// console.log(`Dairenin çevresi:${d_cevre}`)


// const zaman = new Date();
// console.log(`day of month is ${zaman.getHours()}`)
// console.log(`month of year is ${zaman.getMonth()+1}`)
// console.log(`year is ${zaman.getFullYear()}`)

let a = prompt("1. sayıyı giriniz:")
let b = prompt("2. sayıyı giriniz:")
let c = prompt("3. sayıyı giriniz:")

a = a[a.length-1]
b = b[b.length-1]
c = c[c.length-1]
sayaç = 0
let sonuç = a===b || a===c || b===c
console.log(sonuç)