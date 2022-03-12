const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alissa:Apple10@cluster0.fmzii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("user");
  // perform actions on the collection object
  client.close();
});