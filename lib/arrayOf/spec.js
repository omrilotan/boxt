const { expect } = require('chai');
const arrayOf = require('.');

describe('arrayOf', () => {
	it('Should create a array', () => {
		expect(arrayOf('X', 3)).to.deep.equal('XXX');
	});
});
