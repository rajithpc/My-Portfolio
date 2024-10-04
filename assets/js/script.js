addEventListener('submit',(e)=>{
    const name1 = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("comment");
    var istrue = true;
    console.log(name1.value,email.value,subject.value,message.value);
    if (name1.value === '' || name1.value == null) {
        e.preventDefault();
        document.getElementById("name_error").innerText = "Name is required";
        var istrue = false;
        console.log("name");

    }
    if (validate(email.value) == false) {
        e.preventDefault();
        document.getElementById("email_error").innerText = "Enter valid email";
        var istrue = false;
        console.log("email");
    }
    if (subject.value.length < 5) {
        e.preventDefault();
        document.getElementById("subject_error").innerText = "Length minimum 5 required";
        var istrue = false;
        console.log("subject");
    }

    if (message.value.length < 5) {
        e.preventDefault();
        document.getElementById("message_error").innerText = "Length minimum 5 required";
        var istrue = false;
        console.log("message");
    }
    if (istrue) {
        sendMail();
    }
})
function sendMail() {
    console.log("mail");
    
    let parms = {
        name : document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("comment").value,
    }
    emailjs.send("service_7gjb26m","template_7p6bmbf",parms).then(alert("Email sent !!!"))
}
function validate(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) 
    {
        return (false);
    }
    else
    {
    return (true);
    }
}