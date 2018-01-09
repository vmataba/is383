
//Login
function login() {
    //Public objects storing username and password input objects
    var username_object = document.getElementById('username');
    var password_object = document.getElementById('password');
    //Read inputs
    var username = username_object.value;
    var password = password_object.value;
    //Validation
    if (username == null || username == '') {
        username_object.setAttribute('style', 'border: 1px solid red');
        var username_error = document.getElementById('username_error');
        username_error.style.display = 'block';

    }
    if (password == null || password == '') {
        password_object.setAttribute('style', 'border: 1px solid red');
        var password_error = document.getElementById('password_error');
        password_error.style.display = 'block';
        return;
    }
    //All fields have values entered, check for password strength
    var message_weak = "Weak password\nStrong passowrd must contain alteast one Uppercse letter\n"
            + "One special character, One digit and it has to be atleast 8 characters long";
    var message_fair = "Fair password:\nStrong passowrd must contain alteast one Uppercse letter\n"
            + "One special character, One digit and it has to be atleast 8 characters long";
    var message_strong = "Strong password";

    //stores boolean value for weak password
    var is_weak = password.search("[A-Z]") < 0 || password.search("[0-9]") < 0
            || password.length < 8 || password.search("[!@#$%^&*()_+=-?/>.,<:;']") < 0;
    //stores boolean value for fair password
    var is_fair = password.search("[A-Z]") >= 0 || password.search("[0-9]") >= 0
            || password.length > 8 || password.search("[!@#$%^&*()_+=-?/>.,<:;']") >= 0;
    //stores boolean value for string password
    var is_strong = password.search("[A-Z]") >= 0 && password.search("[0-9]") >= 0
            && password.length >= 8 && password.search("[!@#$%^&*()_+=-?/>.,<:;']") >= 0;
    

    if (is_strong) {
        alert(message_strong);
    } else if (is_fair) {
        alert(message_fair);
    } else {
        alert(message_weak);
    }



}

//Restores username field original state
function restoreUsername() {
    var username_object = document.getElementById('username');
    username_object.setAttribute('style', 'border-color:white');
    var username_error = document.getElementById('username_error');
    username_error.style.display = 'none';
}
//Restores password field original state
function restorePassword() {
    var password_object = document.getElementById('password');
    password_object.setAttribute('style', 'border-color:white');
    var password_error = document.getElementById('password_error');
    password_error.style.display = 'none';
}

/******Registration********/
function register() {
    //Get input objects
    var fname_obj = document.getElementById('fname');
    var mname_obj = document.getElementById('mname');
    var lname_obj = document.getElementById('lname');
    var email_obj = document.getElementById('email');
    var phone_obj = document.getElementById('phone');
    var male_obj = document.getElementById('male');
    var female_obj = document.getElementById('female');
    //Get Objects for displaying Errors
    var fname_error_obj = document.getElementById('fname_error');
    var mname_error_obj = document.getElementById('mname_error');
    var lname_error_obj = document.getElementById('lname_error');
    var email_error_obj = document.getElementById('email_error');
    var phone_error_obj = document.getElementById('phone_error');
    var gender_error_obj = document.getElementById('gender_error');
    //Read all the input values
    var fname = fname_obj.value;
    var mname = mname_obj.value;
    var lname = lname_obj.value;
    var email = email_obj.value;
    var phone = phone_obj.value;
    var male = male_obj.checked;
    var female = female_obj.checked;
    //Perform validation
    if (fname == null || fname == '') {
        fname_obj.setAttribute('style', 'border: 1px solid red; width: 350px');
        fname_error_obj.innerHTML = "First name is required";
    }
    if (mname == null || mname == '') {
        mname_obj.setAttribute('style', 'border: 1px solid red; width: 350px');
        mname_error_obj.innerHTML = "Middle name is required";
    }
    if (lname == null || lname == '') {
        lname_obj.setAttribute('style', 'border: 1px solid red; width: 350px');
        lname_error_obj.innerHTML = "Last name is required";
    }
    if (email == null || email == '') {
        email_obj.setAttribute('style', 'border: 1px solid red; width: 350px');
        email_error_obj.innerHTML = "Email is required";
    }
    if (phone == null || phone == '') {
        phone_obj.setAttribute('style', 'border: 1px solid red; width: 350px');
        phone_error_obj.innerHTML = "Phone number is required";
    }

    if (male == female) {
        gender_error_obj.innerHTML = "No gender selected";
    }



}

function onFnameTyped() {
    var fname_obj = document.getElementById('fname');
    var fname_error_obj = document.getElementById('fname_error');
    fname_obj.style.border = 'white';
    fname_error_obj.innerHTML = null;
    var fname = fname_obj.value;
    //Change Fname to Start with an upper case
    changeName(fname_obj, fname);
}

function onMnameTyped() {
    var mname_obj = document.getElementById('mname');
    var mname_error_obj = document.getElementById('mname_error');
    mname_obj.style.border = 'white';
    mname_error_obj.innerHTML = null;
    //Change Mname to Start with an upper case
    changeName(mname_obj, mname_obj.value);
}

function onLnameTyped() {
    var lname_obj = document.getElementById('lname');
    var lname_error_obj = document.getElementById('lname_error');
    lname_obj.style.border = 'white';
    lname_error_obj.innerHTML = null;
    //Change Lname to Start with an upper case
    changeName(lname_obj, lname_obj.value);
}
function onEmailTyped() {
    var email_obj = document.getElementById('email');
    var email_error_obj = document.getElementById('email_error');
    email_obj.style.border = 'white';
    email_error_obj.innerHTML = null;
    var email = email_obj.value;
    //Check if email contains @, not the first and not the last 
    var condition_1 = email.search('@') < 0 || email.charAt(0) === '@' || email.charAt(email.length - 1) === '@';
    //Check if email contains ., not the first and not the last 
    var condition_2 = email.search('.') < 0 || email.charAt(0) === '.' || email.charAt(email.length - 1) === '.';
    if (condition_1 || condition_2) {
        email_error_obj.innerHTML = 'Invalid email address';
    }
}
function onPhoneTyped() {
    var phone_obj = document.getElementById('phone');
    var phone_error_obj = document.getElementById('phone_error');
    phone_obj.style.border = 'white';
    phone_error_obj.innerHTML = null;
    //Create validation condition
    var phone = phone_obj.value;
    var condition_1 = (phone.search(['/^[0-9]+$/']) === null || phone.length !== 10);
    var condition_2 = (phone.substr(1, phone.length - 1).search(['/^[0-9]+$/']) === null || phone.length !== 13);

    if (phone.charAt(0) === '+') {//Phone starts with country code
        if (condition_2) {
            phone_error_obj.innerHTML = 'Phone number is incorrect';
        }
    } else {//Phone does not start with country code
        if (condition_1) {
            phone_error_obj.innerHTML = 'Phone number is incorrect';
        }
    }



}

function onGenderSelected() {
    var gender_error_obj = document.getElementById('gender_error');
    gender_error_obj.innerHTML = null;
}

function changeName(obj, name) {
    obj.value = name.substr(0, 1).toUpperCase() + name.substr(1, name.length - 1).toLowerCase();
}
