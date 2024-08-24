// Multi-Circle Hypotrochoid Animation
// Author: Alexander Y. Chang
// Copyright (c) 2019-2021


class circle_c {
    constructor(r, s, iao) {          
        this.radius = Number(r);           // radius of this circle                                              
        this.speedRatio = Number(s);       // ratio of distance traveled / time of (Cn in Cn-1) to (C1 in C0)           
        this.IAO = Number(iao);            // initial angle offset                                               
        this.CAO = Number(0);              // cumulative angle offset                                            
        this.theta = Number(0);            // the orbiting angle the center of circle n+1 travels relative to circle n    
        this.alpha = Number(0);            // the angle circle n+1 spins to match theta n (for distance traveled)
        this.x = Number(0);                // x coordinate of the center                                         
        this.y = Number(0);                // y coordinate of the center                                         
        this.initX = Number(0);
        this.initY = Number(0);
    }
};

my_js_init();

// global variables
var X_CORD_SIZE = 500;
var SCALE = xsize/X_CORD_SIZE;
var STEP = 1/SCALE;
var step_per_frame_input = 30;
var STEP_PER_FRAME = 30;
var theta_step_size = 0.003;
var nSteps = 0;
var theta = 0;
var circleCount = 0;
var animateCircle = true;
var stop = false;
var clear = false;
var drawing = false;
var currentCycles = 0;
var animateState = 2;
var convergeTheta = 2 * Math.PI;
var colorFactor = 40;
var input_theta_step = 0.003;
var input_iao = 0;
var maxRadius = 0;
var MAX_AUDIO_AMPLITUDE = 32767;

my_js_set_canvas(cc);

// Write to file to save
function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
}

var soundLenth = 10;
var samplingRate = 44.1*1000;
var sampleTimeLen = 1 / samplingRate;
var pitch = 440*0.9;
var multiplier = sampleTimeLen*2*Math.PI;
var headerLength = 44;  // bytes
var nOfSamples = samplingRate * soundLenth;
var sampleSize = 2; // Int16
var fileSize = headerLength + nOfSamples * sampleSize;
var channels = 1;
var audioFileLength = 0;
var audioFillPercent = 0;

function fillWaveHeader()
{
    // These are in little endia because of Intel.
    // Need to swap byte order as the spec is in big endia.
    _header = new Int32Array(headerLength/4);
    _header[0] = 0x46464952          // RIFF <-> FFIR
    _header[1] = fileSize - 8;       // Filesize after this field (-8)
    _header[2] = 0x45564157;         // WAVE <-> EVAW
    _header[3] = 0x20746d66;         // "fmt "  <-> " tmf"
    _header[4] = 16;                 // subChunkSize after this word
    _header[5] = (1 /* mono */ << 16) + 1 /* linear PCM*/;      // 1 = linear quntization,  1 channel
    _header[6] = samplingRate;
    _header[7] = samplingRate * sampleSize * channels;
    _header[8] = (16 << 16) + (channels * sampleSize);
    _header[9] = 0x61746164;
    _header[10] = nOfSamples * sampleSize;
    return _header;
}

let headerOffset = headerLength/2; // the sample array index after the header.
const mchtArray = new Int16Array(nOfSamples+headerOffset);

function setSampleValue(x, y) {
    var skipFactor = 16;
    scale = 250. / maxRadius * inputScale;
    if (typeof setSampleValue.counter == 'undefined' ) {
        setSampleValue.counter = 0;
    }
    
    if (setSampleValue.counter/skipFactor <= nOfSamples) {
//        mchtArray[setSampleValue.counter/skipFactor + headerOffset] = (1.0 * (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) * MAX_AUDIO_AMPLITUDE / 250);
        mchtArray[setSampleValue.counter/skipFactor + headerOffset] = (x * MAX_AUDIO_AMPLITUDE / 250);
        audioFillPercent = setSampleValue.counter/skipFactor/nOfSamples * 100;
        setSampleValue.counter++;
    }
}

