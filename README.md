# blockchain102 - smart contract with oracles

Oracles provide Ethereum smart contracts with access to real-world data, unlocking more use-cases and greater value for users. 

This repository explores how off-chain data is made accessible on a Ethereum network.

A basic understanding of below topics is required to understand more on Oracles - 
1. Ethereum
2. Solidity fundamentals
3. Typescript fundamentals
4. Smart Contract 101

---


### Dependencies

| Item | Install    | Comments    |
| :---:   | :---: | :---: |
| Runtime | [Node](https://nodejs.org/en/download)   | required version >= 18.x   |
| IDE | [VSCode](https://code.visualstudio.com/Download)   | required version >= 1.70  |
| Node | [Alchemy](https://www.alchemy.com/)   | [SignUp](https://dashboard.alchemyapi.io/signup/)   |
| Wallet | [MetaMask](https://metamask.io/download/) | [Add Sepolia to MetaMask](https://www.alchemy.com/overviews/how-to-add-sepolia-to-metamask)   |
| Network | [Sepolia](https://www.alchemy.com/overviews/sepolia-testnet)   | [Add LINK tokens to MetaMask](https://docs.chain.link/resources/acquire-link)   |


### Setup

Once you have all the above depdencies met - 


1. Install node packages
```
npm install
```

2. Create a `.env` file in project root and enter your wallet's `PRIVATEKEY` and Alchemy's `SEPOLIAKEY`
```
SEPOLIAKEY=""
PRIVATEKEY=""
```

3. Compile the HelloWorld smart contract

```
npm run build
```

4. Deploy the smart contract

```
npm run deploy:hello
```

5. If all works, your console should print

```
contract deployed, address = <deployedAddress>
```

6. View your transaction at Etherscan's Sepolia Testnet 
```
https://sepolia.etherscan.io/address/<deployedAddress>
```
