// for (key in optimusPrime) {
//   console.log(
//     Key = ${key}
//     Value = ${optimusPrime[key]}
//     dataType = ${typeof optimusPrime[key]});
// }

const textProperties = {
  fontSize: "30px",
  color: "purple",
  fontStyle: "Times New Romans",
  backGroundColor: "white",
};

const car = {
  brand: "Shevrolet",
  model: "Camaro 2007",
  engine: "petrol",
  horsepower: 426,
  maximumSpeed: 320,
};

const optimusPrime = {
  firstName: "Oprimus",
  secondName: "Prime",
  job: "Autobot",
  age: 1488,
  favWeapon: "Echo Blade",
  showInfo() {
    return this;
  },
};

const keys = Object.keys(optimusPrime);
// console.log(keys);
// console.log(typeof keys);
// console.log("============");
const values = Object.values(optimusPrime);
// console.log(values);
// console.log(typeof values);
// console.log("============");
const items = Object.entries(textProperties);
console.log(items);
// console.log(typeof entries);
console.log("============");
// for (const key of keys) {
//   console.log(Value = ${optimusPrime[key]});
// }

for (const item of items) {
  const key = item[0];
  const value = item[1];

  console.log(`Поточний Ключ 
      &${key}&
       : 
       Поточне Значення&
       ${value}&);`);
}
