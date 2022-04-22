console.log("connected!");
var slots;
    
document.getElementById("btn").addEventListener("click",function(){
    var a=randomnumber()
    var b=randomnumber();
    var c=randomnumber();
    console.log(a);
    console.log(b);
    console.log(c);
    var slots1=slotsdecider(a);
    var slots2=slotsdecider(b);
    var slots3=slotsdecider(c);
    var finalslots= slots1+slots2+slots3;
    document.querySelector("#slots").textContent=finalslots;  
    windecider(a,b,c); 
});

function randomnumber(){
    let x=Math.floor(Math.random()*3+1)
    return x;
} 
function windecider(a,b,c){
    if(a===b){
        if(a===c){
            document.getElementById("message").textContent="you win!";  
        }
    }
    else{
        document.getElementById("message").textContent="you lose!";  
    }  
}
function slotsdecider(x){
    if(x===1){
        var slots="🍋";
    }
    if (x===2){
        var slots="🍊";
    }
    if(x===3){
        var slots="🍇";
    }

    return slots;
}