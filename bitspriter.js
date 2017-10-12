/*
*  bitspriter.js
*
*  Bit Spriter - JSON Sprite engine for HTML5 Canvas
*
*  - Copyright Nick Freese 2017
*/

var spriter = {
    
    
    //has full default values
    settings:{
        scale: 80,
    },
    
    utils: {
       
       renderBlocks: function(block, position, size, c){
           var _that = this;
           for(var e = 0; e < block.blocks.length;e++){
             
               var positionX = position[0] + (block.blocks[e].x * size);
               var positionY = position[1] + (block.blocks[e].y * size);
               _that.paint([positionX, positionY], block.color, size, c);
           
           }
       
       },
       
       paint: function(location, color, blockSize, context){
            context.beginPath();
            context.fillStyle = color;
            context.fillRect(location[0], location[1], blockSize, blockSize);
            context.fill();
       }
        
    },

    //This is the main function of spriter
    render:function(canvas, template, overrides, position){
        var _this = this;
        var size = canvas.width/_this.settings.scale;
        var context = canvas.getContext('2d');
        if(Object.keys(overrides).length !== 0 && overrides.constructor !== Object){
        _this.register(template, overrides)
        }
        for(var i = 0; i<template.char.length;i++){
            if(template.char[i].removed !== true && typeof template.char[i].blocks !== 'undefined'){
                  _this.utils.renderBlocks(template.char[i], position, size, context);
              }
        }
    
    },
    
    //This modifies default settings by override.
    register: function(template, override){
    var _this = this;
    
        for(var r = 0; r < override.char.length;r++){
            
            for(var t = 0; t < template.char.length; t++){
               if(template.char[t].name == override.char[r].name){
                   if(typeof override.char[r].removed == 'undefined'){
                       template.char[t].blocks = override.char[r].blocks;
                       template.char[t].color = override.char[r].color;
                   }
                   else{
                       template.char[t].removed = true;
                   }
               }
            
            }
                        
        }
    
    },

};
