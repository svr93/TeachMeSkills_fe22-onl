var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var database = require('../FileJSON/database.json');
//1. Собрать в массив все жанры фильмов (без повторения)
var filretedGenres = database.filter(function (obj) { return obj.genre != undefined; });
var allGenres = filretedGenres.map(function (obj) { return obj.genre; }).flat();
var uniqueGenres = allGenres.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
console.log(uniqueGenres);
console.log("---------------------------------------------------------------------------------------------------");
//2. Собрать в массив всех актеров всех фильмов (без повторения)
var filteredActors = database.filter(function (obj) { return obj.actors != undefined; });
var allActors = filteredActors.map(function (obj) { return obj.actors; }).reduce(function (pre, cur) { return __spreadArray(__spreadArray([], (pre || []), true), (cur || []), true); });
var uniqueActors = allActors === null || allActors === void 0 ? void 0 : allActors.filter(function (element, index, categoryArr) { return categoryArr.indexOf(element) === index; });
console.log(uniqueActors);
console.log("---------------------------------------------------------------------------------------------------");
//3. Отсортировать фильмы по рейтингу по убыванию
var sortedRating = database.sort(function (a, b) { return (b.imdbRating || 0) - (a.imdbRating || 0); });
console.log(sortedRating);
console.log("---------------------------------------------------------------------------------------------------");
//4. Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot
var newMovieObjects = database.map(function (obj) { return ({ id: obj.id, title: obj.title, released: obj.released, plot: obj.plot }); });
console.log(newMovieObjects);
console.log("---------------------------------------------------------------------------------------------------");
//5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив,
//с фильмами где число равно году выхода фильма
function filteredMovies(data, num) {
    var filteredYear = data.filter(function (value) { return value.year === num; });
    return filteredYear;
}
var filteredByYear = filteredMovies(database, 2001);
console.log(filteredByYear);
console.log("---------------------------------------------------------------------------------------------------");
//6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный 
//массив, с фильмами, где строка входит в название фильма.
function filteredTitles(data, name) {
    var filteredByName = data.filter(function (value) { return value.title == name; });
    return filteredByName;
}
var filteredByTitle = filteredTitles(database, "Harry Potter and the Sorcerer's Stone");
console.log(filteredByTitle);
console.log("---------------------------------------------------------------------------------------------------");
//7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив,
//с фильмами где строка входит в название фильма или в его сюжет.
function filteredTitlesOrPlot(data, titleOrPlot) {
    var filteredByTitleOrPlot = data.filter(function (value) { return value.title == titleOrPlot || value.plot == titleOrPlot; });
    return filteredByTitleOrPlot;
}
var filteredByTitleOrPlot = filteredTitlesOrPlot(database, "Harry Potter and the Half-Blood Prince");
console.log(filteredByTitleOrPlot);
console.log("---------------------------------------------------------------------------------------------------");
