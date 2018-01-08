function upper(str) {
    return str.toUpperCase();
}

function quote(str) {
    return "\"" + str + "\"";
}

function repeat(str, int) {
    var fullString = '';
    for (i = 0; i < int; i++) {
        fullString = fullString + str;
    }
    return fullString;
}

module.exports.upper = upper;
module.exports.quote = quote;
module.exports.repeat = repeat;