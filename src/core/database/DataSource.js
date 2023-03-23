import {MongoClient} from 'mongodb';
import pg from 'pg';

export const Provider ={
    MONGODB: "MONGODB",
    POSTGRESQL: "POSTGRESQL"
}

export class DataSource{
    constructor(provider, url)
    {
        this.connectDatabase(provider, url);
    }

    connectDatabase(provider, url) {
        
        switch (provider){
            case Provider.MONGODB:
                this.connectMongo(url)
                break;
            case Provider.POSTGRESQL:
                this.connectPostgresql(url)
                break;
            default:
                throw new Error("No Database to Connect found.")
        }
    }

    async connectMongo(url)
    {
        const client = new MongoClient(url);
        try{
            await client.connect();
            console.log("Succesfully Connected to MongoDB on " + url);
        }
        catch(e)
        {
            console.log("Connection refused with Error: \n" + e);
        }
    }

    async connectPostgresql(url)
    {
        const client = new pg.Client(url);
        try{
            await client.connect();
            console.log("Succesfully Connected to Postgresql on " + url);
        }
        catch(e)
        {
            console.log("Connection refused with Error: \n" + e );
        }
    }
}