function pressbtn(){
    var rand1 = Math.floor(1+Math.random()*6);
    var rand2 = Math.floor(1+Math.random()*6);
    if (rand1 >rand2){
        var txt = "<h1> Player 1 </h1>";
        document.getElementById("winertext").innerHTML =" Player 1";
    }else if(rand1 = rand2){
        document.getElementById("winertext").innerHTML =" Draw ";
    }else{
        document.getElementById("winertext").innerHTML = " Player 2";
    }
    document.getElementById("p1").src = "inverted-dice-"+rand1+".png";
    document.getElementById("p2").src = "inverted-dice-"+rand2+".png";
}
document.addEventListener("click",pressbtn,false);