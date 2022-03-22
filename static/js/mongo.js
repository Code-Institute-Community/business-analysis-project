const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = os.getenv('MONGODB_URI');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("user");
  // perform actions on the collection object
  client.close();
});
// end::script[]
