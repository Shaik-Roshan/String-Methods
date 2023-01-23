let str1 ='alphabet';
let str2 ='Ges@$';
let str3 ='i\u0307'
console.log(str1.toLocaleUpperCase());//ALPHABET
console.log(str2.toLocaleUpperCase());//GES@$
console.log(str3.toLocaleUpperCase());//i

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
console.log(str3.toLocaleUpperCase(locales));//I
