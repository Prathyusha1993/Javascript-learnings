// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ' + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Inner loops: ' + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
//-----------------------------------------------------------
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//-----------------------------------------------------------
let j = 0;
let k = 0;
while (j < 5) {
  j++;
  if (j === 3) {
    break;
  }
  if(j===3){
      continue;
  }
  k += j;
  console.log(k);
}
