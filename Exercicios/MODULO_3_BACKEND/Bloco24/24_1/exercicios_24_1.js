// Exercício 1 : Altere o imdbRating para 7.7 no filme Batman .

db.movies.updateMany(
  {title: "Batman" },
  { $set: {
    imdbRating: 7.7
  }});

  // Exercício 2 : Altere budget para 1 no filme Godzilla .

  db .movies.updateMany(
    { title: "Godzilla" },
    { $set: {
      budget: 1,
    }}
  );