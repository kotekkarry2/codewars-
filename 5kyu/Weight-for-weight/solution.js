function orderWeight(strng) {
  const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
   function comp(a,b){
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
  return strng.split(' ').sort(comp).join(' ');
 }
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))