function writeFile(filename)
{
    var my_lines=[];
    _isBrowser = true;
    if (_isBrowser) {
        let headerOffset = headerLength/2; // the sample array index after the header.
        const header = fillWaveHeader();
        const headerSamples = new Int16Array(header.buffer);
        mchtArray.set(headerSamples, 0);
       
        const url = typedArrayToURL(mchtArray, 'bin');

        const link = document.createElement('a');
        link.download = 'mchtAudio.wav'
        link.href = url;
        link.innerText = 'Open the array URL';
        // document.body.appendChild(link);
        link.click();
        rul.revokeObjectURL(link.href);
    } else if (_isRhinoJs) {
    } else {
    }
    return my_lines;
}

function writeFileExample(filename)
{
    var my_lines=[];
    _isBrowser = true;
    if (_isBrowser) {
        let headerOffset = headerLength/2; // the sample array index after the header.
        const samples = new Int16Array(nOfSamples+headerOffset);
        const header = fillWaveHeader();
        const headerSamples = new Int16Array(header.buffer);
        samples.set(headerSamples, 0);
        for(let i = 0; i < nOfSamples; i++) {
            //            samples[i+headerOffset] = (Math.sin(i * pitch * multiplier) + Math.sin(i * pitch* 1.5 * multiplier))/2
            /*
            samples[i+headerOffset] = (Math.sin(i * pitch * multiplier) +
                                       Math.sin(i * pitch* 1.25 * multiplier) +
                                       Math.sin(i * pitch* 1.5 * multiplier))/3
                * 32767;
                */
            
            samples[i+headerOffset] = (Math.sin(i * pitch * multiplier) +
                                       Math.sin(i * pitch* 1.25 * multiplier) /1.25+
                                       Math.sin(i * pitch* 1.5 * multiplier) /1.5+                                       
                                       Math.sin(i * pitch* 1.8 * multiplier) /1.8) / 3
                * MAX_AUDIO_AMPLITUDE;
                                     
            
        }
        //        const url = typedArrayToURL(samples, 'text/plain');
        const url = typedArrayToURL(samples, 'bin');

        const link = document.createElement('a');
        link.download = 'sin440.wav'
        link.href = url;
        link.innerText = 'Open the array URL';
        // document.body.appendChild(link);
        link.click();
        rul.revokeObjectURL(link.href);
    } else if (_isRhinoJs) {
    } else {
    }
    return my_lines;
}


function my_js_canvas_test() {
    
    // Line
    my_js_draw_line(50, 300, 300, 100, 255, 0, 255);
    
    // Arc / Circle
    for (var i =0; i < 500; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        my_js_draw_circle(x, y, 30, 50, 50, 0);
    }
}

//my_js_canvas_test();


var circle = [];

function reset() {
    nSteps = 0;
    theta = 0;
    // STEP_PER_FRAME = 30;
    // step_per_frame_input = 30;
    // theta_step_size = 0.003;
    currentCycles = 0;
    animateState = 2;
    var mySelect = document.getElementById('sel1');
    mySelect.value = "animateToggle";    
}

// Find Converging Angle

function isAligned() {
    for (var i = 1; i < circleCount; i++) {
        if ((Math.abs(circle[i].x - circle[i].initX) > 0.0001) ||
            (Math.abs(circle[i].y - circle[i].initY) > 0.0001)) {
            return false;
        }
    }
    return true;
}

function getConvergePoint() {
    evaluate(0);
    for (var i = 1; i < circleCount; i++) {
        circle[i].initX = circle[i].x;
        circle[i].initY = circle[i].y;
    }
    console.log("evaluated");
    for (var i = 1; i < 10000; i++) {
        evaluate(i * 2 * Math.PI);
        if (isAligned()) {
            return (i * 2 * Math.PI);
        }
    }
    console.log("cannot find converging angle");
    return 0;
}

// Functions for GUI interaction

