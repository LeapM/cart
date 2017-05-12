    import { getDB } from './index'
    import { logErr, logDebug } from '../utility'
    export async function getProductById(id) {
    	try {
    		const db = await getDB();
    		const data = await db.products.findOne({ _id: id });
    		return data;
    	} catch (err) {
    		logErr(err);
    	}
    }
    export async function getOneProduct(query,option) {
    	try {
    		const db = await getDB();
    		const data = await db.products.findOne(query,option);
    		return data;
    	} catch (err) {
    		logErr(err);
    	}
    }
    export async function getProduct(query,option) {
    	try {
    		const db = await getDB();
    		const data = await db.products.find(query,option);
    		return data;
    	} catch (err) {
    		logErr(err);
    	}
    }
    export async function createProduct(data) {
    	try {
    		const db = await getDB();
    		const data = await db.products.insert(data);
    		return data;
    	} catch (err) {
    		logErr(err);
    	}
    }