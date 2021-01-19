// Exercício 1 : Altere o imdbRating para 7.7 no filme Batman .

db.movies.updateMany(
  {title: "Batman" },
  { $set: {
    imdbRating: 7.7
  }});

  // Exercício 2 : Altere budget para 1 no filme Godzilla .

  db.movies.updateMany(
    { title: "Godzilla" },
    { $set: {
      budget: 1,
    }}
  );

  // Exercício 3 : Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .

db.movies.updateMany(
  {
  title: "Home Alone",
  },
  {
    $set: {
      budget: 15,
      imdbRating: 5.5,
    }
  }
);

// Exercício 4 : Aumente em 2 o imdbRating do filme Batman .

db.movies.update(
  {
    title: "Batman",
  },
  {
    $inc: {
      imdbRating: 2,
    }
  }
);

// Exercício 5 : Aumente em 5 o budget do filme Home Alone .

db.movies.update(
  {
    title: "Home Alone",
  },
  {
    $inc: {
      budget: 5,
    }
  }
);

// Exercício 6 : Multiplique por 4 o imdbRating do filme Batman .

db.movies.update(
  {
    title: "Batman",
  },
  {
    $mul: {
      imdbRating: 4,
    }
  }
);