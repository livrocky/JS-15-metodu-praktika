//1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

// const fn = (number) => number * 60 + "seconds";
// fn(5);

function toSeconds(number) {
  const seconds = number * 60 + " seconds";
  console.log(seconds);
}
toSeconds(2);

//2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

function inDays(number) {
  const inYears = number * 365 + " dienos";
  console.log(inYears);
}
inDays(20);

//3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const kvadratu = (number) => number ** 2;
kvadratu(5);
console.log(kvadratu(5));

//4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

const TrikampioPlotas = (aukstis, plotis) => (aukstis * plotis) / 2;
TrikampioPlotas(5, 5);
console.log(TrikampioPlotas(5, 5));

//5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

const text = "Rokas";
const paskutineRaide = text.charAt(text.length - 1);
console.log(paskutineRaide);

// const lastLetter = (text) => text.charAt(text.length - 1);

//6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

const fn = (text) => text.split("").reverse().join("").toLowerCase();
console.log(fn("ROkas"));

//7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const numbers = [-1, -100, -5, 10, 0, 11];
const didzNeigiamasSk = numbers.reduce((total, currentValue) => (total < currentValue ? total : currentValue));

console.log(didzNeigiamasSk);

//8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

const randomsk = (quantity) => {
  const generatedNums = [];
  for (let index = 0; index < quantity; index++) {
    generatedNums.push(Math.floor(Math.random() * 10) + 1);
  }
  return generatedNums;
};
console.log(randomsk(5));

//9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const sumOverHundred = (n1, n2) => n1 + n2 < 100;
console.log(sumOverHundred(10, 50));

//10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const students = [
  {
    name: "James",
    age: 25,
  },
  {
    name: "Jill",
    age: 28,
  },
  {
    name: "Mike",
    age: 18,
  },
  {
    name: "Jane",
    age: 22,
  },
];

students.sort((studentObjA, studentObjB) => studentObjB.age - studentObjA.age);
console.log(`students sorted by age===`, students);

//11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

//12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
