/*
С ниже приведенным объектом решить следующие задачи:
    1. Создать строку из названий предметов написаных через запятую
    2. Посчитать общее количнство студентов и учителей на всех предметах
    3. Получить среднее количество студентов на всех пердметах
    4. Создать массив из объектов предметов
    5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
*/

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 8
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};

//Task 1

const subjectName = Object.keys(subjects).join(', ');
console.log(`Subject names: ${subjectName}`)

//Task 2

const subjectArray = Object.values(subjects);

//students

const studentsNumberArray = subjectArray.map(function(item){
    return item.students
})
const sumOfStudents = studentsNumberArray.reduce(function(prev, curr){
    return prev + curr;
});

//teachers

const teachersNumberArray = subjectArray.map(function(item){
    return item.teachers
})
const sumOfTeachers = teachersNumberArray.reduce(function(prev, curr){
    return prev + curr;
});

//Task 3

function calcStudentsAverage(){
    return (sumOfStudents / Object.keys(subjects).length)
}
calcStudentsAverage();

//Task 4

const subjectNameArray = Object.keys(subjects);

const subjectTotalArray = subjectArray.map(function(obj, index) { 
        obj.subject = subjectNameArray[index];
        return obj;
});

console.log(subjectTotalArray);

//Task 5

const subjectFullArray = Object.entries(subjects);

subjectFullArray.sort(function(a, b){
    const newA = a[1];
    const newB = b[1];
   if (newA.teachers <= newB.teachers){
       return 1;
   } else {
       return -1
   }
});

//Task 5 version 2

subjectTotalArray.sort(function(a, b){
   if (a.teachers <= b.teachers){
       return 1;
   } else {
       return -1
   }
});


//Task 6

const newObject = Object.fromEntries(subjectFullArray);

