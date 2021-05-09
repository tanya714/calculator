//js program to display the reverse of a given number
function reverse(n) {
    let number = eval(n);
    let num = parseInt(number);
    let no = parseInt(number);
    let count = 0;
    while (num != 0) {
        let rem = num % 10;
        count++;
        num = num / 10;
        num = Math.floor(num);
    }
    var ans = "";
    for (let i = 0; i < count; i++) {
        let rem = no % 10;
        no = no / 10;
        no = Math.floor(no);
        ans += rem;
    }
    return ans;
}