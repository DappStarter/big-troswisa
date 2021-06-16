require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender trophy cheap rifle tank common gentle light army gift'; 
let testAccounts = [
"0x12c18cfb184cd928a16dcb532459c496ca0631569cdbb04834ead183e7c4b5b8",
"0x8a3c8692660aee2a4828fc0f94d4c71741339d8cba0763ef1f61f5b66f4d6502",
"0x103103ef6b1dcd9b8ec405f00698b4dd3958d568b8988abbf731e42351bcf99d",
"0xd674e7b71f17878237716fb80e97ad798f3718da8587a897d813cd721edc148a",
"0xbd82c13ecf99f91522c0561f045153bd914fbd2d0a87afae56bf71e25cd540f1",
"0x3f38d5150f182114e7e34d4e61988cea3845d160c7da1d4a9c742aed7f598b8f",
"0x52de3b756b3d600d08808e243947db31e4f3e50e01ba8b34f3f7429f1300b908",
"0xf601d9946d1ee07da94fb284f2a3285185b03902cd5e9c399cb6c1de46c0dc33",
"0xedc96fd67a945f5b6f2f9daf15948c4b51694a30ba4a5a60d8fe50302bdfb491",
"0x9f16e96590bc1e570567f9384db7e34eeb02e0c86a93de27d901288660045abd"
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

