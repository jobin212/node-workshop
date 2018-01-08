var jokeHandler = require('./jokeHandler');
var utils = require('./utils');

var flags = require('flags');
flags.defineString('jokeType', 'knockknock', 'Knock knock joke');
flags.defineBoolean('uppercase', false, '');
flags.defineBoolean('quotes', false, '');
flags.defineInteger('x', 1, '');
flags.parse();

var joke = '';
if (flags.get('jokeType') == 'knockknock') {
    joke = jokeHandler.createKnockKnock();
} else if (flags.get('jokeType') == 'oneLinerJoke') {
    joke = jokeHandler.createOneLiner();
} else {
    joke = jokeHandler.createKnockKnock();
}

if (flags.get('uppercase')) {
   joke = utils.upper(joke);
}

if (flags.get('quotes')) {
    joke = utils.quote(joke);
}

joke = utils.repeat(joke, flags.get('x'));
console.log(joke);



