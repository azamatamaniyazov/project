"use strict";

let numberOfFilms;

function showFirstQ() {
  for (let i = 0; i < 1; i++) {
    numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");
    if (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      i--;
    }
  }
}
showFirstQ();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function showSecondQ() {
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
}

showSecondQ();

function statMovie() {
  if (personalMovieDB.count < 10) {
    alert("Az kino koripsiz");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Siz jaqsi korermen ekensiz");
  } else if (personalMovieDB.count >= 30) {
    alert("Kinoman");
  } else alert("Qatelik");
}

statMovie();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const genre = prompt(`Siz suygen janr ${i + 1}`, "");
    personalMovieDB.genres[i] = genre;
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } else console.log("Data base private");
}

showMyDB(personalMovieDB.private);

const month = {
  december: 31,
  january: 31,
  february: 28,

  march: 31,
  april: 30,
  may: 31,

  june: 30,
  july: 31,
  august: 31,

  september: 30,
  october: 31,
  nobember: 30,
};

for (let key in month) {
  if (month[key] === 30) {
    console.log(`${key} 30 kunnen pitedi`);
  } else if (box === 31) {
    console.log(`${key} 31 kunnen pitedi`);
  } else console.log(`${key} 28 kun`);
}
