/*
    1. Создать строку из имен пользователей через запятую
    2. Посчитать общее количнство машин у пользователей
    3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
    5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
*/

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
]

//Task 1

const userNames = users.map(item => item.name).join(", ");

//Task 2

const carNumbers = users.map(item => item.cars).length;


//Task 3

function filterByEducation(arr: typeof users) {
    return arr.filter(item => item.hasEducation)
}

filterByEducation(users);

//Task 4

function filterByAnimals(arr: typeof users) {
    return arr.filter(item => item.hasOwnProperty('animals'))
}

filterByAnimals(users);

//Task 5

function returnCars(arr: typeof users) {
    return arr.filter(item => item.hasOwnProperty('cars')).map(item => item.cars).join(",")     
}

returnCars(users);

//Task 5, если нужно удалить повторы

function returnUniqueCars(arr: typeof users) {
    const newArr = arr.filter(item => item.hasOwnProperty('cars')).map(item => item.cars).join(",").split(",");
    return [...new Set(newArr)].join(",")
}

returnUniqueCars(users);