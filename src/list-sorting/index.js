let a=[
  [100, 200, 300],
        [300, 200, 100],
        [300, 100, 200],
        [200, 100, 300],
        [100, 200, 300],
];
let b = 0;

function listSorting(needle, haystack) {
let postIndex=[]

for (let i = 0; i < haystack.length; i++) {
  for (let j = 0; j < haystack[i].length; j++) {
  //console.log(haystack[i].length);
  if(needle == haystack[i][j]){
      //postIndex=[j]
     postIndex=[i,j];
      //console.log(postIndex);
  }
} 


}
if (postIndex.length==0){
  return -1; }

return postIndex;
}
console.log(listSorting(b,a));
module.exports = listSorting;


//   let rowIndex = haystack.length - 1;
  // let colIndex = -1;

  // for (let i = haystack.length - 1; i >= 0; i--) {
  //   if (Array.isArray(haystack[i])) {
  //     rowIndex = i;
  //     colIndex = haystack[i].lastIndexOf(needle);
  //     if (colIndex != -1) {
  //       return [rowIndex, colIndex];
  //     }
  //   } else {
  //     if (haystack[i] == needle) return i;
  //   }
  // }
  // return -1;