function clickDraw() {
    if (drawing) {
        return;
    }
    drawing = true;
    var radiusForm = document.getElementById("radiusFormID");
    var speedForm = document.getElementById("speedFormID");
    var text = "";
    var i;
    var radius = 0;
    var speedRatio = 1;

    // read parameters first because iao needs to be set bfore
    //  circles.
    parametersForm = document.getElementById("parametersFormID");
    inputScale = Number(parametersForm.elements[0].value);
    colorFactor = Number(parametersForm.elements[1].value);
    input_theta_step = Number(parametersForm.elements[2].value);
    update_step_per_frame();
    input_iao = Number(parametersForm.elements[3].value)*2*Math.PI/360.;
    
    circle = [];
    for (i = 0; i < radiusForm.length && speedRatio != 0  ; i++) {
        radius = radiusForm.elements[i].value;
        text += radius;
        if (i > 0) {
            speedRatio = speedForm.elements[i-1].value;
        } else {
            speedRatio = 1;
        }
        text += ", " + speedRatio+ "<br>";      
        mycircle = new circle_c(radius, speedRatio, input_iao);
        circle.push(mycircle);
    }
    circleCount = circle.length;
    // push in 2 dummy trailing circles.
    mycircle = new circle_c(0, 0);
    circle.push(mycircle);    
    mycircle = new circle_c(0, 0);    
    circle.push(mycircle);
/*    
    document.getElementById("demo").innerHTML = text;
*/
    console.log("values = %d, %d", radiusForm.elements[0].value,
                radiusForm.elements[1].value);
    //    circle.sort(compareNumbers);
    console.log("circle = %d, %d", circle[0].radius, circle[1].radius);

    console.log("circleCount %d", circleCount);

    convergeTheta = getConvergePoint();
    
    // figure out the graph size
    maxRadius = circle[0].radius;
    var i;
    for (i = 1; i < circleCount-1; i++) {
        if (circle[i].radius < 0) {
            maxRadius -= (circle[i].radius*2);
        }
    }
    if (circle[circleCount-1].radius > 0) {
        maxRadius -= circle[circleCount-1].radius;
    }
    // scale = 250. / (circle[0].radius - circle[circleCount-1].radius) * inputScale;
    scale = 250. / maxRadius * inputScale;
    
    animateCircle = true;
    reset();
    animate();
}

function update_step_per_frame() {
    if (step_per_frame_input > 0) {
        STEP_PER_FRAME = step_per_frame_input;
        theta_step_size = input_theta_step;
    } else if (step_per_frame_input < 0) {
        STEP_PER_FRAME = -step_per_frame_input;
        theta_step_size = -input_theta_step;
    } else {
        theta_step_size = 0;
    }
}

function clickSpeedUp() {
    step_per_frame_input+= 10;
    update_step_per_frame();
}

function clickSlowDown() {
    step_per_frame_input-= 10;    
    update_step_per_frame();
}

function clickClear() {
    if (drawing) {
        bc.clearRect(0,0,innerWidth, innerHeight);
        stop = true;
        clear = true;
        animateCircle = false;
        reset();
    } else {
        clear = true;
    }
}

var paused = false;

function clickPause() {
    if (!drawing) {
        drawing = true;
        animate();
        return;
    } else {
        paused = true;
    }
}

function clickStop() {
    if (drawing) {
//      clear = true;
        stop = true;
    }
    animateCircle = false;    
    reset();
}

function clickAnimate() {
    animateState = 2; // force animation toggle
    var mySelect = document.getElementById('sel1');
    mySelect.value = "animateToggle";
    if (animateCircle) {
        animateCircle = false;
    } else {
        animateCircle = true;
    }
}

function selectAnimation(value) {
    console.log("selectAnimation(%s)",value);
    var mySelect = document.getElementById('sel1');
    if (value == "animateOn") {
        animateOn();
        mySelect.value = "animateOn";
        console.log("animateOn");
    } else if (value == "animateOff") {
        animateOff();
        mySelect.value = "animateOff";
        console.log("animateOff");
    } else {
        animateToggle();
        mySelect.value = "animateToggle";
        console.log("animateToggle");
    }
}

