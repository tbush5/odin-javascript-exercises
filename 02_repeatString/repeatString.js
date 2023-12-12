const repeatString = function(string, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";
    let repeatedString = "";
    for (let num = 0; num < numOfTimes; num++){
        repeatedString += string;
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
