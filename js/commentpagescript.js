//comment section. its add comment. myfunction will be called when we click comment and will append li into the unorders list .
let newcomment = document.getElementById("comment");


function myFunction() {
    $("#list_add").append("<li>" + newcomment.value + "</li>");

}
//Auto populating goal timing
let scorelist = document.getElementById("scorelist");
let goalTiming = ["Full-time", "Half-time"];
for (let i = 0; i < goalTiming.length; i++) {
    let goal_Timing = goalTiming[i];
    let el = document.createElement("option");
    el.textContent = goal_Timing;
    el.value = goal_Timing;
    scorelist.appendChild(el);
}

//score display on the basis of dropdown

document.getElementById("goalScorehalf").hidden = true;
document.getElementById("goalScorefull").hidden = false;
let comment = document.getElementById("comment");

//Scoring time
function changetime() {
    var scorelist = document.getElementById("scorelist").value;
    var goalScorehalf = document.getElementById("goalScorehalf")
    var goalScorefull = document.getElementById("goalScorefull");

    if (scorelist == "Full-time") {
        goalScorehalf.hidden = true; //half time will be hidden.it will not display
        goalScorefull.hidden = false;//full time will not be hidden.it will display

    }

    if (scorelist == "Half-time") {
        goalScorehalf.hidden = false; //half time will not be hidden.it will display
        goalScorefull.hidden = true; //full time will be hidden.it will not display

    }
}

document.getElementById("email_invalid").hidden = true;
document.getElementById("email_valid").hidden = true;
//email validation . function to validate the email address using the regular expression
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