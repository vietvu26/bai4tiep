function leapYears(year) {
  if (year <=0 ) return;
  if (year%4==0){
    return true;
  }else{
    return false;
  }
}
console.log(leapYears(1999));
