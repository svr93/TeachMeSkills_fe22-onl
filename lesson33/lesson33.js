const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    },      
};

// 1

function makeString(subjects) {
    const keys = Object.keys(subjects)
    const newString = keys.join(', ')
    console.log(`All subjects: ${newString}`)
}
 makeString(subjects);

 //2 and 3

let sumStudents = 0;
let sumTeachers = 0;
let average = 0;

for (let key in subjects ){
    sumStudents += subjects[key].students;
    sumTeachers += subjects[key].teachers;  
    average = ++average;
}
let avergeStudents = sumStudents / average;

console.log(`Общее количетсво студентов : ${sumStudents}`);
console.log(`Общее количетсво учителей : ${sumTeachers}`);
console.log(`Среднее число студентов на всех предметах : ${avergeStudents}`);

//4

let arr = Object.entries(subjects);
console.log(arr);

//5

function sortTeachers(subjects) {
    const arrSubjects = Object.values(subjects)

    arrSubjects.sort(function (a, b) {
        return b.teachers - a.teachers
    })
    console.log(arrSubjects)
}
sortTeachers(subjects)