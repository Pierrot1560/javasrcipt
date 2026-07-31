// 1 задание
// function getSum(n) {
//     let sum = 0;
    
    
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
    
//     return sum;
// }
// console.log(getSum(100))

// 2задание
// function calculateOverpayment(amount) {
//     const creditRate = 0.17; 
//     const duration = 5;           
    

//     const overpayment = amount * creditRate * duration;
    
//     return overpayment;
// }
// console.log(calculateOverpayment(1000))

// 3 задание
// function trimString (str, from, to) {
//   return str.slice(from, to);
// }
// console.log (trimString ('Hello world', 0 , 4));

// 4 задание
// function getSumNumbers(number){
    
// }

// 5 задание
// function getSum(a, b) {
//   const min = Math.min(a, b);
//   const max = Math.max(a, b);
//   let sum = 0;
  
//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }
  
//   return sum;
// }
// console.log(getSum(1,2))

// 6 задание
function foo() {
  console.log(foo.name);
}


function boo() {
  console.log(boo.name);
}


function fooBoo(flag) {
  if (flag) {
    foo(); 
  } else {
    boo(); 
  }
}
fooBoo(true);  
fooBoo(false); 