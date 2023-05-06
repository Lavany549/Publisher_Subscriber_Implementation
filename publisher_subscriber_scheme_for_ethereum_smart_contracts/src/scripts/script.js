
var eventID1 = 1;
var eventID2 = 2;


const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const crypto = require('crypto');

function computeHash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}
// const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'comfort fork vague legend this popular good behave donkey fever swim wing',
  'http://127.0.0.1:7545'
  // remember to change this to your own endpoint!
);

const web3 = new Web3(provider);
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_topicID",
				"type": "uint256"
			}
		],
		"name": "deleteTopic",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pubid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_topicid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_eventid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hash",
				"type": "string"
			}
		],
		"name": "publishData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userID",
				"type": "uint256"
			}
		],
		"name": "registerPerson",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_topicID",
				"type": "uint256"
			}
		],
		"name": "registerTopic",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_pub",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_topicid",
				"type": "uint256"
			}
		],
		"name": "removeSubs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_pub",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_topicid",
				"type": "uint256"
			}
		],
		"name": "subscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PersonDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pubData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "eventID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hash",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pubid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_topicid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_eventid",
				"type": "uint256"
			}
		],
		"name": "retHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "subData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "topicRegList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0xf0fC0B65D9399E5e1525d7c9E777C422E2Ff902e"; // write the deployed address here

const _addr = "0x1585e70d1e6B43B35AFD15c4811838591B172d01";
const pubsub = new web3.eth.Contract(abi, address);
function getstr() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}



async function fn(){
	
		const promises = [];
   	     for(var i = 0; i < 200; i+=1){

            data = {};

            data["topicid"] = 1;
            data["data"] = getstr();
            data["userid"] = i + 8;

            promises.push(
                fetch("http://localhost:4000/publishdata", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            );
			
			promises.push(pubsub.methods.publishData(data["userid"], data["topicid"], eventID1, computeHash(data["data"])).send({ from: _addr, gas: 1000000 }));
 
            data = {};

            data["topicid"] = 2;
            data["data"] = getstr();
            data["userid"] = i + 8;

            promises.push(
                fetch("http://localhost:4000/publishdata", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            );

              
            // console.log(eventID);

			promises.push(pubsub.methods.publishData(data["userid"], data["topicid"], eventID2, computeHash(data["data"])).send({ from: _addr, gas: 1000000 }));
			///  


            }
        
    
	var s = new Date();
    await Promise.all(promises)
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(data => console.log(data))
            .catch(error => console.log(error));
	var e = new Date();
	console.log("TIME TAKEN IS ", (e - s) / 1000, " SECONDS");

}

fn();