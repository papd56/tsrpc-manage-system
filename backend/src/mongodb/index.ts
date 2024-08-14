import { Db, MongoClient } from 'mongodb';

export class Global {
    static db: Db;

    static async initDb() {
        const uri = 'mongodb://38.12.36.5:27017/mongodb?authSource=admin';
        const client = await new MongoClient(uri).connect();
        this.db = client.db();
    }
}
