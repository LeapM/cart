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