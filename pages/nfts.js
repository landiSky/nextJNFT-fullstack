import { useState } from 'react';
import WalletConnect from '../components/WalletConnect';
import NftList from '../components/NftList';

export default function NFTs() {
  const [address, setAddress] = useState('');

  return (
    <div>
      <h1>NFT 展示页</h1>
      <WalletConnect setAddress={setAddress} />
      <NftList address={address} />
    </div>
  );
}
