var knockknock = require('knock-knock-jokes');
knockknock();

var oneLinerJoke = require('one-liner-joke');
//var getRandomJoke = oneLinerJoke.getRandomJoke();

function createKnockKnock() {
    return knockknock();
}

function createOneLiner() {
    return oneLinerJoke.getRandomJoke().body;
}

module.exports.createKnockKnock = createKnockKnock;
module.exports.createOneLiner = createOneLiner;
