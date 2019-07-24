var wordsss = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

// using filter function showing output print on console
console.log(wordsss.filter(word => word.length > 6));

// using filter function under another function and call that function in console.
function Print(words) {
  return words.filter(word => word.length > 6);
}
console.log(Print(wordsss));

// assign function output in variable and print on console
var z = Print(wordsss);
console.log(z);
