const { expect } = require('chai');
const { red, yellow } = require('chalk');
const length = require('.');

describe('length', () => {
	it('length of a string', () => {
		expect(length('my length')).to.equal(9);
	});

	Array.from(Object.entries({
		'Pictographs, Punctuation': [ '☀︎', '🁓', '…', '¶' ],
		'Emojis': [ '💩', '❤️' ],
		// 'Compound Emojis': [ '🏃‍♀️', '👩‍❤️‍💋‍👩' ]
		// 'flags': [ '🇧🇷' ],
		// 'modifiers': [ '🙌🏾' ]
	})).forEach(([ name, values ]) => {
		describe(`${name}: ${values.join(', ')}`, () => {
			it('are single characters', () => {
				values.forEach($ => {
					expect(length($)).to.equal(1);
				});
			});

			it('in a sentence', () => {
				values.forEach($ => {
					const result = 'This $ char fits $ in a sentence'.length;
					const decorated = `This ${$} char fits ${$} in a sentence`;

					expect(length(decorated)).to.equal(result);
				});
			});
		});
	});

	it('punctuation symbols', () => {
		const result = 'מה שלומך היום'.length;
		const decorated = 'מָה שְׁלוֹמְךָ הַיּוֹם';

		expect(length(decorated)).to.equal(result);
	});

	it('terminal chalked strings', () => {
		expect(length(red('red'))).to.equal(3);
	});

	it('terminal chalked strings in a sentence', () => {
		const result = 'this text is red and STRONG'.length;
		const decorated = `this text is ${red('red')} and ${yellow.bold.underline('STRONG')}`;

		expect(length(decorated)).to.equal(result);
	});
});
