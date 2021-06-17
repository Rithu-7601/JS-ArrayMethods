const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// for each
// in the foreach func u can hve 3 things like the individual company, index, entire array(optional)

companies.forEach(function (company, index, array) {
  console.log(company);
  console.log(index);
  console.log(company.name);
  console.log(array);
});

// filter

//using for loop  (get ages above equal to & above 21)
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

//using filter method

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

// using es6 arrow func for above
const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

// filter retail companies
const retailCompanies = companies.filter(
  (company) => company.category.toLowerCase() === "retail"
);
console.log(retailCompanies);

// filter 80's companies

const filter80s = companies.filter(
  (anything) => anything.start >= 1980 && anything.start < 1990
);
console.log(filter80s);

// filter comapnies which lasted for 10years

const lastedCompanies = companies.filter(
  (something) => something.end - something.start >= 10
);
console.log(lastedCompanies);

//MAP method

// create an array of company names

// const onlyCompanyNames = companies.map(function (sure) {
//   return sure.name;
// });
// console.log(onlyCompanyNames);

// using arrow func
// const onlyCompanyNames = companies.map((sure) => sure.name);
// console.log(onlyCompanyNames);

// const testIt = companies.map(() => 1);
// console.log(testIt);

// to have in this format ***Company One [1981 - 2004]******
// const testMap = companies.map(
//   (use) => `${use.name} [${use.start} - ${use.end}]`
// );
// console.log(testMap);

// to get squarroot of the the ages
// const squareAges = ages.map((but) => Math.sqrt(but));
// console.log(squareAges);

// to multiply each age by 2
// const mulAge = ages.map((age) => age * 2);
// console.log(mulAge);

//to use the above two challenges in same line using Map

// const twoTimes = ages.map((but) => Math.sqrt(but)).map((age) => age * 2);
// console.log(twoTimes);

// Sort companies by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// using arrow func
// const sortedCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );

// console.log(sortedCompanies);

// sort ages from lowest to highest

// const sortAges = ages.sort((a1, a2) => {
//   return a1 - a2;
// });
// console.log(sortAges);

// sort ages from highest to lowest

// const sortAge = ages.sort((a1, a2) => {
//   return a2 - a1;
// });
// console.log(sortAge);

//Reduce

// to sum all the ages in the array named ages

//1.using for loop

// let totalAge = 0;
// for (let i = 0; i < ages.length; i++) {
//   totalAge += ages[i];
// }
// console.log(totalAge);

// 2. using reduce method for the above code

// const totalAge = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(totalAge);

//using arrow func
// const totalAge = ages.reduce((total, age) => total + age, 0);
// console.log(totalAge);

// to get the total years of all companies
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// combining all the methods together

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
