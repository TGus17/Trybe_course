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
