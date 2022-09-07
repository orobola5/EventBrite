// let userInput={
//     email: "",
//     password:""
// }

// document.getElementById("email").addEventListener("keyup",(e)=>{
//     userInput[e.target.name]=e.target.value
    

// })
// document.getElementById("password").addEventListener("keyup",(e)=>{
//     userInput[e.target.name]=e.target.value
    

// })
// function clickHandler(){
//     // window.location.href = ""
// }

// console.log(document)

const handleInput=(afunction)=>{
    let x=2
    afunction(x)

}

const logAns =(e)=>console.log(e)
handleInput(logAns)
handleInput((e)=>console.log(e))
