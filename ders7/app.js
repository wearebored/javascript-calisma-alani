// ARROW Function YAŞ

// const yaş_hes = (a) => 2022 - a;
// console.log(yaş_hes(1997));

// ARROW FUNCTİON DAİRE ALAN HESABI

// const daire_a = (yarıçap) => Math.PI * yarıçap ** 2;
// console.log(daire_a(+prompt("Dairenin yarçapını giriniz:")));

// FİBONACCI ÇÖZÜM

const fib = function (n) {
  let başlangıç = 1;
  let son_2 = 1;
  for (let sayaç = 0; sayaç < n - 3; sayaç++) {
    son_2 = başlangıç;
    başlangıç += son_2;
  }
  return başlangıç;
};
console.log(fib(6));
