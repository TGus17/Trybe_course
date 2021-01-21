// 1. Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .

db.movies.find({
  category: { $all: ["action", "adventure"] },
});

// 2. Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .

db.movies.find(
  { category: {$all: ["action"] },
    imdbRating: { $gt: 7 },
  }
);