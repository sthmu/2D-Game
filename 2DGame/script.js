var b = 0;
var bw = 0;
var bPosition = 0;

var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");


function key(event) {
    if (event.which == 32) {
        clearInterval(rw);
        rs.pause();
        if (jw == 0) {
            jw = setInterval(jump, 69);
            js.play();
        }


    }
    if (event.which == 13) {
        if (rw == 0) {
            rw = setInterval(run, 69);
            rs.play();
            fw = setInterval(move, 10);
            fid = f();


        }
        if (bw == 0) {
            bw = setInterval(back, 10);
            sw = setInterval(score, 50);
        }

    }

}


var u = 1000;
var fw = 0;
var fid = 0;


function f() {
    for (var y = 0; y < 10; y++) {
        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.id = "d" + y;

        i.style.marginLeft = u + "px";
        document.getElementById("b1").appendChild(i);

        u = u + 500;

    }

}

function move() {

    for (var y = 0; y < 10; y++) {
        z = getComputedStyle(document.getElementById("d" + y));
        var w = parseInt(z.marginLeft) - 4;
        document.getElementById("d" + y).style.marginLeft = w + "px";

        //152-54
        if (w <= 148 & w >= 54) {
            if (mt > 320) {
                ds.play();
                rs.pause();
                clearInterval(rw);
                clearInterval(jw);
                jw = -1;
                clearInterval(bw);
                clearInterval(sw);
                clearInterval(fw);
                dw = setInterval(dead, 79);
                
               


            }

        }
    }
}

var i = document.getElementById("boy");
var r = 1;
var rw = 0;

function run() {
    r = r + 1;
    if (r == 9) {
        r = 1;
    }
    i.src = "Run (" + r + ").png";
}


var j = 1;
var jw = 0;
var mt = 380;
var jp = 0;



function jump() {


    if (j < 7) {
        mt = mt - 20;

    }
    if (j > 6) {
        mt = mt + 20;

    }

    i.style.marginTop = mt + "px";

    j = j + 1;
    if (j == 13) {
        j = 1;
        clearInterval(jw);
        rw = setInterval(run, 69);
        rs.play();
        jw = 0;


        if (fw == 0) {
            fw = setInterval(move, 10)
        }
        if (fid == 0) {
            fid = f();
        }
        if (bw == 0) {
            bw = setInterval(back, 10);
        }
        if (sw == 0) {
            sw = setInterval(score, 69);
        }
    }
    i.src = "Jump (" + j + ").png";


}

function back() {
    b = b - 4;
    document.getElementById("b1").style.backgroundPositionX = b + "px";


}


var sw = 0;
var a = 0;
function score() {
    a = a + 1;
    document.getElementById("score").innerHTML = a;
}

var d = 1;
var dw = 0;


function dead() {
    d = d + 1;
    if (d == 11) {
        d = 10;
        clearInterval(dw);
        i.style.marginTop = "380px";
        document.getElementById("end").style.visibility="visible";
        document.getElementById("endscore").innerHTML=a;
    }
    i.src = "Dead (" + d + ").png";

}

function re(){
    location.reload();
}