const Validate=(event)=>{
    let error = 0;
    // picking input fields with their names
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let email = document.register.emailinput
    let phone = document.register.phoneinput
    let national = document.register.niniput
    let car = document.register.carType
    let model = document.register.modelinput
    let color = document.register.colorinput
    let number = document.register.numberplate
    let dayParking = document.register.dayparkingoption
    let nightParking = document.register.nightparkingoption
    let lessThan = document.register.lessthan3
    let Date = document.register.date
    let Time = document.register.time

    // picking error fields
    let errorFirstName = document.getElementById("fnameError")
    let errorLastName = document.getElementById("lnameError")
    let errorEmail = document.getElementById("emailError")
    let errorPhone = document.getElementById("phoneError")
    let errorNatinoal = document.getElementById("ninError")
    let errorCar = document.getElementById("carError")
    let errorModel = document.getElementById("modelError")
    let errorColor = document.getElementById("colorError")
    let errorNumber = document.getElementById("numberplateError")
    let errorDay = document.getElementById("dayError")
    let errorNight = document.getElementById("nightError")
    let errorLess = document.getElementById("lessthanError")
    let errorDate = document.getElementById("dateError")
    let errorTime = document.getElementById("timeError")


    // validating first name input
    // validating for emptyness
    if(firstName.value == ""){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "first name is required";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        error++;
    }else if(firstName.value.length < 2){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "first name should be atleast 2 characters";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        error++;

    }else if(firstName.value.length > 15){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "should be atleast 2 characters";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        error++
    }else{
        firstName.style.border = "1px solid green";
        lastName.focus();
        
    }

    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "first name is required";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        error++;
    }else if(lastName.value.length < 2){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "should be atleast 2 characters";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        error++;

    }else if(lastName.value.length > 15){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "first name should be atleast 2 characters";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        error++;
    }else{
        lastName.style.border = "1px solid green";
        email.focus();
        
    }

    // // validating first email input
    // // validating for emptyness
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(email.value == ""){
        email.style.border = "1px solid red";
        errorEmail.textContent = "email is required";
        errorEmail.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        email.focus();
        error++;
    }else if(!EmailRegex.test(email.value)){
        email.style.border = "1px solid red";
        errorEmail.textContent = "wrong email type";
        errorEmail.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        email.focus();
        error++;
        
    }else{
        email.style.border = "1px solid green";
        national.focus()
    }

   // validating nin input
   // validating for emptyness


    const nationalRegex = /^CF([a-zA-Z0-9]{12})+$/
    const nationalRegex2 = /^CM([a-zA-Z0-9]{12})+$/

    if(national.value == ""){
        national.style.border = "1px solid red";
        errorNatinoal.textContent = "nin is required";
        errorNatinoal.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        national.focus();
        error++;
    }else if(!(nationalRegex.test(national.value) || nationalRegex2.test(national.value))){
        national.style.border = "1px solid red";
        errorNatinoal.textContent = "right nin type CM/CFXXXXXXXX";
        errorNatinoal.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        national.focus();
        error++;
    }else{
        national.style.border = "1px solid green";
        national.textContent = "";
        
    }

        // validating phone emptiness 
        const phoneRegex = /^(\+256|0)[\d]{9}$/

        if(phone.value == ""){
            phone.style.border = "1px solid red";
            errorPhone.textContent = "phone is required";
            errorPhone.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
            phone.focus();
            error++;
        }else if(!(phoneRegex.test(phone.value) || phoneRegex.test(phone.value))){
            phone.style.border = "1px solid red";
            errorPhone.textContent = "right phone '+256/07..";
            errorPhone.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
            phone.focus();
            error++;  
        }else{
            phone.style.border = "1px solid green";
        }

    // validating car type emptiness 
    if(car.value == ""){
        firstName.style.border = "1px solid red";
        errorCar.textContent = "first name is required";
        errorCar.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        car.focus();
        error++;
    }else{
        car.style.border = "1px solid green";
    }
    
    // validating model input
    if(model.value == ""){
        model.style.border = "1px solid red";
        errorModel.textContent = "model is required";
        errorModel.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        model.focus();
        error++;
    }else{
        model.style.border = "1px solid green";
    }

    // validating color input
    if(color.value == ""){
        color.style.border = "1px solid red";
        errorColor.textContent = "color is required";
        errorColor.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        color.focus();
        error++;
    }else{
        color.style.border = "1px solid green";
    }

    // validating number plate input
    if(number.value == ""){
        number.style.border = "1px solid red";
        errorNumber.textContent = "number plate is required";
        errorNumber.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        number.focus();
        error++;
    }else{
        number.style.border = "1px solid green";
    }

    


   
    if(error > 0){
        event.preventDefault();
    }else{
        window.location.href = "../newhome.html"
    
    }



// // generaating unique nnumber 
//  const tokenRegex = /^BB-([0-9]{3})+$/
// // eg BB-200 

// if(!(car.value.test(tokenRegex) || car.value.test())){
    

}




   
    

