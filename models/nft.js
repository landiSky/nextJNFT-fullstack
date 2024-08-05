// NFT 数据模型（MongoDB）
export const nftSchema = {
  name: String,
  image: String,
  description: String,
  owner: String,
  tokenId: String,
  contractAddress: String,
};
