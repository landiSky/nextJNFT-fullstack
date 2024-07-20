// 收藏夹相关 API
export async function handleFavorite(req, res) {
  const client = new MongoClient(uri);
  if (req.method === 'POST') {
    try {
      await client.connect();
      const db = client.db(dbName);
      const { user, nftId } = req.body;
      const newFavorite = {
        user,
        nftId,
        addedAt: new Date(),
      };
      await db.collection('favorites').insertOne(newFavorite);
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: '添加收藏失败' });
    } finally {
      await client.close();
    }
  } else if (req.method === 'GET') {
    try {
      await client.connect();
      const db = client.db(dbName);
      const { user } = req.query;
      const favorites = await db.collection('favorites').find({ user }).toArray();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ error: '查询收藏失败' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: '仅支持 GET/POST 请求' });
  }
}
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
