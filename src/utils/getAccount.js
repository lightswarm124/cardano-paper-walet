const CardanoWasm = require("@emurgo/cardano-serialization-lib-asmjs");
const bip39 = require("bip39");

// Purpose derivation (See BIP43)
const Purpose = {
  BIP44: 44,
  CIP1852: 1852, // see CIP 1852
}

// Cardano coin type (SLIP 44)
const CoinTypes = {
  CARDANO: 1815,
}

const ChainDerivation = {
  EXTERNAL: 0, // from BIP44
  INTERNAL: 1, // from BIP44
  CHIMERIC: 2, // from CIP1852
}

function harden(num) {
  return 0x80000000 + num;
}

function getAccount() {
  const mnemonic = bip39.generateMnemonic(256);
  const entropy = bip39.mnemonicToEntropy(mnemonic);
  
  const rootKey = CardanoWasm.Bip32PrivateKey.from_bip39_entropy(
    Buffer.from(entropy, 'hex'),
    Buffer.from(''),
  );

  const accountKey = rootKey
    // .derive(harden(Purpose.BIP44))
    .derive(harden(Purpose.CIP1852))
    .derive(harden(CoinTypes.CARDANO))
    .derive(harden(0)); // account #0

  const utxoPubKey = accountKey
    .derive(ChainDerivation.EXTERNAL)
    .derive(0)
    .to_public();

  const byronAddr = CardanoWasm.ByronAddress.icarus_from_key(
    utxoPubKey, // Ae2* style icarus address
    CardanoWasm.NetworkInfo.mainnet().protocol_magic()
  );
  // const address = byronAddr.to_base58();
  const address = byronAddr.to_base58();

  return {
    mnemonic,
    address,
  }
}

export {
  getAccount,
}