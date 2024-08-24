var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(a,c,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,c,b,d){if(c){b=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in b||(b[e]={});b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("String.prototype.repeat",function(a){return a?a:function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c}},"es6","es3");$jscomp.stringPadding=function(a,c){a=void 0!==a?String(a):" ";return 0<c&&a?a.repeat(Math.ceil(c/a.length)).substring(0,c):""};
$jscomp.polyfill("String.prototype.padStart",function(a){return a?a:function(a,b){var c=$jscomp.checkStringArgs(this,null,"padStart");return $jscomp.stringPadding(b,a-c.length)+c}},"es8","es3");var circle_c=function(a,c,b){this.radius=Number(a);this.speedRatio=Number(c);this.IAO=Number(b);this.CAO=Number(0);this.theta=Number(0);this.alpha=Number(0);this.x=Number(0);this.y=Number(0);this.initX=Number(0);this.initY=Number(0)};my_js_init();
var X_CORD_SIZE=500,SCALE=xsize/X_CORD_SIZE,STEP=1/SCALE,step_per_frame_input=30,STEP_PER_FRAME=30,theta_step_size=.003,nSteps=0,theta=0,circleCount=0,animateCircle=!0,stop=!1,clear=!1,drawing=!1,currentCycles=0,animateState=2,convergeTheta=2*Math.PI,colorFactor=30;my_js_set_canvas(cc);function my_js_canvas_test(){my_js_draw_line(50,300,300,100,255,0,255);for(var a=0;500>a;a++)my_js_draw_circle(Math.random()*window.innerWidth,Math.random()*window.innerHeight,30,50,50,0)}var circle=[];
function reset(){currentCycles=theta=nSteps=0;animateState=2;document.getElementById("sel1").value="animateToggle"}function isAligned(){for(var a=1;a<circleCount;a++)if(1E-4<Math.abs(circle[a].x-circle[a].initX)||1E-4<Math.abs(circle[a].y-circle[a].initY))return!1;return!0}
function getConvergePoint(){evaluate(0);for(var a=1;a<circleCount;a++)circle[a].initX=circle[a].x,circle[a].initY=circle[a].y;console.log("evaluated");for(a=1;1E4>a;a++)if(evaluate(2*a*Math.PI),isAligned())return 2*a*Math.PI;console.log("cannot find converging angle");return 0}
function clickDraw(){if(!drawing){drawing=!0;var a=document.getElementById("radiusFormID"),c=document.getElementById("speedFormID"),b,d=1;circle=[];for(b=0;b<a.length&&0!=d;b++){var e=a.elements[b].value;d=0<b?c.elements[b-1].value:1;mycircle=new circle_c(e,d,0);circle.push(mycircle)}circleCount=circle.length;mycircle=new circle_c(0,0);circle.push(mycircle);mycircle=new circle_c(0,0);circle.push(mycircle);console.log("values = %d, %d",a.elements[0].value,a.elements[1].value);console.log("circle = %d, %d",
circle[0].radius,circle[1].radius);console.log("circleCount %d",circleCount);convergeTheta=getConvergePoint();parametersForm=document.getElementById("parametersFormID");inputScale=parametersForm.elements[0].value;colorFactor=parametersForm.elements[1].value;a=circle[0].radius;for(b=1;b<circleCount-1;b++)0>circle[b].radius&&(a-=2*circle[b].radius);0<circle[circleCount-1].radius&&(a-=circle[circleCount-1].radius);scale=250/a*inputScale;animateCircle=!0;reset();animate()}}
function update_step_per_frame(){0<step_per_frame_input?(STEP_PER_FRAME=step_per_frame_input,theta_step_size=.003):0>step_per_frame_input?(STEP_PER_FRAME=-step_per_frame_input,theta_step_size=-.003):theta_step_size=0}function clickSpeedUp(){step_per_frame_input++;update_step_per_frame()}function clickSlowDown(){step_per_frame_input--;update_step_per_frame()}function clickClear(){drawing?(bc.clearRect(0,0,innerWidth,innerHeight),clear=stop=!0,animateCircle=!1,reset()):clear=!0}var paused=!1;
function clickPause(){drawing?paused=!0:(drawing=!0,animate())}function clickStop(){drawing&&(stop=!0);animateCircle=!1;reset()}function clickAnimate(){animateState=2;document.getElementById("sel1").value="animateToggle";animateCircle=animateCircle?!1:!0}
function selectAnimation(a){console.log("selectAnimation(%s)",a);var c=document.getElementById("sel1");"animateOn"==a?(animateOn(),c.value="animateOn",console.log("animateOn")):"animateOff"==a?(animateOff(),c.value="animateOff",console.log("animateOff")):(animateToggle(),c.value="animateToggle",console.log("animateToggle"))}function animateOn(){animateState=1;animateCircle=!0}function animateOff(){animateState=0;animateCircle=!1}function animateToggle(){animateState=2}
window.addEventListener("wheel",wheelScrolling);function wheelScrolling(a){0>a.deltaY?(console.log("scrolling up"),step_per_frame_input++,update_step_per_frame()):0<a.deltaY&&(console.log("scrolling down"),step_per_frame_input--,update_step_per_frame())}
function evaluate(a){circle[0].theta=a;for(a=0;a<circleCount;a++)circle[a+1].alpha=-1*circle[a].theta*circle[a].radius/circle[a+1].radius,circle[a+1].CAO=circle[a+1].alpha+circle[a].theta+circle[a].CAO+circle[a+1].IAO,circle[a+1].theta=circle[0].theta*circle[0].radius*circle[a+2].speedRatio/circle[1].speedRatio/circle[a+1].radius,circle[a+1].x=circle[a].x+(circle[a].radius-circle[a+1].radius)*Math.cos(circle[a].theta+circle[a].CAO),circle[a+1].y=circle[a].y+(circle[a].radius-circle[a+1].radius)*Math.sin(circle[a].theta+
circle[a].CAO)}
function step(){var a=(Math.sin(theta/colorFactor)+1)/2;a*=a;var c=(Math.sin(theta/colorFactor+2*Math.PI/4)+1)/2;c*=c;c*=c;var b=(Math.sin(theta/colorFactor+4*Math.PI/4)+1)/2;b*=b;var d=(Math.sin(theta/colorFactor+6*Math.PI/4)+1)/2;d*=d;d*=d;a=a*a+5*c/6;b=b*b+5*c/6;evaluate(theta);var e=circle[circleCount-1].x*scale;c=circle[circleCount-1].y*scale;clear&&(console.log("Clearing"),bc.clearRect(0,0,innerWidth,innerHeight));clear||stop||0==nSteps||(my_js_set_canvas(bc),my_js_draw_line(e,c,step.x1,step.y1,
a,b,d));step.x1=e;step.y1=c;if(0==nSteps%STEP_PER_FRAME){cc.clearRect(0,0,innerWidth,innerHeight);cc.drawImage(backCanvas,0,0);cc.drawImage(backCanvas,0,0);my_js_set_canvas(cc);for(a=0;animateCircle&&a<circleCount;a++)a!=circleCount-1?(my_js_draw_circle(circle[a].x*scale,circle[a].y*scale,circle[a].radius*scale,1,0,1),my_js_draw_arc(circle[a].x*scale,circle[a].y*scale,circle[a].radius*scale,-circle[a].CAO-2*Math.PI/360*2,-circle[a].CAO+2*Math.PI/360*2,1,1,1)):(my_js_draw_circle(circle[a].x*scale,
circle[a].y*scale,5,1,1,1),my_js_draw_line(circle[a].x*scale,circle[a].y*scale,(circle[a].x+Math.cos(circle[a-1].CAO)*circle[a].radius)*scale,(circle[a].y+Math.sin(circle[a-1].CAO)*circle[a].radius)*scale,1,1,1));animateCircle||stop||paused||my_js_draw_circle(circle[circleCount-1].x*scale,circle[circleCount-1].y*scale,5,1,1,1)}nSteps++;theta+=theta_step_size}
function animate(){for(var a=0;a<STEP_PER_FRAME;a++)step();a=Math.round(360*convergeTheta/Math.PI/2);var c=Math.round(360*theta/Math.PI/2),b=Math.round(theta/convergeTheta*100);cycles=Math.floor(theta/convergeTheta);text=" Converge Angle: "+a.toString()+" Theta: "+c.toString().padStart(5)+" "+b.toString().padStart(3)+"%  Cycles:"+cycles.toString().padStart(2)+" Steps per frame: "+step_per_frame_input;document.getElementById("statusString").innerHTML=text;cycles>currentCycles&&(currentCycles=cycles,
2==animateState&&(animateCircle=animateCircle?!1:!0));clear&&(clear=!1);stop||paused?paused=drawing=clear=stop=!1:requestAnimationFrame(animate)};
