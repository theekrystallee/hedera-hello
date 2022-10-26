// this import configures dotenv to gain access to 
// your account information stored in your `.env` file
require("dotenv").config();
const {
    Client,
    TopicCreateTransaction,
    TopicMessageSubmitTransaction,
  } = require("@hashgraph/sdk");

async function main() {
    // create a client for the Hedera network
    const client = Client.forTestnet();
    // get the account ID and private key from the environment
    const accountId = process.env.ACCOUNT_ID;
    const privateKey = process.env.PRIVATE_KEY;
    // set the operator account ID and private key
    client.setOperator(accountId, privateKey);
    
    const transactionId = await new TopicCreateTransaction();
        // .execute(client);
    const txResponse = await transactionId.execute(client);
    const transactionReceipt = await txResponse.getReceipt(client);
    // const receipt = await transactionId.getReceipt(client);
    const newTopicId =  transactionReceipt.topicId;
    console.log("The new topic ID is " + newTopicId);

    await sleep(2000);
    console.log("Done");

    for(var i = 0; i < 5; i++) {
        const hcsMessage = await new TopicMessageSubmitTransaction()
        .setTopicId(newTopicId)
        .setMessage("Hello, world!")
        .execute(client);
        
        // const hcsMessageReceipt = hcsMessage.getReceipt(client);
        console.log(`Message ${i}: ${hcsMessage.toString()}`);
        }   

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
main();
