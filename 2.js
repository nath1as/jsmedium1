// var i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1;
//   }
// }

// solution 1
var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}


// solution 2
var i;
for (i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
