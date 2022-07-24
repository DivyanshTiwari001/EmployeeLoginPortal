let text=document.getElementById("securityPin").innerHTML;
let i=Math.floor(Math.random()*10);
let b=Math.floor(Math.random()*10000+10000*i);
document.getElementById("securityPin").innerHTML=text+b;
let k,l;
function Password_Validation(){
    let c=document.querySelector(".Password").value;
    if(c==localStorage.getItem('password')){
        k=true;
    }
    else{
        try{
            if(isNaN(c)) throw "Please Enter a valid Password";
            if(c!=localStorage.getItem('password')) throw "You are entering wrong password";

        }
        catch(err){
            document.getElementById("message1").innerHTML=err;
            document.getElementById("securityPin").innerHTML=text+Math.floor(Math.random()*10000+10000*i);
            k=false;
        }
    }
}
function UserName_Validation(){
     userId=document.getElementById("user").value;
    if(userId==localStorage.getItem('userName')){
        l=true;
    }
    else{
        document.getElementById("message0").innerHTML="Please Enter Correct and Valid User Name";
        document.getElementById("securityPin").innerHTML=text+Math.floor(Math.random()*10000+10000*i);
        l=false;
    }
}
function tryIt(){ 
    let a=document.getElementById("pin").value;
    if(a==b && k && l){
        window.open("index2.html");
     }
    else{try{
    if(isNaN(a)) throw "Please Enter A valid Pin";
    if(a!=b) throw "Wrong PIN";
}
    catch(err){
        document.getElementById("message2").innerHTML=err;
        document.getElementById("securityPin").innerHTML=text+Math.floor(Math.random()*10000+10000*i);
    }
}
}
function Load(){
    window.open("Signup.html");
}

