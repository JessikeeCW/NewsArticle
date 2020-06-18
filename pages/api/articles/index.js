import nextConnect from 'next-connect';
import middleware from '../../../models/database';

//uses the database connection
const handler = nextConnect();
handler.use(middleware);

//finds all of the saved articles
handler.get(async (req, res) => {
  try {
    const getArticle = await req.db.collection('Cluster0').find({}).toArray();
    res.status(200).json({ success: true, data: getArticle });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

//posts selected saved articles to the database
handler.post(async (req, res) => {
  try {
    const addArticle = await req.db.collection('Cluster0').insertMany([req.body]);
    res.status(201).json({ success: true, data: addArticle });
  } catch (error) {
    res.status(400).json({ status: false });
  }
});

export default handler;
