// sum of digits of a number
function sod(n) {
    let number = eval(n);
    var num = parseInt(number);
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        if (rem < 1) {
            num = 0;
            rem = 0;
        }
        sum += rem;
        num = num / 10;
        num = Math.floor(num);
    }
    return sum;
}