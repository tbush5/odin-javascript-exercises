const removeFromArray = function(list, ...args) {
    for (let arg of args){
        let index = list.indexOf(arg);
        while (index != -1) {
            list.splice(index, 1);
            index = list.indexOf(arg);
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
