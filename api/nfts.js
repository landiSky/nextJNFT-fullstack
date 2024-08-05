import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'nftdb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db(dbName);
      const nfts = await db.collection('nfts').find({}).toArray();
      res.status(200).json(nfts);
    } catch (error) {
      res.status(500).json({ error: '数据库连接失败' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: '仅支持 GET 请求' });
  }
}
