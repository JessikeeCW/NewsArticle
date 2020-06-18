import nextConnect from 'next-connect';
import middleware from '../../../models/database';


const handler = nextConnect();
handler.use(middleware);


handler.get(async (req, res) => {
  const getArticle = await req.db.collection('Cluster0').find({}).toArray();
  res.status(200).json({ success: true, data: getArticle });
});

handler.post(async (req, res) => {
  const addArticle = await req.db.collection('Cluster0').insertOne(req.body);
  res.status(201).json({ success: true, data: addArticle });
});

export default handler;


