document.getElementById("email_invalid").hidden = true;
document.getElementById("email_valid").hidden = true;
function emailvalidate() {
    document.getElementById("email_invalid").hidden = true;
    document.getElementById("email_valid").hidden = true;

    let email = document.getElementById("emailaddress").value;
    let emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailresult = emailRGEX.test(email);
    if (emailresult == true) {
        document.getElementById("email_valid").hidden = false;

    } else {
        document.getElementById("email_invalid").hidden = false;
    }

}