let userInput={
    email: "",
    password:""
}

document.getElementById("email").addEventListener("keyup",(e)=>{
    userInput[e.target.name]=e.target.value
    

})
document.getElementById("password").addEventListener("keyup",(e)=>{
    userInput[e.target.name]=e.target.value
    

})
function clickHandler(){
    // window.location.href = ""
}

console.log(document)
