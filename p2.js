function addany(n) {
    let sum = 0;
    var num = n.split(' ');
    let a = eval(num[0]);
    let b = eval(num[1]);
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}