import { useState } from 'react';

export default function FavoriteButton({ nftId, user }) {
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleFavorite() {
    setLoading(true);
    const res = await fetch('/api/nfts/favorite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, nftId }),
    });
    const data = await res.json();
    setFavorited(data.success);
    setLoading(false);
  }

  return (
    <button onClick={handleFavorite} disabled={loading || favorited}>
      {favorited ? '已收藏' : loading ? '收藏中...' : '收藏'}
    </button>
  );
}
