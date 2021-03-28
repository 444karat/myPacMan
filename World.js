(function () {
    'use strict';
var canvas, ctx, cellSize;
var FPS = 60;

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

cellSize = 35;


function World(){
    this.map = [ 
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
    
    
    
};


function onKey(event){
    var wCode = 87; 
	var aCode = 65;
	var sCode = 83;
	var dCode = 68;

}



window['World'] = World;
World.prototype = {
    draw: function (){
        for( var i = 0; i < this.map.length; i++ ){
            for(var j = 0; j < this.map[i].length; j++){
                if (this.map[i][j] == 1)  {
                    ctx.drawImage(wall,j*cellSize,i*cellSize,cellSize,cellSize);            
                }
                else if (this.map[i][j] == 2){
                    // point
                    ctx.drawImage(point,j*cellSize,i*cellSize,cellSize,cellSize);            
                }
                    
                else if (this.map[i][j] == 3){
                    //enamy
                    ctx.drawImage(ghost,j*cellSize,i*cellSize,cellSize,cellSize);
                }
                else if (this.map[i][j] == 4){
                    //packman
                    ctx.drawImage(packman,j*cellSize,i*cellSize,cellSize,cellSize);
                }
                    
            }
        }
    }// .bind(this));
}

})();


function Pack(){
    this.x = 1;
    this.y = 1;

}
Pack.prototype ={
    set: function(World){
        World.map[this.x][this.y] = 4;
    }
}

function Enemy(){
    this.x = 2;
    this.y = 1;

}
Enemy.prototype ={
    set: function(World){
        World.map[this.x][this.y] = 3;
    }
}

document.onkeydown = function(event){
    var wCode = 87; 
	var aCode = 65;
	var sCode = 83;
	var dCode = 68;

	if (event.keyCode == wCode){
        console.log(wCode);
    }
    if (event.keyCode == aCode){
        console.log(aCode);
    }
    if (event.keyCode == sCode){
        console.log(sCode);
    }
    if (event.keyCode == dCode){
        console.log(dCode);
    }
}

window.onload = function(){

    var m = new World();
    var u = new Pack();
    var e = new Enemy();
    
    e.set(m);
    u.set(m);
    m.draw();
};

