
function success(){
    if(document.getElementById("loginu").value==="") { 
        document.getElementById('login').disabled = true; 
    } else { 
        document.getElementById('login').disabled = false;
    }
}

function loginbtn()
{
    alert("You Are Logged In");
}