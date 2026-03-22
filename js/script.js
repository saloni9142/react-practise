// console.log([] + []);
// console.log([] +{});
// console.log({} + []);

// console.log([1, 2, 3].toString()); // Output: "1,2,3"
// console.log([].toString());        // Output: "" (Khali string)


// function x(){
//     var a=6;
//     function y(){
//         console.log(a);
        
//     }
//     // y()
//     return y;
// }
// var z= x();
// console.log(z);

// z();




// function z(){
//     var b = 900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
            
//         }
//         y();
//     }
//     x();
// }
// z();



function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const a = outer();
const b = outer();

console.log(a());
console.log(b());
console.log(a());
console.log(b());
console.log(a());