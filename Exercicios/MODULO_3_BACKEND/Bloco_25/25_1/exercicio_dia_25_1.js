// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .

db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" } },
]);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

db.clientes.aggregate([
  { $match: { 
    $and: [
      { sexo: "FEMININO" },
      { dataNascimento: { $gte: ISODate("1995-01-01"), $lt: ISODate("2006-01-01")}}
    ]
  } }]);

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .

db.clientes.aggregate([
  { $match: { 
    $and: [
      { sexo: "FEMININO" },
      { dataNascimento: { $gte: ISODate("1995-01-01"), $lt: ISODate("2006-01-01")}}
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

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .

db.clientes.aggregate([
  { $group: {
    _id: "$sexo",
    total: { $sum: 1 },
  }},
]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .

db.clientes.aggregate([
  { $group: {
    _id: { sexo: "$sexo", uf: "$endereco.uf" },
    total: { $sum: 1 },
  }},
]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):

db.clientes.aggregate([
  { $group: {
    _id: { sexo: "$sexo", uf: "$endereco.uf" },
    total: { $sum: 1 },
  }},
  {
    $project: {
      _id: 0, estado: "$_id.uf", sexo: "$_id.sexo", total: 1,
    },
  },
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

// db.clientes.aggregate([
//   { $lookup: {
//     from: "vendas",
//     localField: "clienteId",
//     foreignField:"clienteId",
//     as: "produtos_comprados",
//   }},
//   { $unwind: "$produtos_comprados" },
//   { $group: { _id: "$nome", totalCompra: { $sum: "$produtos_comprados.valorTotal" } } },
//   { $sort: { totalCompra: -1 } },
//   { $limit: 5 },
//   { $project: { nome: "$nome", totalCompra: 1 } },
// ]);

db.vendas.aggregate([
  { $match: {
    $or: [
      { status: "EM SEPARACAO" },
      { status: "ENTREGUE"}
    ]
  }},
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$valorTotal" },
  }},
  { $sort: { total: -1 } },
  { $limit: 5 },
]);

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

db.vendas.aggregate([
  { $match: {
    $and: [
      { status: { $in: ["EM SEPARACAO", "ENTREGUE"] } },
      { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } },
    ],
  }},
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$valorTotal" },
  }},
  { $sort: { total: -1 } },
  { $limit: 10 },
]);


db.vendas.aggregate([
  { $match:
      { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } },
  },
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$valorTotal" },
  }},
  { $sort: { total: -1 } },
  { $limit: 10 },
]);


