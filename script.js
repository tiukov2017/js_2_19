const numberOfFilms = +prompt('Skolko filmov Bi uje posmotreli' ,'');

const personalMuvwDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
const a = prompt('Odin iz poslednih filmov',''),
b = prompt('Na scolco Bi ego ozenivaete?',''),
c = prompt('Odin iz poslednih filmov',''),
d = prompt('Na scolco Bi ego ozenivaete?','');

personalMuvwDB.movies[a] = b;
personalMuvwDB.movies[c] = d;

console.log(personalMuvwDB);