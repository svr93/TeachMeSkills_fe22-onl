type Animals = 'cat'| 'dog'| 'fish'| 'bird';
type Cars = 'bmw'| 'audi'| 'ford'| 'volkswagen' | 'reno';

type Users = {
   name:string,
   phone:string,
   email:string,
   animals:Animals[],
   cars: Cars[],
   hasChildren: boolean,
   hasEducation:boolean,
}


const users: Partial<Users>[] = [
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


//1

let arr1Users = users.map(function(item){
 return item.name;
})

let strUser = arr1Users.join(', ')

console.log(strUser)

//2

let getOwnerCars = users.filter(function(item){
 return item.cars;
})
let arrOwnerCars = getOwnerCars.map(function(item){
 return item.cars;
})
let stringOwnerCars  = arrOwnerCars.join(', ');

let summCars = stringOwnerCars.split(',');
console.log(`Количесвто авто: ${summCars.length}`)

//3

function checkEducation(arr: Partial<Users>[]){
 return arr.filter(item => item.hasEducation);
}
checkEducation(users);

//4

function getAnimals(arr: Partial<Users>[]){
 return arr.filter(item => item.animals);
}
getAnimals(users);

//5

function getStrCar(arr: Partial<Users>[]){
 let getOwnersCar = arr.filter(item => item.cars);
 let arrOwenrsCar = getOwnersCar.map(item => item.cars).join(',');    
 return arrOwenrsCar;
}
getStrCar(users)


