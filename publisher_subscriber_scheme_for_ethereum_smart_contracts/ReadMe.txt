
*********************************Pre-Requisites**************************************
1.install mongodb from the link https://www.mongodb.com/try/download/community
2.Install ganache
	Create a new workspace
	Keep it aside for no... dont close it

3.Install metamask extension in chrome.
	Create an account
	Enter inside
	Enable test network from settings 
	Add a new network
	Add a network manually
	network name : ganache_local_network
	new rpc url : http://127.0.0.1:7545
	chain id : 1337
	currency symbol : GAN 
	click save
	switch to ganache network

4.Import accounts into metamask
	click the circle above
	import account
	go to the ganache app
	click on the key symbol on the right
	copy the private key
	paste it in metamask
    repeat the steps if u want to add more accounts
	If facing issues please follow the link: https://www.youtube.com/watch?v=lv4HEyiw4EQ&t=149s&pp=ygUWYWRkIGdhbmNoZSBpbiBtZXRhbWFzaw%3D%3D

5.deploy contract
	go to remix site
	in the src code file, go to src/contracts/pubsub.sol
	copy paste the code in remix (https://remix.ethereum.org/)
	save it,... compile it
	before deployment change environment to injected provider - Ganache Provider and change Ganache JSON-RPC Endpoint: http://127.0.0.1:7545
	deploy it

/***************************************************************************************************************/
VERY IMPORTANT NOTES...

For the 1st time you are running with a new account added in the metamask, you will be prompted to 
add/link the account included in metamask to the local file... select all the accounts... otherwise u cant use em
every time you run a solidity code from react js side... you will have to approve the contract... metamask will
automatically pop up.
/***************************************************************************************************************/

6.Install Node.js and NPM (Node Package Manager) on your computer, if you haven't already done so.Open your terminal or command prompt and run the following command to install the create-react-app tool globally:
	npm install -g create-react-app
Once the installation is complete, navigate to the directory where you want to create your new React app.
Run the following command to create a new React app:
	create-react-app publisher_subscriber_scheme_for_ethereum_smart_contracts	
	note: npm naming restrictions name can no longer contain capital letters
	
7.cd publisher_subscriber_scheme_for_ethereum_smart_contracts

8.Download the file from the location 
https://github.com/Lavany549/Publisher_Subscriber_Implementation/blob/main/publisher_subscriber_scheme_for_ethereum_smart_contracts.zip 
extract and replace src folder and package.json file.

9.npm install

10.in the code files...
    go to the compile page of remix (https://remix.ethereum.org/)
    copy the ABI code of the pubsub.sol file... there is a button in the last of the compile tab
    paste it in the abi variable in the pubsub.js file in src/contracts
    after deploying it, copy the deployment address and paste it in the addr variable in the pubsub.js file in src/contracts
    save all.
11.open 3 different terminals in current location
	terminal_1: cd .\src\DB\
		    mongod --dbpath ./
	terminal_2: nodemon .\src\backend\back.js
	terminal_3: npm start

YOU ARE GOOD TO GO
