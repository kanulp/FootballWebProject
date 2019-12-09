//local Storage

function mysub()
{
    let name = document.getElementById("enter").value;
    localStorage.setItem("Subscriber",name);
    document.getElementById("result").innerHTML = localStorage.getItem("Subscriber");
}
