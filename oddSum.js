const a = ["sanu", "sunny", "ankit", "anand","anjali", "monu"];

//const withA = a.filter(n=>n[0]==="a" || n[n.length-1]==="a");
//console.log(withA)
const snakeCase = a.reduce((total,n)=> total+n+"_","");
console.log(snakeCase)