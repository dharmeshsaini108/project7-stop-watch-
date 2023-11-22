
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;   //when it is false means timer is stop

function start() {
    timer = true  //when we click on start timr will become true and it goes to settimeout functn in stopwatch() for some delayation
    stopwatch();
}//in this functn timer will start
function stop() {
    timer = false;
}
function reset() {
    timer = false;

     hr = 0;
     min = 0;
     sec = 0;
     count = 0;

     document.getElementById("hr").innerHTML="00"
     document.getElementById("min").innerHTML="00"
     document.getElementById("sec").innerHTML="00"
     document.getElementById("count").innerHTML="00"
}
function stopwatch() {
    if (timer == true) {
        count = count + 1;//means count increase in every 10 milisecond

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }//when count reaches 100 second will increment 

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }//when sec reaches 60 min will increment
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }//when min reaches 60 ,hr will increment

        /////////<
        //this below section if for when we run stop watch double zero appers not single zero
        var hrString=hr;
        var minString=min;
        var secString=sec;
        var countString=count
        if(hr<10){
            hrString="0"+hrString
        }
        if(min<10){
            minString="0"+minString
        }
        if(sec<10){
            secString="0"+secString
        }
        if(count<10){
            countString="0"+countString
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        ///////////>

        setTimeout("stopwatch()", 10)

        //this delayation work until  timer become false
    }
}