// Challenge-5 Simple Calculator
function add(a, b) {
    return a + b
}

function sub(a, b) {
    let sub = a - b;
    return sub;
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    let div = a / b;
    div = div.toFixed(2);
    return div
}



export { add, sub, mul, div };