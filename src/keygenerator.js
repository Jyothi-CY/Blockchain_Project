const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key:', privateKey);

console.log();
console.log('Public key:', publicKey);



/*Uses the elliptic library for Elliptic Curve Cryptography (ECC).
Generates a key pair using the secp256k1 curve (used in Bitcoin & Ethereum).
Extracts the private key and public key in hexadecimal format.
Logs the generated keys to the console.*/