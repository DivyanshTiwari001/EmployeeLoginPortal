let arr=[];
let a=true;
function call(){
    arr[0]=document.getElementById("user1").value;
    arr[1]=document.querySelector(".Password1").value;
    try{
        if(isNaN(arr[1])) throw "Not a Valid Password";
        if(arr[1].length<6) throw "Password is too short";
        if(arr[1].length>10) throw "Password is too long";
    }
    catch(err){
        document.getElementById("msg").innerHTML=err;
        a=false;
    }
    if(a==true){
        localStorage.setItem('userName',arr[0]);
        localStorage.setItem('password',arr[1]);
        window.open('index.html');
    }
    // else{
    //     window.open('Signup.html');
    // }
}