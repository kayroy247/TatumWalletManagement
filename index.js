// You need to install Javascript library
// https://github.com/tatumio/tatum-js
const {
  generatePrivateKeyFromMnemonic,
  generateAddressFromXPub,
  generateWallet,
  Currency,
} = require("@tatumio/tatum");

const manageWallets = async () => {
  const btcWallet = await generateWallet(Currency.ETH, false);
  console.log(btcWallet);

  const btcAddress = generateAddressFromXPub(
    Currency.ETH,
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
};

manageWallets();
