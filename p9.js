// js program to display numbers between a and bnot divisible by 3
function notdiv3(n) {
    let ans = [];
    var num = n.split(' ');
    let a = eval(num[0]);
    let b = eval(num[1]);
    for (let i = a; i <= b; i++) {
        if (i % 3 != 0) {
            ans.push(i);
        }
    }
    return ans;
}