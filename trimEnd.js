//trimEnd
// this string method will remove the space at the end 

var school='     Bhashyam  ';

console.log(school);//'      Bhashyam  '

console.log(school.length);//15

school=school.trimEnd();
console.log(school.length);//13
console.log(school)//'     Bhashyam'
