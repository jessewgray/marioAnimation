//$(document).ready(function(){

    const moveMario = function(){
        var mario = window.document.getElementsByClassName("marioWrap")[0];
        mario.classList = "marioWrap"
        mario.classList.add("posTwo")
        //mario.classList.remove("posOne")
    }
    const moveMarioBack = function(){
        var mario = window.document.getElementsByClassName("marioWrap")[0];
        mario.classList = "marioWrap"
        mario.classList.add("posOne");
        //mario.classList.remove("posTwo");
    }

    const moveMarioJump = function(){
        var mario = window.document.getElementsByClassName("marioWrap")[0];
        mario.classList = "marioWrap"
        mario.classList.add("jump");
        document.getElementById("jumpAudio").play();
    }
    const moveMarioDuck = function(){
        var mario = window.document.getElementsByClassName("marioWrap")[0];
        mario.classList = "marioWrap"
        mario.classList.add("duck");
    }
    var bgPos = 0
    var bg = window.document.getElementsByClassName("theBackground")[0];
    bg.style.backgroundPositionX = bgPos + "px"
    const moveBackgroundLeft = function(){
        bgPos = bgPos - 1;
        bg.style.backgroundPositionX = bgPos + "px"
    }

    const makeMarioRun = function(){
        setTimeout(function() {moveMario()}, 200);
        setTimeout(function() {moveMarioBack()}, 400);
        setTimeout(function() {moveBackgroundLeft()}, 100);
        setTimeout(function() {moveBackgroundLeft()}, 200);
        setTimeout(function() {moveBackgroundLeft()}, 300);
        setTimeout(function() {moveBackgroundLeft()}, 400);
    }

    var marioBoxPos = 100
    var marioBox = window.document.getElementsByClassName("marioWrap")[0];
    marioBox.style.position = "absolute";
    marioBox.style.left = marioBoxPos + "px";

    const rightToLeft = function(){
        marioBoxPos = marioBoxPos + 3;
        marioBox.style.left = marioBoxPos + "px";
    }


    const startRun = function(){
        makeMarioRun();
        rightToLeft();
        document.getElementById("runAudio").play();
        //console.log("start run")
    }

let myInterval = "x";
function myStartFunction(){
    myInterval = setInterval(startRun, 400);
    myInterval
}

function myStopFunction() {
  clearInterval(myInterval);
  document.getElementById("runAudio").pause();
}

function backToStart(){
    marioBoxPos = 100;
    marioBox.style.left = marioBoxPos + "px";
    bgPos = 0;
    bg.style.backgroundPositionX = bgPos + "px";
    document.getElementById("runAudio").currentTime = 0
}

const logHeather = function(){
    console.log("heather")
}


//})

