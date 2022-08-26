require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture struggle dash prefer pulse good kiwi army gas'; 
let testAccounts = [
"0xad813fb304e559f0922e8b6e57b63d59fbfaace14f34ec07151bbf6006cc9c5f",
"0x781b28ab7f18b3768c10707f6135a350d6d8dc49207ca9c7872e2c470ccd1816",
"0x37ab1391b366009a650e078b038099c6b0149f22305af53bdd3bb7611154fbf0",
"0xe2cfca282740c47db06c22d75be0832543a5e32eb360096e6c045bafceb5ddda",
"0x8d6acbc44fcd32c59ea0c0d49861d2eb707ae75e27d5c2fd0ecb8e3b1ce086f1",
"0x61a909cca53d919d660116c9625ca3690412d1548fdb7b1c8c829cad62f1030d",
"0x535f3bd31bd3339bf7e9cee15dff4665f155c431a9882cae43460393e300165d",
"0x7e12d44cd3adacb8ca03574247da4fa994f56539dd80ef6b3cf49658115c3eb9",
"0x37e6295fe08faed09342454a33c9e77b1402896252301e2d4cc10e9b8d6b3ac9",
"0x0a225a084f77fe6564220305bf82ee0f21ea18096b5ceb8662da8a2e06ee0606"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

