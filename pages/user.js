import { useEffect, useState } from 'react';

export default function UserPage() {
  const [address, setAddress] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // 假设已连接钱包
    const addr = window.localStorage.getItem('walletAddress');
    if (addr) {
      setAddress(addr);
      fetch(`/api/nfts/favorite?user=${addr}`)
        .then(res => res.json())
        .then(data => setFavorites(data));
    }
  }, []);

  return (
    <div>
      <h1>用户信息</h1>
      <p>钱包地址: {address || '未连接'}</p>
      <h2>我的收藏夹</h2>
      <ul>
        {favorites.map(fav => (
          <li key={fav.nftId}>NFT ID: {fav.nftId} 收藏时间: {new Date(fav.addedAt).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}
