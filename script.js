const errorMessages = {
    required: "Name and password are required",
    invalidNameLength: "Name must be at least 3 symbols long",
    invalidPwdLength: "Password must be at least 8 symbols long",
    somethingWrong: "Something is wrong, pls retry",
    passwordShouldContain: "Password should contain lowercase, uppercase, and numbers"
}

/* Function that creates error message if field doesn't pass validation */
const getNameError = (name) => {
    
    // check that we received string data type from input field
    if (typeof(name) !== "string") {
        // if this condition applies -> return error message
        return errorMessages.somethingWrong;
    }
    // check that the field is not empty
    if (!name.length) {
        // if this condition applies -> return error message
        return errorMessages.required;
    }
    // check that the length of the name is at least 3 letters long
    if (name.length < 3) {
        // if this condition applies -> return error message
        return errorMessages.invalidNameLength;
    }

    // if all is good -> return empty string instead of error message
    // this means that there was no error
    return "";
}


/* Function that creates error message if field doesn't pass validation */
const getPasswordError = (password) => {

    // YOUR CODE HERE
    if (typeof(password) !== "string") {
        return errorMessages.somethingWrong;
    }
    if (!password.length) {
        return errorMessages.required;
    }
    if (password.length < 8) {
        return errorMessages.invalidPwdLength;
    }
    if (/\s/.test(password)) {
        return "Password should NOT contain whitespaces";
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        return errorMessages.passwordShouldContain;
    }
    if (!/[_*@]/.test(password)) {
        return "Password should contain at least one of the following special characters: _ * @";
    }

    // if all is good, return empty string instead of error message
    // this means that there was no error
    return "";
}


/*  This is IIFE - immediately initiated function expression
    When you start your index.html, this function will be executed
    For the purpose of this HW, you will not need to modify this function
    But - it you want to, you can :)
*/ 
(function run() {
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const submitButton = document.getElementById('submit');
    const clearButton = document.getElementById('clear');
    
    // This shows how you can access event.target.value
    name.oninput = function(e) {    
        console.log('Name: event.target.value=', e.target.value)
    }
    password.oninput = function(e) {    
        console.log('Password: event.target.value=', e.target.value)
    }

    // Here we assign a function to "onclick" method of Submit button
    submitButton.onclick = function validator(e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const password = document.getElementById('password');
        
        console.log("Submit button is clicked....")
        console.log('Submitted Name=', name.value, "Password=", password.value)

        const nameErrorMessage = getNameError(name.value)
        const passwordErrorMessage = getPasswordError(password.value)

        if (nameErrorMessage) {
            const nameErrorDisplay = document.getElementById('nameErrorDisplay');
            nameErrorDisplay.textContent = nameErrorMessage;
        }
        if (passwordErrorMessage) {
            const passwordErrorDisplay = document.getElementById('passwordErrorDisplay');
            passwordErrorDisplay.textContent = passwordErrorMessage;
        }

        // If all good, show what user has input into the fields
        if (!nameErrorMessage && !passwordErrorMessage) {
            const resultName = document.getElementById('resultName');
            const resultPassword = document.getElementById('resultPassword');
            resultName.textContent = "Your name =" + " " + name.value;
            resultPassword.textContent = "Your password = " + " " + password.value;
        }
    }

    // Difficult task - implement function to clear the values from <input> and <p> elements
    // clearButton.onclick = function clear(e) {
    //     e.preventDefault();

        // YOUR CODE HERE
        clearButton.onclick = function clear(e) {
            e.preventDefault();
            const name = document.getElementById('name');
            const password = document.getElementById('password');
            const nameErrorDisplay = document.getElementById('nameErrorDisplay');
            const passwordErrorDisplay = document.getElementById('passwordErrorDisplay');
            const resultName = document.getElementById('resultName');
            const resultPassword = document.getElementById('resultPassword');
        
            name.value = "";
            password.value = "";
            nameErrorDisplay.textContent = "";
            passwordErrorDisplay.textContent = "";
            resultName.textContent = "";
            resultPassword.textContent = "";
    }
})()
