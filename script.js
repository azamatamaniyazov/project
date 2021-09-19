"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  functions: {
    start: function () {
      for (let i = 0; i < 1; i++) {
        personalMovieDB.count = +prompt("Сколько фильмов посмотрели?", "");
        if (
          personalMovieDB.count == "" ||
          personalMovieDB.count == null ||
          isNaN(personalMovieDB.count)
        ) {
          i--;
        }
      }
    },
    talk: function () {
      for (let i = 0; i < 2; i++) {
        const a = prompt("En aqirgi korgen kino?"),
          b = prompt("Neshege bahalaysiz?");

        if (a != null && b != null && a != "" && b != "" && a.length < 20) {
          personalMovieDB.movies[a] = b;
          console.log("Done");
        } else {
          console.log("Error");
          i--;
        }
      }
    },
    statMovie: function () {
      if (personalMovieDB.count < 10) {
        alert("Az kino koripsiz");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Siz jaqsi korermen ekensiz");
      } else if (personalMovieDB.count >= 30) {
        alert("Kinoman");
      } else alert("Qatelik");
    },
    writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
        const genre = prompt(`Siz suygen janr ${i + 1}`, "");
        if (genre == "" || genre == null || !isNaN(genre)) {
          i--;
        } else personalMovieDB.genres[i] = genre;
      }
      personalMovieDB.genres.forEach(function (item, i) {
        console.log(i + 1 + ": " + item);
      });
    },
    showMyDB: function (hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      } else console.log("Data base private");
    },
    toogleVisibleMyDB: function () {
      if (personalMovieDB.private) {
        personalMovieDB.private = false;
      } else personalMovieDB.private = true;
    },
  },
};
// personalMovieDB.functions.start();

// personalMovieDB.functions.talk();
// personalMovieDB.functions.statMovie();
personalMovieDB.functions.writeYourGenres();
// personalMovieDB.functions.toogleVisibleMyDB();
personalMovieDB.functions.showMyDB(personalMovieDB.private);

// const month = {
//   december: 31,
//   january: 31,
//   february: 28,

//   march: 31,
//   april: 30,
//   may: 31,

//   june: 30,
//   july: 31,
//   august: 31,

//   september: 30,
//   october: 31,
//   nobember: 30,
// };

// for (let key in month) {
//   if (month[key] === 30) {
//     console.log(`${key} 30 kunnen pitedi`);
//   } else if (box === 31) {
//     console.log(`${key} 31 kunnen pitedi`);
//   } else console.log(`${key} 28 kun`);
// }
