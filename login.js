let userInput={
    email: "",
    password:""
}
 console.log(document)

document.getElementById("email").addEventListener("keyup",(e)=>{
    userInput[e.target.name]=e.target.value
    

})
document.getElementById("password").addEventListener("keyup",(e)=>{
    userInput[e.target.name]=e.target.value
    

})
function clickHandler(){
    let{email,password} = userInput  
      let user;
    if(email ===""||password ===""){
        alert("please enter your details")
        return
    }else{
        if(localStorage.getItem("users")){
            let users = JSON.parse(localStorage.getItem("users"))
        
            for(let i=0;i < users.length; i++){
                if(users[i].email===email){
                    user =users[i];
                }
            }
            if(Object.keys(users).length>0){
                if(user.password===password){
                    alert("welcome to norbs event")
                    return
                }else{
                    alert("please enter a correct password")
                    return
                }
            }else{
                alert("please enter a valid email address")
            }
        }else{
            alert("Register a user")
            return
        }
    }

}




// function isLeap(year){
//     if(year%4==0){console.log("leap year")}
//     else(year%100==0);{console.log("is not a leap year")}
//  }
// console.log(isLeap(1968))




