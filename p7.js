//js function to displayodd numbers between a nad b
function odd(n) {
    let ans = [];
    var numbers = n.split(' ');
    let a = eval(numbers[0]);
    let b = eval(numbers[1]);
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            ans.push(i);
        }
    }
    return ans;
}