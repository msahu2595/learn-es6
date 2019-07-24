// firstcreate constructor function
function Fruit(name) {
  this.name = name;
}

// create objects using constructor function
var fruits = [
  new Fruit("mango"),
  new Fruit("banana"),
  new Fruit("strawberry"),
  new Fruit("watermelon")
];

// using find function find the matching value the vlaue
var x = fruits.find(function(fruit) {
  return fruit.name === "watermelon";
});

// log the variable x in console
console.log(x);
