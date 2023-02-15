import { MongoClient, ObjectId } from "mongodb";

const URI = `mongodb://localhost:27017`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("GroceryListDB");
const bookCollection = db.collection("groceryList");

bookCollection.deleteMany();
