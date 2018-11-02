var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("app");
  // var myobj = { name: "Lysandro", cpf: "044.151.903-24", idade: 24, tipoDocumento: 'participante'};
  var myobj = { name: "Maria", cpf: "312.312.312-24", idade: 21, tipoDocumento: 'participante'};
  dbo.collection("bbb2018").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
