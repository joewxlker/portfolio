// wss://autumn-sparkling-resonance.bsc.quiknode.pro/2519c42cdc27be9ccf32638d0878ed819cd3cff7/ binance
// wss://cool-wispy-feather.ropsten.quiknode.pro/e9f0b6b76ce4bdfedb224edd8279642111a45317/ ropsten
// wss://purple-red-paper.bsc.quiknode.pro/ac051feae4b6bac81afa8edce0e30f0ab2f6e669/ binance 2
const express = require("express");
const http = require('http');
const Web3 =  require("web3")
const ReactDOMServer = require('react-dom/server');
const ethers = require("ethers");
const app = express(); 
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const router = express.Router()

// to interact with the blockchain using this source code you will need a node end point using the same network you wish to use 

var wss = "wss://autumn-sparkling-resonance.bsc.quiknode.pro/2519c42cdc27be9ccf32638d0878ed819cd3cff7/"; 
const web3 = new Web3(wss);
const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"_username","type":"string"},{"indexed":true,"internalType":"uint256","name":"UserID","type":"uint256"},{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"}],"name":"AccountCreated","type":"event"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"address","name":"_sender","type":"address"}],"name":"addFriend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_usernames","type":"string"},{"internalType":"address","name":"newUser","type":"address"}],"name":"createAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"delChatActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountInfo","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getActiveChat","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"friend","type":"address"},{"internalType":"address","name":"friend2","type":"address"}],"name":"getChatCode","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getFriends","outputs":[{"components":[{"internalType":"address","name":"friend","type":"address"}],"internalType":"struct Messenger.friends[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"friend_key","type":"bytes32"}],"name":"readMessage","outputs":[{"components":[{"internalType":"address","name":"reciever","type":"address"},{"internalType":"string","name":"_message","type":"string"}],"internalType":"struct Messenger.message[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"string","name":"_msg","type":"string"}],"name":"sendMessage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"setChatActive","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var contractAddress = "0x7aaD3D05c3095885a4585223081bE7237e97e4d8"; 
var myContract = new web3.eth.Contract(abi, contractAddress);
const networkId = web3.eth.net.getId();

//for node to call function and send wei to the block chain it will require you to use your own wallet and wei to handle these transactions
// multiple wallets allows for synchronous transactions without altering gas prices

const secretKey = "8b299edbf9bffbc1833facc6a598d685ff485911e167d9bcb6e769e6db5a02c8" 
const secretKeyTwo = "eca8312c14ba98f3b44ebf62faf74bed1d6697eda71f8d8b1e1009c184a66fcb"
const address = "0x7831E194F6DF6f55f1aE56e6EDcbEE64E9e9F720"
const addressTwo = "0xB00FFfD7F4aD21AC72b306B892e43f34466dF9Ce"


//------------------------------------------------------------------------->Create Server<-------------------------------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', router);  
//now we create the express server
const server = http.createServer(app); 
// we launch the server
server.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
});

//------------------------------------------------------------------------> Server Rendering < -----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------> ENUMS <------------------------------------------------------------------------------------------------------

// enum currentState {
//     pending,
//     received,
//     reverted,
//     failed,
// }
//------------------------------------------------------------------------->Call Functions<-------------------------------------------------------------------------------------------------

app.get('/api/allUser', (_req, res) => {
    res.send('hello')
})
app.post('/api/allUsers', async (_req, res) => {
    let allUsers;
    await myContract.methods.getAllUsers().call((_err, response) => {
        allUsers = response
    })
    res.send({allUsers : allUsers});
});

app.post('/api/userInfo', async (req, res) => {
    try {
        let userInfo: Array<string>;
        await myContract.methods.getAccountInfo(req.body.sender).call((_err, response) => {
            userInfo = response
        })
        res.send({ userInfo: userInfo })
    } catch (err) {
        res.send(err);
    }
})

// app.post('/friendCode', async (req, res) => {
//     console.log('fetching friend code', req.body)
//     let sender = req.body.sender;
//     let receiver = req.body.receiver;
//     let friendCode
//     try{

//                 await myContract.methods.getChatCode(sender, receiver).call((req, res) => {
//                     friendCode = res;
//                 })
//                 res.send({ friendCode: friendCode })
//     }
//     catch(err){console.log(err)}
// })
 
// app.post('/friendList', async (req, res) => {
//     console.log('fetching friends', req.body)
//     let sender = req.body.sender
//     let friends;
//     if (sender === undefined) { console.log('invalid senderAddress@/friendList',) } 
//     else if (sender === '') { console.log('invalid senderAddress@/friendList',) }
//     else {
//         try { await myContract.methods.getFriends(sender).call((req, res) => {
//                 friends = res;
//             })
//             res.send({ friendList: friends })
//         }catch (err) { console.log(err) }
//     };
// })

// app.post('/MessageHistory', async (req, res) => {
//     console.log('loading message history', req.body)
//     let friendCode = req.body.friendCode
//     let receivedMessages;
//     if (req.body.friendCode === undefined) { return console.log('invalid friendCode@MessageHistory') }
//     else if (req.body.friendCode === '') { return console.log('invalid friendCode@MessageHistory') }
//     else {
//         await myContract.methods.readMessage(friendCode).call((err, res) => {
//             receivedMessages = res;
//         })
//         res.send({receivedMessages: receivedMessages})
//     }
// });
// let sender; 
 
