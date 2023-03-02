// Task #4
/* отримати 2 числових значення якщо перше більше 20 а друге більше 30 то вивстести true,
 якщо одна з умов не відповідає вивсести false*/

let x = prompt('Яким буде перше число?', 40);
alert('User say:' + x);


let y = prompt('Яким буде друге число?', 55);
alert('User say:' + y);

x = parseInt(x);
console.log(x);

y = parseInt(y);
console.log(y);

let b = x > 20 && y > 30;
console.log(b);


