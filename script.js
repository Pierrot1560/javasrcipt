"use strict";
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// 1  задача
const userNames = users.map((user) => user.name).join(', ');
console.log(userNames);
//2 задача
const totalCarAmount = users.flatMap((user) => user.cars ?? []);
console.log(totalCarAmount.length);
// 3 задача 
function filterUsersWithEducation(usersList) {
    return usersList.filter((user) => user.hasEducation);
}
const educatedUsers = filterUsersWithEducation(users);
console.log(educatedUsers);
//4 задача
function getUsersWithAnimals(items) {
    return items.filter((item) => !!item.animals && !!item.animals.length);
}
const usersWithAnimals = getUsersWithAnimals(users);
console.log(usersWithAnimals);
//5 задача
function getUsersCarsMarks(items) {
    return items.flatMap((item) => item.cars ?? []).join(', ');
}
const usersCarsMarks = getUsersCarsMarks(users);
console.log(usersCarsMarks);
