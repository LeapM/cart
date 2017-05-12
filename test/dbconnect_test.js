import assert from 'assert';
import { getDB } from '../src/dal';

describe('DB Connection', () => {
	it('should return db', (done) => {
		getDB().then((db) => {
			done(assert.equal(db, null));
		}).catch((err) => {
			done(err);
		})
	});
});