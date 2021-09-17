const numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("En aqirgi korgen kino?"),
  b = prompt("Neshege bahalaysiz?"),
  c = prompt("En aqirgi korgen kino?"),
  d = prompt("Neshege bahalaysiz?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
