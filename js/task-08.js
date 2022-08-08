const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;
    
    if (emailValue === "" || passwordValue === "") {
        return alert("Please fill in all the fields!");
    };
    
    const formObj = {
        email: emailValue,
        password: passwordValue,
    };
    console.log(formObj);
    
    formEl.reset();
};