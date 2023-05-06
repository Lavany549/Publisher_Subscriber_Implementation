const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const provider = new HDWalletProvider(
  'comfort fork vague legend this popular good behave donkey fever swim wing',
  'http://127.0.0.1:7545'
  // remember to change this to your own endpoint!
);

const crypto = require('crypto');

function computeHash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}

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



  const fs = require('fs');

 async  function fn(){
      const promises = [];
  
      for(var i = 9; i < 208; i+=1){
  
          data = {};
  
          data["topicid"] = 1;
          data["pubid"] = i-1;
          data["userid"] = i;
  
          promises.push(
            fetch("http://localhost:4000/getpublisheddata", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
          );
  
          
      }

      promises.push(
        fetch("http://localhost:4000/getpublisheddata", {
            method: "POST",
            body: JSON.stringify({"topicid" : 1, "pubid" : 207, "userid" : 8}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
      );

      for(var i = 8; i < 208; i+=1){
        data = {};
            
          data["topicid"] = 2;
          data["pubid"] = i
          data["userid"] = i;
  
          promises.push(
              fetch("http://localhost:4000/getpublisheddata", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json',
              },
           })
          );
      }
 /*     fs.writeFile('subscribedData.json', data, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
    }
  })
*/
      var s = new Date();
      await Promise.all(promises)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(async (data) => {
        data1 = [];
        for(var i = 0; i < data.length; i+=1){
          for(var j = 0; j < data[i].length; j += 1){
            if(data[i][j]["eventID"] != -1){
              console.log(data[i][j]);
              var _pubid = data[i][j]["userID"];
              var _topicid = data[i][j]["topicID"];
              var eventID = data[i][j]["eventID"];
              
              
              await pubsub.methods.retHash(_pubid, _topicid, eventID).call().then((res) => {
                var hash = computeHash(data[i][j]["data"]);
                
                if (hash == res) {
                    data1.push(data[i][j]);
                }
                else {
                  console.log(_pubid);
                   console.log(_topicid);
                  console.log(eventID);
                    console.log("HASH MISMATCH");
                    console.log(hash);
                    console.log(res);
                }
              }).catch((err) => {
                  console.error(err);
              });
            }
          }
        }
        fs.writeFile('subscribedData.json', JSON.stringify(data1), 'utf8', (err) => {
            if (err) {
              console.error(err);
              return;
        }
      })})
        
      .catch(error => console.log(error));
	var e = new Date();
	console.log("TIME TAKEN IS ", (e - s) / 1000, " SECONDS");
  }
  
  fn();