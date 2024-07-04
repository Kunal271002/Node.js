function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
// For Multiple Imports
module.exports = {  
    addFun : add,
    subFun : sub
};
//  Another way to Import using arrow Function

exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;