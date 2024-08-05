import { useState } from 'react';
import { ethers } from 'ethers';

export default function WalletConnect({ setAddress }) {
  const [localAddress, setLocalAddress] = useState('');

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const addr = await signer.getAddress();
      setLocalAddress(addr);
      if (setAddress) setAddress(addr);
    } else {
      alert('请安装 MetaMask 钱包');
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>连接钱包</button>
      {localAddress && <p>钱包地址: {localAddress}</p>}
    </div>
  );
}
