const { bold, green } = require('chalk');
const boxed = require('./');

const log = (...args) => console.log(boxed(...args)); // eslint-disable-line no-console

log('');

log('Celebrate what you want to see more of');

log('Sometimes too much to drink is barely enough', { theme: 'double', color: 'bgBlue' });

log(`I have a dream
that my four little children
will one day live in a nation
where they will not be judged
by the color of their skin,
but by the content of their character.
I have a dream today!`, { color: 'green', padding: 5, theme: 'round' });

log([
	'multiline',
	'sentences',
	'should be aligned',
	'neatly',
].join('\n'));

log('I have a title', { title: bold('I am the title') });

log('peep', { title: bold('My title is considerably longer than the body') });

log(`I am aligned to the left
see?`, { align: 'left' });

log(`I, however,
am aligned to the right.`, { align: 'end' });
log([ 'My white spaces counts!                    ',
     'I can move blocks of text from side to side.', // eslint-disable-line indent
     '                   and I control it manually', // eslint-disable-line indent
     '                                    😀      ', // eslint-disable-line indent
].join('\n'));

const $ = green('✓');

log(`Common 😜  emojis ${green.bold.underline('and decorated text')}
are supported 🍺  ⚽️  and celebrated 🎉
${bold('We also support')}:
 ${$} left, right, and center alignment
 ${$} custom padding
 ${$} border colors and themes`, { theme: 'round', color: 'cyan', align: 'left' });

log(`some comopund emojis still need work
👨‍👧‍👦
👨‍👨‍👦‍👦
🇧🇷
🙌🏾`);

log('~Margaret Mead', { title: '"You are absolutely unique. Just like everyone else."', minWidth: 'full' });
log('<:3)~', { minWidth: 100 });
log('<:3)~', { minWidth: null });
