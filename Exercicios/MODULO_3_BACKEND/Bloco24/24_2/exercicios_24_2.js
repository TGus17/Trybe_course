// Exercício 1: Adicione a categoria "superhero" ao filme Batman .

db.movies.updateOne(
  {
  title: 'Batman',
  },
  {
    $push: {
      category: 'superhero',
    }
  });

  // Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .

  db.movies.updateOne(
    {
      title: 'Batman',
    },
    {
      $push: {
        category: { $each:
          ['villain', 'comic-based']
        }
      }
    }
  );