function animateOn() {
    animateState = 1;
    animateCircle = true;
}

function animateOff() {
    animateState = 0;
    animateCircle = false;    
}

function animateToggle() {
    animateState = 2;
}



window.addEventListener('wheel', wheelScrolling);
function wheelScrolling(event) {
    if (event.deltaY < 0) {
        console.log('scrolling up');
        step_per_frame_input++;
        update_step_per_frame();
    } else if (event.deltaY > 0) {
        console.log('scrolling down');
        step_per_frame_input--;
        update_step_per_frame();
    }
}

// given theta, update all variables for every circle
function evaluate(theta0) {
    var n;
    circle[0].theta = theta0;
    for (n = 0; n < circleCount; n++) {
        circle[n + 1].alpha = -1 * (circle[n].theta * circle[n].radius)/
            circle[n + 1].radius;

        circle[n + 1].CAO =
            circle[n + 1].alpha +
            circle[n].theta +
            circle[n].CAO +
            circle[n + 1].IAO;

        circle[n + 1].theta =
            (circle[0].theta * circle[0].radius *
             circle[n+2].speedRatio) / circle[1].speedRatio /   // <-- n+2 because of the definition c n+2 travel in c n+1.
            circle[n + 1].radius; // <-- Rn+1 because the theta is an angle of circle n+1
        // This was [n+2] so was a bug.
        
        circle[n+1].x = circle[n].x + (circle[n].radius - circle[n+1].radius) *
            Math.cos(circle[n].theta + circle[n].CAO);

        circle[n+1].y = circle[n].y + (circle[n].radius - circle[n+1].radius) *
            Math.sin(circle[n].theta + circle[n].CAO);
        
    }
}

function evaluate2(theta0) {
    var i;
    var j;
    var k;
    var angleSum = 0;
    var alphaSum = 0;
    var thetaSum = 0;

    circle[0].theta = theta0;
    for (i = 1; i < circleCount; i++) {
        alphaSum = 0;
        for (j = 1; j < i; j++) {
            alphaSum = alphaSum + ((-1 * circle[0].theta * circle[0].radius * circle[j].speedRatio / circle[1].speedRatio) /
                                   circle[j].radius);
        }
        thetaSum = 0;
        for (k = 0; k < i; k++) {
            thetaSum = thetaSum + ((circle[0].theta * circle[0].radius * circle[k+1].speedRatio) /
                                   (circle[1].speedRatio * circle[k].radius));
        }
        angleSum = alphaSum + thetaSum;
        circle[i].x = circle[i-1].x + ((circle[i - 1].radius - circle[i].radius) * Math.cos(angleSum));
        circle[i].y = circle[i-1].y + ((circle[i - 1].radius - circle[i].radius) * Math.sin(angleSum));
    }
}

