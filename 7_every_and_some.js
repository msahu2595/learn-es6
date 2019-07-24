var computers = [
  { name: "apple", ram: 10 },
  { name: "compaq", ram: 4 },
  { name: "acer", ram: 15 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

var r = computers.every(computer => {
  return computer.ram > 16;
});

var s = computers.some(computer => {
  return computer.ram > 16;
});

console.log(r);
console.log(s);
