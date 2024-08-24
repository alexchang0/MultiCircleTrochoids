// Simple javascript 2D graphics wrapper functions
// Author: Alexander Y. Chang
// Copyright (c) 2019-2020

var canvas;     // foreground canvas for display
var backCanvas; // background canvas for still images
var cc;         // canvas context  
var bc;         // background canvas context
var ac;         // active context
var xsize;      // quadrant x size of canvas
var ysize;      // quadrant y size of canvas

function my_js_init()
{
    canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth * .99;
    canvas.height = window.innerHeight - 220;
    backCanvas = document.createElement('canvas');
    backCanvas.width = canvas.width;
    backCanvas.height = canvas.height;;
    
    cc = canvas.getContext('2d');
    bc = backCanvas.getContext('2d');

    // Anti-aliasing
    // cc.imageSmoothingEnabled = true;
    // bc.imageSmoothingEnabled = true;

    bc.globalAlpha = 1;
    cc.globalAlpha = 1;
    
    xsize = canvas.width / 2;
    ysize = canvas.height / 2;
    
}

// set the active canvas context before doing any operation
function my_js_set_canvas(context) {
    ac = context;
}

function my_js_set_color(ir, ig, ib) {
    var r = Math.round(ir * 255);
    var g = Math.round(ig * 255);
    var b = Math.round(ib * 255);
    
    ac.strokeStyle = "rgba("+r+", "+g+", "+b+", 1)";
    // ac.strokeStyle = "#FFFFFF";
    ac.globalAlpha = 1;
    // console.log("%s", "rgba("+r+", "+g+", "+b+", 1)");
    // ac.strokeStyle = "rgba(255,255,255,1)";
}

function my_js_draw_line( x1,  y1,  x2,  y2,  r,  g,  b)
{
    ac.lineWidth = 4;
    my_js_set_color(r, g, b);    
    ac.beginPath();
    ac.moveTo(x1+xsize, -y1+ysize);
    ac.lineTo(x2+xsize, -y2+ysize);
    ac.stroke();
}

function my_js_draw_circle( x,  y,  radius,  r,  g,  b) {
    ac.lineWidth = 2;
    ac.beginPath();
    ac.arc(x+xsize, -y+ysize, Math.abs(radius), 0, Math.PI * 2, false);
    my_js_set_color(r, g, b);
    ac.stroke();
}

function my_js_draw_arc( x,  y,  radius,  a1,  a2, r,  g,  b) {
    ac.lineWidth = 4;
    ac.beginPath();
    ac.arc(x+xsize, -y+ysize, Math.abs(radius), a1, a2, false);
    my_js_set_color(r, g, b);
    ac.stroke();
}
