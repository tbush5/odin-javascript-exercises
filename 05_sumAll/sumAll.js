const sumAll = function(start, stop) {
    if (stop < start){
        let temp = start;
        start = stop;
        stop = temp;
    }
    if (start < 0 || typeof(start) != "number" || typeof(stop) != "number"){
        return "ERROR";
    }
    let ans = 0;
    for (let i=start; i <= stop; i++){
        ans += i
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
