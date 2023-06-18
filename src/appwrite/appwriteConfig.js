import {Client, Account, Databases,} from 'appwrite';

const client = new Client(); //client as a new objects

client.setEndpoint("http://64.227.153.6:7000/v1") //your API endpoint
.setProject("6475c3abca3f0cadc365") //your project ID
;


export const account = new Account(client) //your accounts

//Database
export const databases = new Databases(client, "647c282a00d84e9163f4")
