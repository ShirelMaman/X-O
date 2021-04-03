//jQuery
$(document).ready(function() {
    $('#buttonPlay').click(function() {
        $('p').fadeOut();
        $('#buttonPlay').slideUp();
        document.getElementById("turns").innerHTML = "X gets to start !"
        $('#can').fadeIn();
        $('#win').append(0);
        $('#lose').append(0);


        $("#s1").click(function(){
            if (s1 === false) {


                tileType("s1");
                s1 = true;
                _s1 = type;
                console.log(_s1);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();


            }    
        });
        $("#s2").click(function(){
            if (s2 === false) {


                tileType("s2");
                s2 = true;
                _s2 = type;
                console.log(_s2);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s3").click(function(){
            if (s3 === false) {


                tileType("s3");
                s3 = true;
                _s3 = type;
                console.log(_s3);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s4").click(function(){
            if (s4 === false) {


                tileType("s4");
                s4 = true;
                _s4 = type;
                console.log(_s4);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s5").click(function(){
            if (s5 === false) {


                tileType("s5");
                s5 = true;
                _s5 = type;
                console.log(_s5);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s6").click(function(){
            if (s6 === false) {


                tileType("s6");
                s6 = true;
                _s6 = type;
                console.log(_s6);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s7").click(function(){
            if (s7 === false) {


                tileType("s7");
                s7 = true;
                _s7 = type;
                console.log(_s7);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s8").click(function(){
            if (s8 === false) {


                tileType("s8");
                s8 = true;
                _s8 = type;console.log(_s8);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });
        $("#s9").click(function(){
            if (s9 === false) {


                tileType("s9");
                s9 = true;
                _s9 = type;
                console.log(_s9);


            }
            else {
                document.getElementById("turns").innerHTML = "This tile is already full";
                checkWin();




            }
        });


        
    });
    
    
    //Global variables
var turn = 1;
var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;
var s5 = false;
var s6 = false;
var s7 = false;
var s8 = false;
var s9 = false;
var type;
var _s1, _s2, _s3, _s4, _s5, _s6, _s7, _s8, _s9;


//Game methods
    function cross(x) {


        var c = document.getElementById(x);
        var ctx = c.getContext("2d");
        
        var cx= c.width;
        var cy = c.height;


        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(cx,cy);
        ctx.lineWidth = 15;
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(0, cy);
        ctx.lineWidth = 15;
        ctx.stroke();




    }//cross end


    function nought(x) {


        var c = document.getElementById(x);
        var ctx = c.getContext("2d");
        var cx = c.width / 2;
        var cy = c.height / 2;




        ctx.beginPath();
        ctx.arc(cx, cy, 43, 0, 2 * Math.PI, false);
        ctx.lineWidth=15;
        ctx.stroke();


    }//nought end
    
    function tileType(y) {
        
          if(turn % 2 == 0) {
            msg("X");
            nought(y);
            type = "nought";
            turn++;
            checkWin();


        }
        else {


            msg("O");
            cross(y);
            type = "cross";
            turn++;
            checkWin();            
        }    


    }//fileType() end


    function msg(x) {
        document.getElementById("turns").innerHTML = "It's " + x + "'s turn !";
    }//msg() end


    function checkWin() {
        //console.log("sup " + type);
        if(_s1 == _s2 == _s3 || _s4 == _s5 == _s6 || _s7 == _s8 == _s9 || _s1 == _s4 == _s7 || _s2 == _s5 == _s8 || _s3 == _s6 == _s9 || _s1 == _s5 == _s9 || _s3 == _s5 == _s7) {
                alert(type + "'s wins!!");
        }
        //else if(turn > 9) {
            //document.getElementById("turns").innerHTML = "It's a tie!";
        //}
    }//checkWin() end




    });