const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

// st1. sugeneruoti studentu nerikiuota sarasa htmle kuriame butu studentu vardai

function genList() {
  const ulEl = document.createElement("ul");
  ulEl.innerHTML = students.map((studObj) => `<li> ${studObj.name} <button class="del-stud">Delete</button> </li>`).join("");

  //SU REDUCE//
  // ulEl.innerHTML = students.reduce((totalString, studObj) => totalString + `<li> ${studObj.name} </li>`, "");

  document.body.append(ulEl);
}
genList();

// st2. Parasyti funkcija, kuriai paduodam miesta kaip argumenta ir ji atrenka studentus is to miesto

const kaunieciai = studentsFrom("Kaunas");

const kaunieciai = studentsFrom("Kaunas");
console.log(`kaunieciai===`, kaunieciai);
function studentsFrom(miestas) {
  return students.filter((studObj) => studObj.town === miestas);
}

// st3. Parasyti funkcija, kuriai paduodam amziu kaip argumenta ir ji atrenka studentus kuriu amzius didesnis uz argumenta.

// st4. prie st1 sugeneruoto saraso pridedam mygtuka su textu 'delete'. mygtuka paspaudus istiname ta li el kuriame yra paspaustas mygtukas
document.body.addEventListener("click", (e) => {
  // console.log("clicked on", e.target);
  //suzinoti ar paspaudem ant elemento kuris turi klase `del-stud`;
  if (e.target.classList.contains("del-stud")) {
    e.target.parentElement.remove();
  }
});

// st5. is studentu masyvo infomracijos sugeneruoti korteles htmle.

// korteles turi tureti apvada ir visa su studentu susijusia info. korteles turi tilpti 3 per puslapio ploti.

// st6 paspaudus atitinkamus mygtukus mes htmle atvaizduojam visus, kauniecius arba vilniecius korteliu pavidalu (st5)

const studCard = document.createElement("div");
studCard.classList.add("stud-car");
const studName = document.createElement("h3");
const studDescription1 = document.createElement("p");
const studDescription2 = document.createElement("p");

/* <div class="stud-card">
  <h3>James</h3>
  <p>A man from Vilnius</p>
  <p>He is 25 years old and has a car</p>
</div> */
