// 1 задание
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// // function shownumb(element){
// //     console.log(element)
// // }
// // fibonacci.forEach(shownumb)
// fibonacci.forEach(element => console.log(element))

// 2 задание

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// // function user(name,index){
// //    return `member ${index+1}: ${name}`
// // }
// // const res = users.map(user)
// // console.log(res)
// const res = users.map((name,index)=> `member ${index+1}: ${name}`)

// console.log(res)

// 3 задание
// const numbers = [7, -4, 32, -90, 54, 32, -21]
// // function positiveNumberFilter(num){
// //     return num >= 0;
// // }
// // const positiveNumber = numbers.filter(positiveNumberFilter)
// // console.log(positiveNumber);

//  const positiveNumber1 = numbers.filter(number => number >= 0)
//  console.log (positiveNumber1)
 
// 4 задание

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// // function calculateArray(acc,num){
// //     return acc + num
// // }
// // const accumulateArray = fibonacci.reduce(calculateArray)
// // console.log(accumulateArray)
// const accumulateArray = fibonacci.reduce((acc,number) =>{
// return acc + number
// },0);
// console.log(accumulateArray)

// 5 задание 
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// // function evenNumber(num){
// //     return num % 2 === 0
// // }
// // const result = numbers.find(evenNumber)
// // console.log(result);
// const evenNumber = numbers.find((number)=> number %2===0)
// console.log(evenNumber)
