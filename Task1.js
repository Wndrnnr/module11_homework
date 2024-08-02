let arr = [10, 11, 12, 15, 18, 21, 2, null, "cringe"];
let odd = 0
let even = 0
let zero = 0

function checkElemsParity(){
for (let i = 0; i < arr.length; i++) {
 
  if(typeof arr[i] === "number"){
    if(arr[i] % 2 === 0){
      even = even + 1;
    }
  if(arr[i] % 2 !== 0){
      odd = odd + 1;
    }
  if(arr[i] === 0){
      zero = zero + 1;
    }
  }
  else{
    console.log(`Не число: ${arr[i]}`)
  }

}
console.log(`Нечетных ${odd}`)
console.log(`Четных ${even}`)
console.log(`Нулей ${zero}`)
}
checkElemsParity();