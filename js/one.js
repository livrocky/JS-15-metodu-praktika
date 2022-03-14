console.log("one");

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];

//  3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;

const dvigubosReiksmes = numbers.map((n) => n * 2);
console.log("dvighubos reiksmes ===", dvigubosReiksmes);

//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;

const kvadratu = numbers.map((n) => n * n);
console.log("kvadratu ===", kvadratu);

//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso

const index = 0;
const timesIndex = numbers.map((a, index) => a * index, index + 1);
console.log("times index===", timesIndex);

//  6. Atrinkti tiktai teigimų elementų masyvą

const positiveNumbers = numbers.filter((a) => a > 0);
console.log("teigiami sk===", positiveNumbers);

//  7. Atrinkti vertes didesnes uz 3

const valueOverThree = numbers.filter((a) => a > 3);
console.log("virs 3===", valueOverThree);

//  7.1 Parasyti funkcija kuri ima 2 argumentus, masyva ir skaiciu uz kuri didesnes vertes grazina ir atspausdina.

// const result = numbers.filter((sk, a) => sk > a);
// console.log("printAndReturn1 ===", result);

function printAndReturn(arr, daugiauUz) {
  const result = arr.filter((el) => el > daugiauUz);
  console.log("printAndReturn===", result);
  return result;
}

// 12. Suapvalinti visas masyvo reikšmes iki sveikų skaičių

const apvalus = numbers.map((sk) => Math.round(sk));
console.log(`apvalus===`, apvalus);

// 13. Atrinkti kas antrą elementą į naują masyvą

const everySecondEl = numbers.filter((element, index) => {
  return index % 2 === 0;
});
console.log("everySecondEl===", everySecondEl);

// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.

numbers.forEach((sk, i) => console.log(`[${i}] => ${sk}`));

// 15.1 Grazinti nauja masyva kuriame yra objektai

// [

//   {index: 0, reiksme: 64}

//   {index: 1, reiksme: 25}

//    ...

// ]

const daugiau5 = printAndReturn(numbers, 5);
const daugiaum1 = printAndReturn(numbers, -1);

console.log(daugiau5.concat(daugiaum1));

// 16. Suskaičiuoti visų elementų sumą

const sum = numbers.reduce((a, b) => a + b);
console.log("sum===", sum);

// 18. Rasti didžiausią skaičių masyve

const didzSk = numbers.reduce((total, currentValue) => (total > currentValue ? total : currentValue));
console.log(didzSk);

// numbers.forEach((sk) => {
//   didziausias = Math.max(didziausias, sk);
// });
// console.log("didziausias sk===", didziausias);
