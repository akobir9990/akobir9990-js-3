let str = "abcdefjhigklmnopqrstuvwxyz";

console.log(str.length);
console.log(str.slice(3, 5));
console.log(str.substring(5, 17));
console.log(str.substr(3, 5));
console.log(str.replace("a", 1));
console.log(str.replaceAll("d", 4));

let upstr = str.toUpperCase();
console.log(upstr);
console.log(upstr.toLowerCase());

let str1 = "hello";
let str2 = "world";

let str3 = str1.concat("* *", str2);
console.log(str3);

let trimText = "    hey dude  ";
console.log(trimText.trim());
console.log(trimText.trimStart());
console.log(trimText.trimEnd());

let padText = "0";
let pad = padText.padStart(4, "9");
let padded = padText.padEnd(4, "9");
console.log(pad);
console.log(padded);

console.log(str.charAt(4));
console.log(str.charCodeAt(9));

console.log(str.split());
