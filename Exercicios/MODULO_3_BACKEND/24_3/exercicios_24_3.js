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

// 3. Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.

db.movies.updateMany(
  { title: "Batman" },
  { $push: {
    ratings: { $each: [85, 100, 102, 105] }
  }},
  { upsert: true },
);

// 4. Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .

db.movies.updateMany(
  { title: "Godzilla" },
  { $push: {
    ratings: { $each: [78, 52, 95, 102] }
  }},
  { upsert: true },
);

// 5. Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .

db.movies.updateMany(
  { title: "Home Alone" },
  { $push: {
    ratings: { $each: [200, 99, 65] }
  }},
  { upsert: true },
);

// 6. Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .

db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { title: 1, ratings: 1 },
);

// 7. Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .

db.movies.find(
  { ratings: {
    $elemMatch: { $gte: 100, $lte: 105 }
    }
  },
  { title: 1, ratings: 1 },
);

// 8. Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .

db.movies.find(
  { ratings: {
    $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] },
    },
  },
  { title: 1, ratings: 1 },
);

// 9. Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .

db.movies.find(
  {
    category: { $elemMatch: { $eq: 'adventure' } },
    ratings: { $elemMatch: { $gt: 103 } },
}, {
  ratings: 1, category: 1, title: 1,
});

// 10. Retorne somente o título de todos os filmes com dois elementos no array category .


db.movies.find(
  { category: { $size: 2 } },
  { title: 1 },
);

// 11. Retorne somente o título de todos os filmes com quatro elementos no array ratings .

db.movies.find(
  { ratings: { $size: 4 } },
  { title: 1 },
);

// 12. Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .

db.movies.find(
  { budget: { $mod: [5, 0] },
    category: { $size: 2 }
  });

// 13. Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .

db.movies.find(
  { $or: [
    { category: { $all: ['sci-fi'] } },
    { ratings: { $elemMatch: { $gt: 199 } } },
  ]},
  {
    title: 1, ratings: 1, category: 1,
  }
);

// 14. Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.

db.movies.find(
  { $and: [
    { ratings: { $size: 4 } },
    { category: { $in: ['adventure', 'family'] } },
    { imdbRating: { $gte: 7 } },
    ]
  }
);

// 15. Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker." .

db.movies.updateMany(
  {
    title: "Batman",
  }, 
  {
    $set: {
      description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  }
);