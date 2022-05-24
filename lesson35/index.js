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


//1111111111111

let arr1Users = users.map(function(item){
return item.name;
})

let strUser = arr1Users.join(', ')

strUser
'Harry Felton, May Sender, Henry Ford'

//2222222222222

let getOwner = users.filter(item => item.cars);
let arrOwnersCars = getOwner.map(item => item.cars);
let showCars = arrOwnersCars.flat();
console.log(showCars.length)

//333333333333333333

function checkEducation(arr){
return arr.filter(item => item.hasEducation);
}
checkEducation(users);

//4444444444444444

function getAnimals(arr){
return arr.filter(item => item.animals);
}
getAnimals(users);

//555555555555555555

function getStrCar(arr){
    let getOwnersCar = arr.filter(item => item.cars);    
    let arrOwnerCars = getOwnersCar.map(item => item.cars).flat();
    let strCars = arrOwnerCars.join(', ');
    return strCars;
}

getStrCar(users);


