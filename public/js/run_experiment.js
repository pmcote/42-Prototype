$( document ).ready(function() {
    $('#timer').click(function(e){
        if (e.target.innerHTML === "Start"){
            startTime()    
            e.target.innerHTML = "Stop"    
        } else {
             e.target.innerHTML = "Start"
             document.getElementById('txt').innerHTML = "";  
             clearTimeout(t)  
        }

        
    })
});

var t;
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML = h+":"+m+":"+s;
        t = setTimeout(function(){startTime()},500);
    }

    function checkTime(i) {
        if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    function stopTime(){}