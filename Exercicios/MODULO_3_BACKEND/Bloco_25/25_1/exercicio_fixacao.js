// Exercicio Fixação $lookup
// 1. Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate(
  [{
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_operations",
    }
  }]
);

// 2. Selecione quatro clientes com as suas respectivas transações recebidas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_received",
    }
  },
  { $limit: 4 },
]);

// 3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  { $match: { State: "Florida" } },
  { $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "to",
    as: "florida_transactions",
  }},
]);

// // Exercicio Fixação $group

// 1. Selecione todos os bancos; 

db.transactions.aggregate([
  { $group: {
    _id: "$bank",
  }},
]);

// 2. Selecione o valor total das transações em cada banco e quantas são;

db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    valor_Transacoes: { $sum: "$value" },
    quantity: { $sum: 1 },
  }},
]);

// 3. Selecione o valor total de transações;

db.transactions.aggregate([
  { $group: {
    _id: null,
    total_transacoes: { $sum: "$value" },
  }},
]);

// 4. Selecione os bancos que têm o valor total de transações maior que 1000.

db.transactions.aggregate([
  { $match: {
    value: { $gt: 1000 },
  }},
  { $group: {
    _id: "$bank",
  }},
]);