// This function is called repetatively.
// Every step increases theta by a small delta (.001) then renders the image.
// Every STEP_PER_FRAME generates a frame to display on the canvas.
function step() {
    var r, g, b, y;
    var x, y;
    var colorTheta = theta/colorFactor;
    // scale = 250. / (circle[0].radius - circle[circleCount-1].radius) * inputScale;
    
    r = (Math.sin(colorTheta+2*Math.PI/4.)+1.)/2.;
    r = r*r;
    r = r*r;
//    r = r*r;
    
    y = (Math.sin(colorTheta-0*Math.PI/4.)+1.)/2;
    y = y*y;
    y = y*y;
//    y = y*y;
    
    g = (Math.sin(colorTheta-2*Math.PI/4.)+1.)/2.;
    g = g*g;
    g = g*g;
//    g = g*g;
    
    b = (Math.sin(colorTheta-4*Math.PI/4.)+1.)/2;
    b = b*b;
    b = b*b;
//    b = b*b;

    
    r += y*5/6;
    g += y*5/6;

    
    evaluate(theta);
//    evaluate2(theta);
    x = circle[circleCount-1].x * scale;
    y = circle[circleCount-1].y * scale;

    // Render sound sample
    setSampleValue(x,y);
    
    if (clear) {
        console.log("Clearing");
        bc.clearRect(0,0,innerWidth, innerHeight);
    }   
    
    if (!clear && !stop && nSteps != 0) {
        my_js_set_canvas(bc);
        my_js_draw_line(x, y, step.x1, step.y1, r, g, b);
    }

    step.x1 = x;
    step.y1 = y;

    if (nSteps%STEP_PER_FRAME == 0) {
        cc.clearRect(0,0,innerWidth, innerHeight);
        cc.drawImage(backCanvas, 0, 0); 
        my_js_set_canvas(cc);
        var cIndex = 0;
        for (cIndex = 0; animateCircle && cIndex < circleCount; cIndex++) {
            if (cIndex != circleCount - 1) {
                my_js_draw_circle(circle[cIndex].x * scale, circle[cIndex].y * scale,
                                  circle[cIndex].radius * scale, 1, 0, 1);
                my_js_draw_arc(circle[cIndex].x * scale, circle[cIndex].y * scale,
                               circle[cIndex].radius * scale,
                               -circle[cIndex].CAO - (2. * (2. * Math.PI / 360.)),
                               -circle[cIndex].CAO + (2. * (2. * Math.PI / 360.)),
                               1, 1, 1);
                my_js_draw_circle(circle[cIndex].x * scale, circle[cIndex].y * scale,
                                  5, 1, 0, 1);
                
            } else {
                my_js_draw_circle(circle[cIndex].x * scale, circle[cIndex].y * scale,
                                  5, 1, 1, 1);
                my_js_draw_line(circle[cIndex].x * scale, circle[cIndex].y * scale,
                                (circle[cIndex].x + (Math.cos(circle[cIndex - 1].CAO) * circle[cIndex].radius)) * scale,
                                (circle[cIndex].y + (Math.sin(circle[cIndex - 1].CAO) * circle[cIndex].radius)) * scale,
                                1, 1, 1);
                
            }
        }
        if (!animateCircle && !stop && !paused) {
            my_js_draw_circle(circle[circleCount-1].x * scale, circle[circleCount-1].y * scale,
                              5, 1, 1, 1);
        }
    }

    nSteps++;
    theta = theta + theta_step_size;

}

function show_status() {
    var convTheta = Math.round(convergeTheta/Math.PI/2);
    var thetaF = Math.round(theta*360./Math.PI/2.);
    var percent = Math.round(theta/convergeTheta*100);
    cycles = Math.floor(theta / convergeTheta);
    
    text = "  Converge Angle: " + convTheta.toString() + " * 360 " + "(" + convTheta * 360 +")" + " Theta: " + thetaF.toString().padStart(5) +
        " " + percent.toString().padStart(3) + "% " + " Cycles:" + cycles.toString().padStart(2) + " Steps per frame: " +
        step_per_frame_input + "    audio file filled: " + audioFillPercent + "%";
    document.getElementById("statusString").innerHTML = text;
}

// Main animation loop

function animate() {
    for (var i = 0; i < STEP_PER_FRAME; i++) {
        step();
    }

    show_status();
    
    // animation toggle 
    if (cycles > currentCycles) {
        currentCycles = cycles;
        if ( animateState == 2) {
            if (animateCircle) {
                animateCircle = false;
            } else {
                animateCircle = true;
            }
        }
    }

    // If clearing process is done, reset clear
    if (clear) {
        clear = false;
    }
    if (!stop && !paused) {
        requestAnimationFrame(animate);
    } else {
        stop = false;
        clear = false;
        drawing = false;
        paused = false;
    }    
}

show_status();
