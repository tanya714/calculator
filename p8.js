//js program to display numebrs divisible by 3 between any two numbers a and b
function div3(n) {
    let ans = [];
    var num = n.split(' ');
    let a = eval(num[0]);
    let b = eval(num[1]);
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            ans.push(i);
        }
    }
    return ans;
}