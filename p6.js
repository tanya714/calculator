// js code to display even numbers between a to b.
function even(n) {
    let an = [];
    var number = n.split(' ');
    let a = eval(number[0]);
    let b = eval(number[1]);
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            an.push(i);
        }
    }
    return an;
}