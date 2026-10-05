type User = {
name: string;
phone: string;
email: string;
animals?: string[],
cars?: string[];
hasChildren: boolean;
hasEducation: boolean;
}
const users : User[] = [
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

const userNames : string = users.map((user: User) => user.name).join(', ')
console.log(userNames);

//2 задача

 const totalCarAmount : string[] = users.flatMap((user:User) => user.cars ?? [])
 console.log(totalCarAmount.length)

 // 3 задача 

function filterUsersWithEducation<T extends Pick<User, 'hasEducation'>>(usersList: T[]) {
  return usersList.filter((user: T) => user.hasEducation);
}

const educatedUsers: User[] = filterUsersWithEducation(users);
console.log(educatedUsers);





//4 задача

function getUsersWithAnimals<T extends Pick<User, 'animals'>>(items: T[]){
return items.filter((item : T) => !!item.animals && !!item.animals.length);

}

const usersWithAnimals = getUsersWithAnimals(users);
console.log(usersWithAnimals);

//5 задача
function getUsersCarsMarks <T extends Pick<User, 'cars'>>(items: T[]){
    return items.flatMap((item: T)=> item.cars??[]).join(', ')
} 

const usersCarsMarks = getUsersCarsMarks(users)
console.log(usersCarsMarks);
