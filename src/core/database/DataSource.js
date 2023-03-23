import {MongoClient} from 'mongodb';
import pg from 'pg';

export const Provider ={
    MONGODB: "MONGODB",
    POSTGRESQL: "POSTGRESQL"
}

export class DataSource{
    constructor(provider, url)
    {
        const prov = provider;
        const databaseUrl = url;       
    }

    connectDatabase() {
        
        switch (this.prov){
            case Provider.MONGODB:
                this.connectMongo(this.databaseUrl)
                break;
            case Provider.POSTGRESQL:
                this.connectPostgresql(this.databaseUrl)
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