// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .

db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" } },
]);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

db.clientes.aggregate([
  { $match: { 
    $and: [
      { sexo: "FEMININO" },
      { dataNascimento: { $gte: ISODate("1995-01-01T00:00:00.0Z"), $lt: ISODate("2006-01-01T00:00:00.000Z")}}
    ]
  } }]);

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .

db.clientes.aggregate([
  { $match: { 
    $and: [
      { sexo: "FEMININO" },
      { dataNascimento: { $gte: ISODate("1995-01-01T00:00:00.0Z"), $lt: ISODate("2006-01-01T00:00:00.000Z")}}
    ]},
  },
  {
    $limit: 5,
  }
]);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

db.clientes.aggregate([
  { $group: {
    _id: "$endereco.uf",
    total: { $sum: 1},
  }},
  { $match: { "_id": "SC" } },
]);
