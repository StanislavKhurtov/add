"use strict";

//const result = confirm("Что ты делаешь");

//const answer = prompt("Вас есть 18?", '18');

//console.log(typeof(answer));

//const answers = [];

// answers[0] = prompt('Как Ваше имя?', '');
// answers[0] = prompt('Как Ваша фамилия?', '');
// answers[0] = prompt('Сколько Вам лет?', '');


//console.log(typeof (null));

//console.log(null);


//========================================================================================================================================================

/* Задание на урок # 1:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
	- count - сюда передается ответ на первый вопрос
	- movies - в это свойство поместить пустой объект
	- actors - тоже поместить пустой объект
	- genres - сюда поместить пустой массив
	- privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
	- 'Один из последних просмотренных фильмов?'
	- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	movies: {
		'logan': '8.1'
	}
Проверить, чтобы все работало без ошибок в консоли */


//  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//  
//  const personalMovieDB = {
//  	count: numberOfFilms,
//  	movies: {},
//  	actors: {},
//  	genres: [],
//  	privat: false
//  };
//  
//  const a = prompt('Один из последних просмотренных фильмов?', ''),
//  	b = prompt('На сколько оцените его?', ''),
//  	c = prompt('Один из последних просмотренных фильмов?', ''),
//  	d = prompt('На сколько оцените его?', '');
//  
//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;
//  
//  console.log(personalMovieDB);

//========================================================================================================================================================


/* Задание на урок #2:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/


//  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//  
//  const personalMovieDB = {
//  	count: numberOfFilms,
//  	movies: {},
//  	actors: {},
//  	genres: [],
//  	privat: false
//  };
//  
//  for (let i = 0; i < 2; i++) {
//  	const a = prompt('Один из последних просмотренных фильмов?', ''),
//  		b = prompt('На сколько оцените его?', '');
//  
//  
//  	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//  		personalMovieDB.movies[a] = b;
//  		console.log('done');
//  	} else {
//  		console.log('Error');
//  		i--; // возвращает на один цикл назад!!!
//  	}
//  }
//  
//  
//  if (personalMovieDB.count < 10) {
//  	console.log('Просмотрено довольно мало фильмов');
//  } else if (personalMovieDB.count >= 10 && numberOfFilms.count < 30) {
//  	console.log('Вы классический зритель');
//  } else if (personalMovieDB.count >= 30) {
//  	console.log('Вы киноман');
//  } else {
//  	console.log('Произошла ошибка');
//  }
//  
//  console.log(personalMovieDB);

//========================================================================================================================================================


// Task #3

// let numberOfFilms ;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
//     while (numberOfFilms == '' || numberOfFilms== null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
//
// //start();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//
//
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('Error');
//             i--; // возвращает на один цикл назад!!!
//         }
//     }
// }
//
// //rememberMyFilms();
//
//
//
// function detectPersonaLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && numberOfFilms.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// //detectPersonaLevel();
//
// function showMyBd() {
//
//     if(personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log("Error");
//     }
// }
//
// //showMyBd();
//
// function writeYourGenres() {
//
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = +prompt(`Ваш любимый жанр под номером ${i} `, '');
//     }
// }
//
// writeYourGenres();
// console.log(personalMovieDB);

//============================================================================================================================================

// Task #4

