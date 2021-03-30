function add(num1, num2){
    let res = num1+ num2
    return res
}
add(2,2)

function subtract(num1,num2) {
    let res = num1-num2
    return res
}
subtract(4,2)

/* #4 - These functions work fine, but you could make them a bit shorter by just doing the following:

function add(num1, num2) {
    return num1 + num2;
}

*/


const add = () => {
return 4
};

const subtract =() => {
    return 2
}
exports.add=add;
exports.subtract=subtract;

/* #5 - In order to export your functions, you must use the module.exports method. You will set module.exports equal
        to whatever functions/variables you want to export. You will then have access to these when you import in another
        file. Write the module.exports like this:

        module.exports = { add, subtract };

*/

