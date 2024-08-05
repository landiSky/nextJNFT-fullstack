// 获取指定钱包地址的 NFT（伪代码，实际需集成区块链 API）
import { ethers } from 'ethers';

export async function getNfts(address) {
  // 这里可以集成 OpenSea、Alchemy 或自建合约的 NFT 查询逻辑
  // 示例返回假数据
  return [
    {
      name: 'Demo NFT',
      image: 'https://via.placeholder.com/150',
      description: '演示 NFT',
      owner: address,
      tokenId: '1',
      contractAddress: '0x123...abc',
    },
  ];
}
