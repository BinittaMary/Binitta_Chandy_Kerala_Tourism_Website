function validateEmail(elementId, SpanID)///passing element and span id
{
 let EmailVar = document.getElementById(elementId); 
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(EmailVar.value.match(mailformat))
    {
    let p = document.getElementById(SpanID);
    p.innerHTML ="<span id='"+SpanID+"'>"+"</span>";
    let q= document.getElementById(elementId);
    q.style.border="blue solid 0px";
    document.form1.SignUpEmail.focus();
    return true;
    }
else
    {
    var p = document.getElementById(SpanID);
    p.innerHTML ="<div class='balloonError'><p>Invalid Email Address!!</p></div>";
    let q= document.getElementById(elementId);
    q.style.border="Red solid 2px";
    document.form1.SignUpEmail.focus();
    return false;
    }   
}


function validatePhone(elementId, SpanID)///passing element and span id
{
 let phNbrVar = document.getElementById(elementId); 
var phoneNumberFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(phNbrVar.value.match(phoneNumberFormat))
    {
    let p = document.getElementById(SpanID);
    p.innerHTML ="<span id='"+SpanID+"'>"+"</span>";
    let q= document.getElementById(elementId);
    q.style.border="blue solid 0px";
    document.form1.SignUpEmail.focus();
    return true;
    }
else
    {
    var p = document.getElementById(SpanID);
    p.innerHTML ="<div class='balloonError'><p>Invalid Phone Number!!</p></div>";
    let q= document.getElementById(elementId);
    q.style.border="Red solid 2px";
    document.form1.SignUpEmail.focus();
    return false;
    }   
}


function validatePassword(elementId, SpanID)///passing element and span id
{
 let pwdVar = document.getElementById(elementId); 
var pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(pwdVar.value.match(pwdFormat))
    {
    let p = document.getElementById(SpanID);
    p.innerHTML ="<span id='"+SpanID+"'>"+"</span>";
    let q= document.getElementById(elementId);
    q.style.border="blue solid 0px";
    document.form1.SignUpEmail.focus();
    return true;
    }
else
    {
    var p = document.getElementById(SpanID);
    p.innerHTML ="<div class='balloonError'><p>Invalid password!!</p></div>";
    let q= document.getElementById(elementId);
    q.style.border="Red solid 2px";
    document.form1.SignUpEmail.focus();
    return false;
    }   
}