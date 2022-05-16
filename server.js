// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';
const AES =  require('crypto-js/aes');
const { enc } = require('crypto-js/core');

const message = "Hello,Sunil";
const key = '1234123412341234';
const iv = '123412341234'

const encrypted = AES.encrypt(message, key, {iv: iv});

console.log(encrypted, encrypted.toString());

const decrypted = AES.decrypt(encrypted, key, {iv:iv});

console.log(decrypted.toString(enc.Utf8));
