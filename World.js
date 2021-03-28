var canvas;
var ctx;
var mrP;
var mrG;

var FPS = 60;
var cellSize = 35;
var score = 0;
var start = true;


const wall = new Image();
const packman = new Image();
const ghost = new Image();
const point = new Image();

wall.src = "wals.png";
packman.src = "packman.png";
ghost.src = "ghost.png";
point.src = "point.png";

canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");




var map = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],
    [1,2,1,0,1,2,1,2,2,2,2,2,2,2,1,2,1,1,1,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,2,2,2,1,2,1,1,0,1,1,2,1,2,2,2,1,1,1],
    [1,1,1,1,2,2,1,2,1,0,0,0,1,2,1,2,2,1,1,1,1],
    [1,2,2,2,2,2,2,2,1,0,0,0,1,2,2,2,2,2,2,2,1],
    [1,1,1,1,2,2,1,2,1,1,1,1,1,2,1,2,2,1,1,1,1],
    [1,1,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,1,1,1,2,2,2,1,1,1,1,2,1,1,2,1],
    [1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1],
    [1,2,2,1,1,2,2,2,1,1,1,1,1,2,2,2,1,1,2,2,1],
    [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
    
function init(){
    mrP = new Pack;
    mrG = new Enemy;

    mrG.draw();
    mrP.draw();

    for( var i = 0; i < map.length; i++ ){
        for(var j = 0; j < map[i].length; j++){
            if (map[i][j] == 1)  {
                ctx.drawImage(wall,i*cellSize,j*cellSize,cellSize,cellSize);            
            }
            else if (map[i][j] == 2){
                // point
                ctx.drawImage(point,i*cellSize,j*cellSize,cellSize,cellSize);            
            }               
        }
    }   
}

function updateScreen(x,y){
    ctx.clearRect(x*cellSize,y*cellSize,cellSize,cellSize);
}

function Pack(){
    this.x = 10;
    this.y = 10;

}
Pack.prototype ={
    draw: function() {
        map[this.x][this.y] = 4;
        ctx.drawImage(packman,this.x*cellSize,this.y*cellSize,cellSize,cellSize);
    },
    move: function(x,y){
        if(map[x][y] == 2){
            score++;
        }
        if (map[x][y] == 3){
            updateScreen(this.x,this.y);
            alert("dead");
            return;
        }
        updateScreen(this.x,this.y);
        map[this.x][this.y] = 0;
        this.x = x;
        this.y = y;
        map[this.x][this.y] = 4;
        this.draw();
    },
    isMove: function(x,y){
        if(map[x][y] != 1){
            return true;
        }
        else{
            return false;
        }
    }
}
function Enemy(){
    this.x = 1;
    this.y = 1;
}
Enemy.prototype ={
    draw: function(){
        map[this.x][this.y] = 3;
        ctx.drawImage(ghost,this.y*cellSize,this.x*cellSize,cellSize,cellSize);
    },
    isMove: function(x,y){
        if(map[x][y] != 1){
            return true;
        }
        else{
            return false;
        }
    },
    move: function(){
        
    },
    randGo: function(){
        return Math.floor(Math.random() * (5 - 1)) + 1;
    }

}


function onKeyDown(event){
    var wCode = 87; 
	var aCode = 65;
	var sCode = 83;
	var dCode = 68;    
    var keyCode = event.keyCode;

	switch(keyCode){
        case wCode:
            console.log(mrP.isMove(9,9));
            if (mrP.isMove(mrP.x+1, mrP.y)){             
                   mrP.move();
            }
            break;
        case aCode:
            console.log(a);
            break;    
        case sCode:
            console.log(s);
            break;
        case dCode:
            console.log(d);
            break;
    }
}

/*
window.onload = function(){

    var m = new World();
    var u = new Pack();
    var e = new Enemy();
    
    e.set(m);
    u.set(m);
    m.draw();
};*/


///canvas.addEventListener('keydown',onKeyDown,false);

document.onkeydown = function(event){
    var wCode = 87; 
	var aCode = 65;
	var sCode = 83;
	var dCode = 68;    
    var keyCode = event.keyCode;

    if (start){
        init();
        start = false;
    }
    
    switch(keyCode){
        case wCode:
            if (mrP.isMove(mrP.x, mrP.y-1)){             
                   mrP.move(mrP.x,mrP.y-1);
            }
            break;
        case aCode:
            if(mrP.isMove(mrP.x-1,mrP.y)){
                mrP.move(mrP.x-1,mrP.y);
            }
            break;    
        case sCode:
            if(mrP.isMove(mrP.x,mrP.y+1)){
                mrP.move(mrP.x,mrP.y+1);
            }
            break;
        case dCode:
            if(mrP.isMove(mrP.x+1,mrP.y)){
                mrP.move(mrP.x+1,mrP.y);
            }
            break;
    }

    console.log(score);
}
