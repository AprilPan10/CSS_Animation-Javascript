window.onload = function(){//load function
    //set var
    var green = document.getElementById("c1");
    var pink = document.getElementById("c2");
    var yellow = document.getElementById("c3");
    var fillPink = document.getElementById("fill-pink");
    var fillYellow = document.getElementById("fill-yellow");
    var fillGreen = document.getElementById("fill-green");
    var fillBlue = document.getElementById("fill-blue");
    
    var flowerGreen = document.getElementById("flowergreen");
    var flowerPink = document.getElementById("flowerpink");
    var flowerYellow = document.getElementById("floweryellow");
   
    var leftHand = document.getElementById("lefthandgreen");
    var leftHand1 = document.getElementById("lefthand");
    var leftHandpink = document.getElementById("lefthandpink");
    var leftHandyellow = document.getElementById("lefthandyellow");
    
    var finalResult = document.getElementById("text");
    var whiteBase = document.getElementById("finalbase");
    var finalPink = document.getElementById("finalpink");
    var finalText = document.getElementById("mountain");
    var finalMountain = document.getElementById("finaltext");
    var playButton = document.getElementById("play");
    
    green.onclick = changeGreen;
    function changeGreen(){//green start
        
        fillGreen.style.display = "block";
        
        fillBlue.style.display = "none";
        fillPink.style.display = "none";
        fillYellow.style.display = "none";
        fillGreen.classList.add("animate");
        
        setTimeout(function(){ flowerGreen.style.display = "block"; }, 3000);
        flowerYellow.style.display = "none";
        flowerPink.style.display = "none";
        
        leftHand1.style.display = "none";
        leftHand.style.display="block";
        leftHandpink.style.display="none";
        leftHandyellow.style.display="none" 
        leftHand.classList.add("animate");
        
       
    }//end green
    
    pink.onclick = changePink;
    function changePink(){//pink start
        fillPink.style.display = "block";
        fillBlue.style.display = "none";
        fillGreen.style.display = "none";
        fillYellow.style.display = "none";
        fillPink.classList.add("animate");
        
        setTimeout(function(){ flowerPink.style.display = "block"; }, 3000);
        flowerGreen.style.display = "none";
        flowerYellow.style.display = "none";
        
        leftHand1.style.display = "none";
        leftHand.style.display="none"; 
        leftHandpink.style.display="block"; 
        leftHandyellow.style.display="none" ;
        leftHandpink.classList.add("animate");
    }//end pink
    
    yellow.onclick = changeYellow;
    function changeYellow(){//yellow start
        fillYellow.style.display = "block";
        fillGreen.style.display = "none";
        fillBlue.style.display = "none";
        fillPink.style.display = "none";
        fillYellow.classList.add("animate");
        
        setTimeout(function(){ flowerYellow.style.display = "block"; }, 3000);
        flowerGreen.style.display = "none";
        flowerPink.style.display = "none";
        
        leftHand1.style.display = "none";
        leftHand.style.display="none"; 
        leftHandpink.style.display="none"; 
        leftHandyellow.style.display="block" ;
        leftHandpink.classList.add("animate");
        
    }//yellow end
    
    playButton.onmouseover = showThis;
    function showThis(){//start mouse over function
        whiteBase.style.display = "block";
        finalPink.style.display = "block";
        finalText.style.display="block";
        finalMountain.style.display="block";
    }//end mouse over function
     playButton.onmouseout = showThis1;
    function showThis1(){//start mouse out function
        whiteBase.style.display = "none";
        finalPink.style.display = "none";
        finalText.style.display="none";
        finalMountain.style.display="none";
    }//end mouse out function
   
        
     var refresh = document.getElementById("mouse");
     refresh.onclick = refreshPage;
        function refreshPage(){//refresh function
             window.location.reload();
            
            }//end refresh function
   
}//end load function
