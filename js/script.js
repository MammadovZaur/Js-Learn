"use strict";

// let a = 10;
// console.log(a);

// console.log("Həmd yalnız Allaha məxsusdur.");
// let number = 5;
// const leftBorderRadius = 1;


// let num = 10;
// console.log(4/0);
// console.log("aa" * num);


// const obj = {
//     name: "Zaur",
//     age: 35,
//     avto: "Prado"
// };
// console.log(obj.avto);


// alert("Salam");


// const res = confirm("Hazirsan");
// console.log(res);

// const answer = prompt("Yash", "18");
// console.log(answer);
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("Adınız:", "");
// answers[1] = prompt("Soyadınız:", "");
// answers[2] = prompt("Yaşınız:", "");

// document.write(answers);

// const category = "toys";
// console.log(`http://erp-bs.az/${category}`);



// let incr = 10,
//     decr = 10;


// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");



// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const answers01 = prompt("Один из последних просмотренных фильмов?", "");
// const answers02 = prompt("На сколько оцените его?", "");


// const  movies = {
//     'logan': '8.1'
// };

// personalMovieDB.movies[answers01] = answers02;
// personalMovieDB.movies[answers01] = answers02;

// console.log(personalMovieDB);

// const num = 12;

// if(num === 10) {
//     console.log("10");
// }else if (num === 12) {
//     console.log("12");
// }else {
//     console.log("Duz deyil!");
// }

// const num = 12;

// (num ===12) ? console.log("OK"): console.log("NO");



// const num = 50;
// switch (num) {
//     case 2:
//         console.log(2);
//         break;
//     case 15:
//         console.log(15);
//         break;
//     case 30:
//         console.log(30);
//         break;
//     case 50:
//         console.log(50);
//         break;
//     case 40:
//         console.log(40);
//         break;
//     default:
//         console.log(4);
//         break;
// }



// console.log(5 === 3 || 5<7 );



// let num = 50;

// while (num <= 55){
//     console.log(num);
//     num = num + 1;
// }

// let num = 50;
// do{
//     console.log(num);
//     num = num + 1;
// }while(num <= 55);




// for(let i =1; i<8;){
//     console.log(i);
//     i++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i ===5) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// let result = "";
// const leng = 7;

// for(let i = 0; i < leng; i++){

//     for(let j = 0; j<i; j++){
//         result += "*";
//     }

//     result += "\n";
// }
// console.log(result);


// first: for(let i = 1; i < 5; i++ ){
//     console.log("Fist level: "+i);
//     for(let j = 1; j < 5; j++ ){
//         console.log("Second level: "+j);
//         for(let k = 1; k < 5; k++ ){
//             if(k===2) {break first;}
//             console.log("Third level: "+k);
//         }
//     }
// }






// //****************************Home work 2 *************************\\

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// // const question = prompt("Один из последних просмотренных фильмов?", "");
// // const answer  = prompt("На сколько оцените его?", "");

// const quantity = 2;
// for (let i = 1; i <= quantity; i++) {
//     const question = prompt("Один из последних просмотренных фильмов?", ""),
//           answer = prompt("На сколько оцените его?", "");

//     if (question != '' && question != null && answer != '' && answer != null && answer.length <50 ) {
//         personalMovieDB.movies[question] = answer;
//     } else {
//         alert("Sual və ya cavab boş ola bilməz!!!");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10){
//     console.log("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30 ){
//     console.log("Вы классический зритель");
// }else if(personalMovieDB.count > 30){
//     console.log("Вы киноман");
// }else{
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// //****************************Home work 2 *************************\\

// //****************************Functions*************************\\
// let num = 20;
// function getName() {
//     console.log("Zaur");
//     return 35;
// }

// getName();

// const direktor = getName();
// console.log(direktor);

// const oo = function (){
//     num = 10;
//     return num+5;
// };
// oo();
// console.log(num);
// console.log(oo());

// const calc = (a, b) => {
//     let c;
//     c = a + b;
//     // return c;
// };
// console.log(calc);

// //****************************Functions*************************\\

// // //****************************String Metods*************************\\
// const client = "Mammadov Zaur";

// console.log(client.length);
// console.log(client.toUpperCase());
// console.log(client.toLocaleLowerCase());
// console.log(client.indexOf('ov'));
// console.log(client.slice(9, 13));
// console.log(client.substring(9, 13));
// console.log(client.substr(9, 4));
// // //****************************String Metods*************************\\

// //****************************Number Metods*************************\\
// const num = 125.563;
// const str = '125.563px';
// console.log(Math.random());
// console.log(Math.round(num));
// console.log(parseInt(str));
// console.log(parseFloat(str));
// //****************************Number Metods*************************\\



// //****************************Home work 3 *************************\\
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// // const question = prompt("Один из последних просмотренных фильмов?", "");
// // const answer  = prompt("На сколько оцените его?", "");

// const quantity = 2;

// function rememberMyFilms() {
//     for (let i = 1; i <= quantity; i++) {
//         const question = prompt("Один из последних просмотренных фильмов?", ""),
//             answer = prompt("На сколько оцените его?", "");