app.post('/api/activeChat', async (req, res) => {
    let sender = req.body.sender;
    let activeChat; 
    try {
        await myContract.methods.getActiveChat(sender).call((_err, response) => {
            activeChat = response;
        }).then(
            res.send({ activeChat: activeChat })
        )
    }
    catch (err) {
        console.log(err)
    }
})

// app.all('/MainDapp', (req, res, next) => {
//     console.log('accessing the next secret')
//     next();
// })

// //----------------------------------------------------------------------------------->Send Functions<------------------------------------------------------------------------------------

app.get('/api/createAccount', (_req, res) => {
    res.send('hello world')
})

app.post('/api/createAccount', async (req, res) => {

    const createAccount = async () => {
        try {
            console.log('creating account', req.body)
            const tx = myContract.methods.createAccount(req.body.username, req.body.sender);
            let gas = await tx.estimateGas({ from: address });
            let gasPrice = await web3.eth.getGasPrice();
            let data = tx.encodeABI();
            let nonce = await web3.eth.getTransactionCount(address)

            let signedTx = await web3.eth.accounts.signTransaction({
                to: contractAddress,
                data: data,
                gas: gas,
                gasPrice: gasPrice,
                nonce: nonce,
                chainId: networkId,
            }, secretKey,
            )
            let receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
            console.log(`transaction hash: ${receipt.transactionHash}`)
            res.send({ txnHash: `transaction hash: ${receipt.transactionHash}` })
        }
        catch (err) {
            let _err: string;
            if (err.data === null) {
                _err = 'no gas';
            }
            else if (err.data === '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b5573657220697320616c72656164792072656769737465726564210000000000') {
                _err ='account exists';
            }
            res.send({ _err: _err });
            console.log(_err)
        }
    };
    createAccount()
})
 
app.post('/addFriend', async (req, res) => {
    console.log('adding friend', req.body)
    try {
        console.log('adding friend', req.body)
        let receiver = req.body.receiver;
        let sender = req.body.sender;
        const tx = myContract.methods.addFriend(receiver, sender);
        let gas = await tx.estimateGas({ from: address });
        let gasPrice = await web3.eth.getGasPrice();
        let data = tx.encodeABI();
        let nonce = await web3.eth.getTransactionCount(address)
        
        let signedTx = await web3.eth.accounts.signTransaction({
            to: contractAddress,
            data: data,
            gas: gas,
            gasPrice: gasPrice,
            nonce: nonce,
            chainId: networkId,
        }, secretKey,
        )
        let receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        console.log(`transaction hash: ${receipt.transactionHash}`)
        res.send({ txnHash: `transaction hash: ${receipt.transactionHash}` });
    }
    catch (err) {
        console.log(err)
    }
});

app.post('/api/setActive', async (req, res) => {
    try {
        let tx = myContract.methods.setChatActive(req.body.sender, req.body.receiver);
        let gas = await tx.estimateGas({ from: address });
        let gasPrice = await web3.eth.getGasPrice();
        let data = tx.encodeABI();
        let nonce = await web3.eth.getTransactionCount(address)

        let signedTx = await web3.eth.accounts.signTransaction({
            to: contractAddress,
            data: data,
            gas: gas,
            gasPrice: gasPrice,
            nonce: nonce,
            chainId: networkId,
        }, secretKey,
        )
        let receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        console.log(`transaction hash: ${receipt.transactionHash}`)
        res.send({ txnHash: `transaction hash: ${receipt.transactionHash}` })
    }
    catch (err) {
        console.log('failed to set active: ', err)
    };
});

// app.post('/sendMessage', async (req, res) => {
//     console.log('sending message', req.body)
//     let sender = req.body.sender
//     let receiver = req.body.receiver
//     let message = req.body.message
//     if (sender === undefined) { console.log('invalid senderAddress@/sendMessage') }
//     else if (sender === '') { console.log('invalid senderAddress@/sendMessage') }
//     if (receiver === undefined) { console.log('invalid receiverAddress@/sendMessage') }
//     else if (receiver === '') { console.log('invalid receiverAddress@/sendMessage') }
//     else {
//         let tx = myContract.methods.sendMessage(sender, receiver, message)
//         let gas = await tx.estimateGas({ from: address });
//         let gasPrice = await web3.eth.getGasPrice();
//         let data = tx.encodeABI();
//         let nonce = await web3.eth.getTransactionCount(address)

//         let signedTx = await web3.eth.accounts.signTransaction({
//             to: contractAddress,
//             data: data,
//             gas: gas,
//             gasPrice: gasPrice,
//             nonce: nonce,
//             chainId: networkId,
//         }, secretKey,
//         )
//         let receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
//         console.log(`transaction hash: ${receipt.transactionHash}`)
//         res.send({ txnHash: `transaction hash: ${receipt.transactionHash}`})
//     }
// })


//--------------------------------------------------------------------------------------->ROUTING<------------------------------------------------------------------------------------
// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
//   }

// var router = express.Router([options])

// router.use((req, res, next) => {
//     next()
// })

// router.use('/mainapp', router)

