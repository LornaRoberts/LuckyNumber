 function lucky(num){
if ((num % 6 === 0) && (num % 8 ===0) ){
  console.log("Unlucky!");
}else (num % 6 ===0 || num % 8 === 0)? console.log("Lucky Number"): console.log("Unlucky!");
}
