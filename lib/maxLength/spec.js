const { expect } = require('chai');
const maxLength = require('.');

describe('maxLength', () => {
	it('Should find the length of the longest string', () => {
		expect(maxLength('one', 'four', 'seven')).to.equal(5);
	});
	it('Should find the length visible of emojis', () => {
		expect(maxLength('🍺')).to.equal(1);
	});
});
