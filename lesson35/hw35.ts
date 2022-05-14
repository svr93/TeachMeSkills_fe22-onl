/* Alexandra Kononenko */
//С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

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

//1. Создать строку из имен пользователей через запятую
const namesLine = users.map(item => item.name);
const userNames = namesLine.join(",");

console.log (userNames);

//2. Посчитать общее количнство машин у пользователей
const carsLine = users.map(item => item.cars);
const numCars = carsLine.length;

console.log (numCars);

//3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function userEducation(arr: typeof users) {
    return arr.filter(item => item.hasEducation);
}

userEducation(users);
//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function userAnimals(arr: typeof users) {
    return arr.filter(item => item.hasOwnProperty('animals'));
}

userAnimals(users);
//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function carsName(arr: typeof users) {
    let cars = arr.filter(item => item.hasOwnProperty('cars'));
    let carsLine = cars.map(item => item.cars);
    return carsLine.join(",");
}

carsName(users);