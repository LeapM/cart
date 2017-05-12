import assert from 'assert';
import { getDB } from '../src/dal';

describe('DB Connection', () => {
	it('should return db', (done) => {
		getDB().then((db) => {
			done(assert(db.databaseName==='carttest'));
		}).catch((err) => {
			done(err);
		})
	});
});