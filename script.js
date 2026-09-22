const subjects = {
  mathematics: { students: 200, teachers: 6 },
  biology:     { students: 120, teachers: 6 },
  geography:   { students: 60,  teachers: 2 },
  chemistry:   { students: 100, teachers: 3 }
};


const subjectsNames = Object.keys(subjects).join(', ');
console.log(subjectsNames);


const studentsValue = Object.values(subjects).reduce((acc,student)=>{
 return acc + student.students
},0);
console.log('количесвто учеников: '+ studentsValue)


const teachersValue = Object.values(subjects).reduce((acc,teacher)=>{
 return acc + teacher.teachers
},0);
console.log('количество преподователей: ' + teachersValue)


const studentsCount = Object.keys(subjects).length;
console.log(studentsValue/studentsCount);


const subjectsArray = [];

for (const name in subjects) {
  subjectsArray.push({
    name: name,                             
    students: subjects[name].students,       
    teachers: subjects[name].teachers        
  });
}

console.log(subjectsArray);


const sortedByTeachers = subjectsArray.slice().sort((a, b) => {
  return b.teachers - a.teachers;
});

console.log(sortedByTeachers);