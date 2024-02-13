let str =
  "   salam khobi         chetori?                                       ";
let result = " ";
let i = 0;
let k, m;
let j = str.length;

while (str[i] === " ") {
  i += 1;
}

while (str[j - 1] === " ") {
  j -= 1;
}
m = j;

for (k = i; k <= m; k++) {
  result += str[k];
}
console.log(result);
