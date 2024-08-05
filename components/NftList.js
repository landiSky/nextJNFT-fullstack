import { useEffect, useState } from 'react';
import { getNfts } from '../utils/getNfts';

export default function NftList({ address }) {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (address) {
      getNfts(address).then(setNfts);
    }
  }, [address]);

  if (!address) return <p>请先连接钱包</p>;

  return (
    <div>
      <h2>我的 NFT</h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        {nfts.map((nft) => (
          <div key={nft.tokenId} style={{ border: '1px solid #ccc', padding: '8px' }}>
            <img src={nft.image} alt={nft.name} width={100} />
            <h3>{nft.name}</h3>
            <p>{nft.description}</p>
            <p>Token ID: {nft.tokenId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
