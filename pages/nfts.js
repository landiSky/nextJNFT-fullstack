
import { useState } from 'react';
import WalletConnect from '../components/WalletConnect';
import NftList from '../components/NftList';

export default function NFTs() {
  const [address, setAddress] = useState('');
  const [search, setSearch] = useState('');
  const [chainFilter, setChainFilter] = useState('');

  return (
    <div>
      <h1>NFT 展示页</h1>
      <WalletConnect setAddress={setAddress} />
      <div style={{ margin: '16px 0' }}>
        <input
          type="text"
          placeholder="搜索 NFT 名称"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />{' '}
        <select value={chainFilter} onChange={e => setChainFilter(e.target.value)}>
          <option value="">全部链</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Polygon">Polygon</option>
        </select>
      </div>
      <NftList address={address} search={search} chainFilter={chainFilter} />
    </div>
  );
}
