interface Movie {
    id?: number,
    title?: string,
    year?: number,
    released?: number,
    runtime?: string,
    genre?: string[],
    director?: string,
    writer?: string,
    actors?: string[],
    plot?: string,
    country?: string,
    poster?: string,
    imdbRating?: number,
    imdVotes?: number,
    type?: string,
    boxOffice?: string,
    production?: string
}


var database: Movie[] = require('../FileJSON/database.json')

//1. Собрать в массив все жанры фильмов (без повторения)

let filretedGenres = database.filter(obj => obj.genre != undefined);
let allGenres = filretedGenres.map(obj => obj.genre).flat();
let uniqueGenres = allGenres.filter((item, i, ar) => ar.indexOf(item) === i);

console.log(uniqueGenres);
console.log("---------------------------------------------------------------------------------------------------");

//2. Собрать в массив всех актеров всех фильмов (без повторения)

let filteredActors = database.filter(obj => obj.actors != undefined);
let allActors = filteredActors.map(obj => obj.actors).reduce((pre, cur) => [...(pre || []), ...(cur || [])]);
var uniqueActors = allActors?.filter((element, index, categoryArr) => categoryArr.indexOf(element) === index);

console.log(uniqueActors);
console.log("---------------------------------------------------------------------------------------------------");

//3. Отсортировать фильмы по рейтингу по убыванию

let sortedRating = database.sort((a,b) => (b.imdbRating || 0) - (a.imdbRating || 0));
console.log(sortedRating);
console.log("---------------------------------------------------------------------------------------------------");

//4. Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot

let newMovieObjects = database.map(obj => ({id: obj.id, title: obj.title, released: obj.released, plot: obj.plot}));
console.log(newMovieObjects);
console.log("---------------------------------------------------------------------------------------------------");

//5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив,
//с фильмами где число равно году выхода фильма

function filteredMovies (data : Movie[], num: number): Movie[]{

    let filteredYear = data.filter(value => value.year === num);
    return filteredYear;
}

let filteredByYear = filteredMovies(database, 2001);
console.log(filteredByYear);
console.log("---------------------------------------------------------------------------------------------------");

//6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный 
//массив, с фильмами, где строка входит в название фильма.

function filteredTitles (data : Movie[], name: string): Movie[]{

    let filteredByName = data.filter(value => value.title == name);
    return filteredByName;
}

let filteredByTitle = filteredTitles(database, "Harry Potter and the Sorcerer's Stone");
console.log(filteredByTitle);
console.log("---------------------------------------------------------------------------------------------------");

//7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив,
//с фильмами где строка входит в название фильма или в его сюжет.

function filteredTitlesOrPlot(data: Movie[], titleOrPlot: string): Movie[]{
    
    let filteredByTitleOrPlot = data.filter(value => value.title == titleOrPlot|| value.plot == titleOrPlot);
    return filteredByTitleOrPlot;
}

let filteredByTitleOrPlot = filteredTitlesOrPlot(database, "Harry Potter and the Half-Blood Prince");
console.log(filteredByTitleOrPlot);
console.log("---------------------------------------------------------------------------------------------------");

//8. Создать функцию, которая бы принимала 3 параметра:
//1)массив фильмов , 2) строка(название поля, например 'title') и строку/число(значение поля "Black Widow"). А результатом
//этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма

//Не понял строку/число значение поля "Black Widow". Это же title. Два парамента с сортировкой на title, как-то не логично!


