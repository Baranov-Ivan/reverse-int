module.exports = function reverse (n) {
    let arrInt = n.toString().split('').reverse();
    let badChars = 0;
    for(let i = 0; i < arrInt.length; i++) {
        if(arrInt[i] === '0') {
            badChars++;
        } else {
            break;
        }
    }

    arrInt.splice(0,badChars);
    return parseInt(arrInt.join(''),10);
}
