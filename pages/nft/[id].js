import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FavoriteButton from '../../components/FavoriteButton';

export default function NftDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [nft, setNft] = useState(null);
  const [transferTo, setTransferTo] = useState('');
  const [transferResult, setTransferResult] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // 假设已连接钱包
    const addr = window.localStorage.getItem('walletAddress');
    if (addr) setAddress(addr);
    if (id) {
      fetch(`/api/nfts?id=${id}`)
        .then(res => res.json())
        .then(data => setNft(data));
    }
  }, [id]);

  async function handleTransfer(e) {
    e.preventDefault();
    // 这里只做前端演示，实际应调用合约
    setTransferResult('转账成功（演示）');
  }

  if (!nft) return <p>加载中...</p>;

  return (
    <div>
      <h1>NFT 详情</h1>
      <img src={nft.image} alt={nft.name} width={200} />
      <h2>{nft.name}</h2>
      <p>{nft.description}</p>
      <p>Token ID: {nft.tokenId}</p>
      <p>Owner: {nft.owner}</p>
      <p>链类型: {nft.chainType}</p>
      <p>状态: {nft.status}</p>
      {address && <FavoriteButton nftId={id} user={address} />}
      <h3>转账 NFT</h3>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="接收方地址"
          value={transferTo}
          onChange={e => setTransferTo(e.target.value)}
          required
        />{' '}
        <button type="submit">转账</button>
      </form>
      {transferResult && <p>{transferResult}</p>}
    </div>
  );
}
