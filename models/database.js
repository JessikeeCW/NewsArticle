
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

//variable that is needed to connect to the database
const URI = process.env.MONGO_URI || process.env.MY_URI;

//setting the database connection
const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = async (req, res, next) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('Cluster0');
  return next();
};

const middleware = nextConnect();
middleware.use(database);

export default middleware;
