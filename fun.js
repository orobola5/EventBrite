// //function dat reverse number
function reverseNumber(array){

  for (let index = 0; index <array.length-1; index++) {
         for (let j = 0; j+1< array.length-index; j++) {
             if(array[j]<array[j+1]){
                let temp = array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                }
        }
    }
    console.log(array)
}
  
let myArray =[10,20,30,40,50,60]
console.log (reverseNumber(myArray))

//  //function to find factorial of a number
function factoria(number){
    let numbers = 1;
   for (let count = 1; count <= number; count++) {
       console.log( numbers = numbers * count)
      
    }  
    return numbers;
}
let number=5

console.log(factoria(number))

// // function to check if an input string is palindrome
function palindrome(name){
    let newName = ""
    for (let i = name.length - 1; i >=0; i--) {
        newName += name[i]
    }
    return newName;
    if(newName===name){
        return true;
    }
}

let palin = ["EBUBE"];
console.log(palindrome(palin));




//functtion on primeNumber
function primeNumber(number){
    if(number%2!==0){
    console.log("is a primeNumber")
}else
console.log("is not a prime number")
    
}
console.log(primeNumber(25))

//shuffle an array
let array=[3,2,8,6,0]
let element=Math.floor(Math.random()*5)
console.log(array[element])
//frequent element

function mostFreq(array,n){
    let maxCount=0
    let maxFreq=0
    for (let index = 0; index <n; index++) {
        let count=""
      for(let jindex =0;jindex<n;jindex++){

        if(array[index]==array[j]){
            count++;
        }
      }
        if(count>maxCount){
            maxCount=count;
            maxFreq=array[i]
        }
    }
    return maxFreq;

}
let arr=[3,a,a,f,f,b,3,a,b,4,b,3]
let n=arr.length
console.log(mostFreq(arr,n))

