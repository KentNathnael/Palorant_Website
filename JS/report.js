let form = document.getElementById("form_report")
let username = document.getElementById("inputUser");
let email = document.getElementById("inputEmail");
let description = document.getElementById("inputDesc");
let server = document.getElementById("selectServer");

let valid = false;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    valid = validateInput();

    if(valid){
        alert("Form submitted successfully");
        form.reset();
    }
    
})

function validateInput(){
    let username_t = false;
    let email_t = false;
    let server_t = false;
    let description_t = false;
    
    if(username.value == ""){
        alert("Please fill all the fields");
        return;
    }
    else if(username.value.length < 3){
        alert("Username must be at least 3 characters long");
        return;
    }
    else username_t = true;

    if(email.value == ""){
        alert("Please fill all the fields");
        return;
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must be ended with @gmail.com");
        return;
    } 
    else email_t = true;

    
    if(server.value == ""){
        alert("Please select a server");
        return;
    }
    else server_t = true;
    
    if(description.value == ""){
        alert("Please fill all the fields");
        return;
    }
    else description_t = true; 

    return username_t && email_t && description_t && server_t;
}