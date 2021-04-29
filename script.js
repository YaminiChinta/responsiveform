function validateform()
{
    var n=document.getElementById("name");
    var pwd=document.myform.pwd.value;
    var pno=document.getElementById("pno");

    
    if(n.value==""){
        alert("Name can't be blank..");
        return false;
    }
    else if(pwd.length<6){
        alert("Password must contain atleast 6 characters..");
        return false;
    }
    if(pno.length<10 || pno.length>10)
    {
        alert("Invalid Phone Number");
        return false;
    }
    document.getElementById("myform").reset();

}
