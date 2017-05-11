import { MongoClient } from 'mongodb'
let db;
async function createDB() {
	try {
		if (db) {
			return db;
		} else {
			db = await MongoClient.connect(process.env.MONGOURL || 'mongodb://localhost:27017/cart');
			return db;
		}
	} catch (err) {
		return err;
	}
}
export async function getDB() {
	return await createDB();
}