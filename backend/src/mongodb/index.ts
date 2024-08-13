import { Db, MongoClient } from 'mongodb';

export class Global {
    static db: Db;

    static async initDb() {
        const uri = 'mongodb://47.76.223.250:27017/test?authSource=admin';
        const client = await new MongoClient(uri).connect();
        this.db = client.db();
    }
}
