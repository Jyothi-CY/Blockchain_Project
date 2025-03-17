

const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ed47727d59b226cde191c41d68d24532a44187648ced8287d9d959c01de91443');
const myWalletAddress = myKey.getPublic('hex');

let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);



console.log('\nBalance of user is', savjeeCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', savjeeCoin.isChainValid());

