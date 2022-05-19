;
var users = [
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
//1. Создать строку из имен пользователей через запятую
function getStrFromNames(objects) {
    var names = "";
    for (var i = 0; i < objects.length; i++) {
        if (i != objects.length - 1) {
            names += objects[i].name + ", ";
        }
        else {
            names += objects[objects.length - 1].name + ". ";
        }
    }
    return names;
}
console.log(getStrFromNames(users));
//2. Посчитать общее количнство машин у пользователей
function getCarAmount(objects) {
    var names = "";
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].cars == undefined) {
            names += "".concat(objects[i].name, " has not car(s).\n");
        }
        else {
            names += "".concat(objects[i].name, " has ").concat(objects[i].cars.length, " car(s).\n");
        }
    }
    return names;
}
console.log(getCarAmount(users));
//3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function getEducation(objects) {
    var usersWithEducation = [];
    for (var i = 0, j = 0; i < objects.length; i++) {
        if (objects[i].hasEducation) {
            usersWithEducation[j++] = objects[i];
        }
    }
    return usersWithEducation;
}
var educatedUsers = getEducation(users);
console.log("Users with education are depicted below: ");
console.log(getStrFromNames(educatedUsers));
//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function getAnimals(objects) {
    var usersWithAnimals = [];
    for (var i = 0, j = 0; i < objects.length; i++) {
        if (objects[i].animals) {
            usersWithAnimals[j++] = objects[i];
        }
    }
    return usersWithAnimals;
}
var animalUsers = getAnimals(users);
console.log("Users with animals are depicted below: ");
console.log(getStrFromNames(animalUsers));
//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через 
//запятую
function getCars(objects) {
    var cars = "";
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].cars != undefined) {
            objects[i].cars.forEach(function (element) {
                cars += element + ", ";
            });
        }
        else {
            continue;
        }
    }
    cars = cars.replace(/,(?=[^,]*$)/, '.');
    return cars;
}
console.log("The object contains following below cars: ");
console.log(getCars(users));
