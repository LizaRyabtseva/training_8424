let reg1=/ca(t|r)/;
console.log(reg1.exec("cag and car"));

let reg2=/pr?op\b/;
console.log(reg2.exec("pop and prop"));

let reg3=/ferr[eya](\b|t|ri)/;
console.log(reg3.exec("ferret, ferry and ferrari"));

let reg4=/\w+ious/;
console.log(reg4.exec("jaious, laious, taious"));

let reg5=/\s[.,:;]/;
console.log(reg5.exec(" . , : ;"));

let reg6=/(\w){7,}/;
console.log(reg6.exec("q qw qwe qwer qwerty qwertq qwertyqw qwertyqwe"));

let reg7=/\b[^e\s]+\b/i;
console.log(reg7.exec("Lizaveta Liza Elizaveta"));