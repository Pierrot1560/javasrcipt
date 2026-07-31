'use strict'

// 1 задача
// const a = 'true'
// const b = false
// const c = 17
// const d = undefined
// const e = null
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

// 2 задача
// let height = 15
// let width = 20

// if (height > width) {
//     console.log(height)
// } else {
//     console.log(width)
// }

// 3 задание 
// for (let i = 1; i <= 20; i++) 
  
//     if (i % 3 === 0) {
//         console.log(i)}

// 4 задание
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
const shouldGoToWork = key && documents && pen && apple && orange;
console.log(shouldGoToWork);
//я поменял apple с false , на true для того , чтобы проеврить работоспособность кода

// 5 задание
// const promptResult = prompt('Enter number')

// if (promptResult === null) {
//     alert ('Not a number')
// } else {
//     const number = +promptResult;

//     if (Number. isNaN(number)){
//         alert ('Promt error')
        

//     } else if (number % 3 === 0 && number % 5 === 0){
//         console.log('FizBuz')
//     }
//     else if (number % 5 === 0){
//         console.log('Fiz')
//     }  else if (number % 3 === 0){
//         console.log('Buz')
//     } 
      
// }

// 6 задание
// const promptResult = +prompt('Enter Guest Age')
// if (promptResult > 18){
//     alert('Попей пивка')
// }else if (promptResult >= 16 && promptResult1 <= 18) {
//     alert("Можешь выкурить сигаретку, только маме не говори")
// }else if (promptResult  < 18){
//     alert ('Пей колу')
// }

// 7 задание

// let direction = prompt('В какую сторону света ты бы хотел отправиться? (север, юг, восток, запад)');


// if (direction !== null) {
 
//     switch (direction.toLowerCase().trim()) {
//         case "юг":
//             console.log("на юг пойдешь счастье найдешь");
//             break;
//         case "север":
//             console.log("на север пойдешь много денег найдешь");
//             break;
//         case "запад":
//             console.log("на запад пойдешь верного друга найдешь");
//             break;
//         case "восток":
//             console.log("на восток пойдешь разработчиком станешь");
//             break;
//         default:
//             console.log("Попробуйте еще раз");
//             break;
//     }
// }
