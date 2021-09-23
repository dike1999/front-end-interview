// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

for (var i = 0; i < 5; i++) {
  setTimeout(
    function (i) {
      console.log(i);
    },
    1000 * i,
    i
  );
}
