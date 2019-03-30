<script>
var count = setInterval(countDown, 1000)
var start = new Date().getTime();
var currSec = (Math.floor((new Date().getTime() - start)/1000) % 60);
var currMin = (Math.floor((new Date().getTime() - start)/1000) / 60);
var min = 0
var sec = 3
var realSec = sec-currSec+60
var realMin = min-currMin;
function countDown(){
	currSec = (Math.floor((new Date().getTime() - start)/1000) % 60);
	realSec = sec-currSec+60;
    if(realSec>60){
    	realSec = realSec % 60;
    }
    if(realSec == 60){
    	realSec = 0; 
    }
	document.body.innerHTML = "";
	document.write(realMin+" : "+realSec)
    if(realSec == 0 && realMin == 0){
    	clearInterval(count);
    	alert("countdown finished");
    }
    if(realSec == 0){
    	realMin--;
    }
}
</script>
