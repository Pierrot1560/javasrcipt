// 1 задание
// let user = {
//    name : 'K',
//    country : 'M',
//    age :  30,
//    number : 344445
// }
// delete user.number;
// console.log(user)

// 2 задание
// let user = {
//     name : 'K',
//     country : 'M'
// }
// console.log ('name' in user)
// console.log('cAuntry' in user)

// 3 задание
// const student = {
// name: 'John',
// age: 19,
// isHappy: true
// }

// for (let key in student){
//     console.log(key)
//     console.log(student[key])
// }

// 4 задание
// const colors = {
// 'ru pum pu ru rum': {
// red: 'красный',
// green: 'зеленый',
// blue: 'синий'
// },
// }
// console.log(colors["ru pum pu ru rum"].red)
// console.log(colors["ru pum pu ru rum"].blue)

// 5 задание
// let salaries = {
//   andrey: 500,
//   sveta: 413,
//   anton: 987,
//   igor: 664,
//   alexandra: 199
// };

// let totalSalary = 0; 
// let employee = 0; 


// for (const key in salaries) {
//   if (salaries.hasOwnProperty(key)) {
//     totalSalary += salaries[key]; 
//     employee++; 
//   }
// }


// const averageSalary = totalSalary / employee;


// console.log(averageSalary); 

// 6 задание
const userData = {};
userData.login = prompt("Регистрация: Придумайте логин");
userData.password = prompt("Регистрация: Придумайте пароль");

const confirmLogin = prompt("Вход: Введите ваш логин для подтверждения");
const confirmPassword = prompt("Вход: Введите ваш пароль для подтверждения");


if (confirmLogin === userData.login && confirmPassword === userData.password) {
  alert("Добро пожаловать!");
} else {
  alert("Ошибка! Неверный логин или пароль.");
}