//         if (question != '' && question != null && answer != '' && answer != null && answer.length < 50) {
//             personalMovieDB.movies[question] = answer;
//         } else {
//             alert("Sual və ya cavab boş ola bilməz!!!");
//             i--;
//         }
//     }
// }

// // rememberMyFilms();

// function detectedPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// // detectedPersonalLevel();


// function showMyDB(hiden) {
//     if (!hiden) {
//         console.log(personalMovieDB);
//     }
// }


// function writeYourGenres() {
//     const quantityQuestions = 3;
//     for (let i = 1; i <= quantityQuestions; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
// showMyDB(personalMovieDB.privat);
// writeYourGenres();
// //****************************Home work 3 *************************\\


// function first() {
//     setTimeout(function(){
//         console.log(1);
//     },500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function done(){
//     console.log('DERS OK');
// }

// function learn(language, callBac){
//     console.log(`Dərslərin vəziyyəti? ${language}`);
//     callBac();
// }



// learn("JS",done);



// //************************OBJECT************************\\

// const options = {
//     name: 'Moitor',
//     height: '1024',
//     weight: '1368',
//     colors: {
//         boardColor: 'black',
//         logoColor: 'blue',
//         fullColor: {
//             colum: 'red',
//             stabl: 'blue',
//             ome: 'hin'
//         }
//     },
//     makeTest: function(){
//         console.log('Zaur');
//     }
// };

// // console.log(Object.keys(options).length);
// // options.makeTest();

// const {colum, ome} = options.colors.fullColor;
// console.log(colum, ome);


// // for (const key in options) {
// //     if (Object.hasOwnProperty.call(options, key)) {
// //         const element = options[key];
// //         console.log(element);
// //     }
// // }

// // for (const key in options) {
// //     console.log(typeof options[key]);
// //     // console.log(`Svoystvo: ${key}, znacenie: ${options[key]}`);
// // }


// // for (const key in options) {
// //     if (typeof options[key] === 'object') {
// //         for (const i in options[key]) {
// //             console.log(`Svoystvo: ${i}, znacenie: ${options[key][i]}`);
// //         }
// //     } else {
// //         console.log(`Svoystvo: ${key}, znacenie: ${options[key]}`);
// //     }
// // }

// //************************OBJECT************************\\


//************************Array************************\\
// const arr = [15,3,2,5,7,9,11];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
//     return a-b;
// }

// arr.pop();
// arr.push(54);
// console.log(arr);

// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function (item, i, arr){
//     console.log(`${item}, ${i}, ${arr}`);
// });

// const str     = prompt("","");
// const products = str.split(",");
// console.log(products.join("; "));

//************************Array************************\\


// //************************Link types************************\\

// const options = {
//     name: 'Moitor',
//     height: '1024',
//     weight: '1368',
//     colors: {
//         boardColor: 'black',
//         logoColor: 'blue',
//         fullColor: {
//             colum: 'red',
//             stabl: 'blue',
//             ome: 'hin'
//         }
//     },
//     makeTest: function () {
//         console.log('Zaur');
//     }
// };


// // function copy(mainObj) {    
// //     let objCopy = {};

// //     let key;
// //     for (key in mainObj) {
// //         if (Object.hasOwnProperty.call(mainObj, key)) {
// //             objCopy[key] = mainObj[key];
// //         }
// //     }

// //     return objCopy;
// // }


// // function copy(mainObj) {
// //     let objCopy = {};

// //     let key;
// //     for (key in mainObj) {
// //         objCopy[key] = mainObj[key];
// //     }

// //     return objCopy;
// // }

// // const newObj = copy(options);
// // newObj.colors.boardColor = 'Processor';
// // console.log(options.colors.boardColor);
// // console.log(newObj.colors.boardColor);

// // console.log(options);
// // console.log(newObj);

// const newAddObj = {
//     programmerName: "Zaur",
//     hrName: "Oley"
// };

// // Object.assign(options, newAddObj);
// // console.log(options);

// const newObj = Object.assign({},options);
// newObj.colors.logoColor = "red";
// newObj.name = "New";

// // console.log(newObj.name);
// // console.log(options.name);

// const oldArray = ['Zaur', 'Vuqar', 'Elnur',{
//     yash: 35,
//     boy:  175
// }];
// const newArray = oldArray.slice();

// newArray[3].boy = 190;

// const video = ['youtube', 'erp-bs', 'doctorum'],
//       saty  = ['obby', 'elmler'],
//       diger = [...video, ...saty, 'Mammadov', 'Hasanov'];


// console.log(...video);
// // console.log(newArray);
// console.log({...options});
// //************************Link types************************\\



//************************Proto************************\\

let str    = "some";
let strObj = new String("SomeObj");

// console.log(typeof(str));
// console.log(typeof(strObj));

const solilder = {
    health: 400,
    amour: 100,
    sayHello: function(){
        console.log("Salam Asker");
    }
};


const jon = Object.create(solilder);

jon.sayHello();

//************************Proto************************\\