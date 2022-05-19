interface IUser{
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

interface IUsers extends Array<IUser>{};

const users : IUsers = [
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

function getStrFromNames(objects: IUser[]){
    let names: string = "";

    for (let i = 0; i < objects.length; i++) {
        if(i != objects.length - 1){
            names += objects[i].name + ", ";
        }else{
            names += objects[objects.length - 1].name + ". ";
        }
        
    }
    return names;
}

console.log(getStrFromNames(users));

//2. Посчитать общее количнство машин у пользователей

function getCarAmount(objects: IUser[]){
    let names: string = "";

    for (let i = 0; i < objects.length; i++) {
        if(objects[i].cars == undefined){
            names += `${objects[i].name} has not car(s).\n`;  
        }else{
            names += `${objects[i].name} has ${objects[i].cars.length} car(s).\n`;  
        }
    }
    return names;
}

console.log(getCarAmount(users));

//3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function getEducation(objects: IUser[]){
    let usersWithEducation : IUser[] = [];

    for (let i = 0, j = 0; i < objects.length; i++) {
       if(objects[i].hasEducation){
           usersWithEducation[j++] = objects[i];
       }
    }
    return usersWithEducation;
}

let educatedUsers : IUser[] = getEducation(users);
console.log("Users with education are depicted below: ");
console.log(getStrFromNames(educatedUsers));

//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

function getAnimals(objects: IUser[]){
    let usersWithAnimals : IUser[] = [];

    for (let i = 0, j = 0; i < objects.length; i++) {
       if(objects[i].animals){
           usersWithAnimals[j++] = objects[i];
       }
    }
    return usersWithAnimals;
}

let animalUsers : IUser[] = getAnimals(users);
console.log("Users with animals are depicted below: ");
console.log(getStrFromNames(animalUsers));

//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через 
//запятую

function getCars(objects: IUser[]){
    let cars: string = "";

    for (let i = 0; i < objects.length; i++) {
        if(objects[i].cars != undefined){
                objects[i].cars.forEach(element => {
                    cars += element + ", ";
                });
        }else{
            continue;
        }
    }
    cars = cars.replace(/,(?=[^,]*$)/, '.');
    return cars;
}

console.log("The object contains following below cars: ");
console.log(getCars(users));


