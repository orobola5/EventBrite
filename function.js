function onboardStudent(studentObj,emailStudent){
    if(studentObj?.firstName!==""){
        console.log(`welcome to semicolon ${studentObj.firstName}`);
        setTimeout(() =>emailStudent(studentObj),3000)

        console.log(`${studentObj.firstName},check your email in the next 1 min for further instructions`)
    }else{
        return
    }
    
}


let newStudent ={firstName:"mufasa",Number:"+2348099998888"}
onboardStudent(newStudent,(student) =>{
    console.log(`Email by semicolon to ${student.firstName} with phonenumber ${student.Number}`)
})

function dialNumber(countryCode,number) {
    console.log(`${countryCode} ${number}`)
   
}

function dialCustomer(customer,caller){
    if(customer.nationality==="nigeria"){
        caller("+234",customer.phoneNumber)
    }else{
                setTimeout(()=>caller("+233",customer.phoneNumber),3000)
    }

}
let customer={nationality:"nigeria",phoneNumber:"8099988888"}
dialCustomer(customer,dialNumber)

