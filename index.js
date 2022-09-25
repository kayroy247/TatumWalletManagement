// You need to install Javascript library
// https://github.com/tatumio/tatum-js
const {
  generatePrivateKeyFromMnemonic,
  generateAddressFromXPub,
  generateWallet,
  Currency,
} = require("@tatumio/tatum");

const btcWallet = await generateWallet(Currency.BTC, false);
console.log(btcWallet);

const btcAddress = generateAddressFromXPub(
  Currency.BTC,
  false,
  btcWallet.xpub,
  1
);
console.log(btcAddress);

const btcPrivateKey = await generatePrivateKeyFromMnemonic(
  Currency.BTC,
  false,
  btcWallet.address,
  1
);
console.log({ key: btcPrivateKey });
