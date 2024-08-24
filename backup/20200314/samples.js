// MCHT Samples
// Author: Alexander Y. Chang
// Copyright (c) 2019-2020

function selectSample(value) {
    console.log("selectSample(%s)", value);
    var radiusForm = document.getElementById("radiusFormID");
    var speedForm = document.getElementById("speedFormID");
    var parametersForm = document.getElementById("parametersFormID");
    
    switch (value) {
    case "MTri1":
        step_per_frame_input = 30;
        update_step_per_frame();	
        parametersForm.elements[0].value = 1; // scale
        parametersForm.elements[1].value = 40; // colorFactor

        radiusForm.elements[0].value = "6";
        radiusForm.elements[1].value = "5";
        radiusForm.elements[2].value = "4";
        radiusForm.elements[3].value = "0";
        
        speedForm.elements[0].value = "4";        
        speedForm.elements[1].value = "-3";
        speedForm.elements[2].value = "0";
        break;

    case "MTri2":
        step_per_frame_input = 30;
        update_step_per_frame();		
        parametersForm.elements[0].value = 1; // scale
        parametersForm.elements[1].value = 40; // colorFactor

        radiusForm.elements[0].value = "6";
        radiusForm.elements[1].value = "5";
        radiusForm.elements[2].value = "4";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "4";        
        speedForm.elements[1].value = "-4";
        speedForm.elements[2].value = "0";
        break;
        
    case "MTri3":
        radiusForm.elements[0].value = "6";
        radiusForm.elements[1].value = "5";
        radiusForm.elements[2].value = "4";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "3";        
        speedForm.elements[1].value = "-2";
        speedForm.elements[2].value = "0";
        break;

    case "mTri1":
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "12";
        radiusForm.elements[2].value = "10";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "1";        
        speedForm.elements[1].value = "-1";
        speedForm.elements[2].value = "0";
        break;

    case "mTri2": 
	radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "12";
        radiusForm.elements[2].value = "10";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-5";
        speedForm.elements[2].value = "0";
	break;

    case "mTri3":
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "12";
        radiusForm.elements[2].value = "10";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "7";
        speedForm.elements[1].value = "-5";
        speedForm.elements[2].value = "0";
        break;


    case "mTriInv1":
        step_per_frame_input = 30;
        update_step_per_frame();		
        parametersForm.elements[0].value = 1.5; // scale
        parametersForm.elements[1].value = 3; // colorFactor
	
        radiusForm.elements[0].value = "20";
        radiusForm.elements[1].value = "15";
        radiusForm.elements[2].value = "12";
        radiusForm.elements[3].value = "-15";

        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-4";
        speedForm.elements[2].value = "0";
        break;

    case "M7Tri":
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "10";
        radiusForm.elements[2].value = "8";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "3";        
        speedForm.elements[1].value = "-4";
        speedForm.elements[2].value = "0";
        break;

    case "RtoL2":
        radiusForm.elements[0].value = "4";
        radiusForm.elements[1].value = "3";
        radiusForm.elements[2].value = "2";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "2";        
        speedForm.elements[1].value = "-1";
        speedForm.elements[2].value = "0";
        break;

    case "RtoL3":
        radiusForm.elements[0].value = "2";
        radiusForm.elements[1].value = "6";
        radiusForm.elements[2].value = "-4";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "1";        
        speedForm.elements[1].value = "-2";
        speedForm.elements[2].value = "0";
        break;        

    case "Negative1":
        radiusForm.elements[0].value = "12";
        radiusForm.elements[1].value = "-2";
        radiusForm.elements[2].value = "-3";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "2";
        speedForm.elements[2].value = "0";
        break;

    case "Negative2":
        radiusForm.elements[0].value = "2";
        radiusForm.elements[1].value = "-6";
        radiusForm.elements[2].value = "1";
        radiusForm.elements[3].value = "-.5";

        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "24";        
        speedForm.elements[2].value = "0";
        break;

    case "Negative3":
        radiusForm.elements[0].value = "2";
        radiusForm.elements[1].value = "-17";
        radiusForm.elements[2].value = "4";
        radiusForm.elements[3].value = "0";

        speedForm.elements[0].value = "-1";    
        speedForm.elements[1].value = "-6";
        speedForm.elements[2].value = "0";
        break;
    }
}

function selectSample2(value) {
    console.log("selectSample2(%s)", value);
    var radiusForm = document.getElementById("radiusFormID");
    var speedForm = document.getElementById("speedFormID");    
    var parametersForm = document.getElementById("parametersFormID");

    switch (value) {
    case "m2":
        step_per_frame_input = 60;
        update_step_per_frame();
        parametersForm.elements[0].value = 1;  // scale
        parametersForm.elements[1].value = 40; // colorFactor
        
        radiusForm.elements[0].value = "16";
        radiusForm.elements[1].value = "15";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "M2":
        radiusForm.elements[0].value = "9";
        radiusForm.elements[1].value = "8";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "m3":
        radiusForm.elements[0].value = "6";
        radiusForm.elements[1].value = "5";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "M3":
        radiusForm.elements[0].value = "5";
        radiusForm.elements[1].value = "4";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "4th":
        radiusForm.elements[0].value = "4";
        radiusForm.elements[1].value = "3";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "5th":
        radiusForm.elements[0].value = "3";
        radiusForm.elements[1].value = "2";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "m6":
        radiusForm.elements[0].value = "8";
        radiusForm.elements[1].value = "5";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "M6":
        radiusForm.elements[0].value = "5";
        radiusForm.elements[1].value = "3";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "m7":
        radiusForm.elements[0].value = "16";
        radiusForm.elements[1].value = "9";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    case "M7":
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "8";
        radiusForm.elements[2].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        break;
    }
}

function selectSample3(value) {
    console.log("selectSample3(%s)", value);
    var radiusForm = document.getElementById("radiusFormID");
    var speedForm = document.getElementById("speedFormID");    
    var parametersForm = document.getElementById("parametersFormID");

    switch (value) {
    case "s1":
        step_per_frame_input = 60;
        update_step_per_frame();
        parametersForm.elements[0].value = 1;
        parametersForm.elements[1].value = 40;
        
        radiusForm.elements[0].value = "8";
        radiusForm.elements[1].value = "5";
        radiusForm.elements[2].value = "4";
        radiusForm.elements[3].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "-5";
        speedForm.elements[2].value = "0";
        break;

    case "s41":
        step_per_frame_input = 30;
        update_step_per_frame();
        parametersForm.elements[0].value = 1.5;
        parametersForm.elements[1].value = 7;
        
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "12";
        radiusForm.elements[2].value = "10";
        radiusForm.elements[3].value = "5";
	radiusForm.elements[4].value = "1";
        
        speedForm.elements[0].value = "7";
        speedForm.elements[1].value = "-5";
        speedForm.elements[2].value = "90";
	speedForm.elements[3].value = "0";
        break;

    case "s42":
        step_per_frame_input = 60;
        update_step_per_frame();
        parametersForm.elements[0].value = 1.5;
        parametersForm.elements[1].value = 15;
        
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "12";
        radiusForm.elements[2].value = "10";
        radiusForm.elements[3].value = "5";
	radiusForm.elements[4].value = "1";
        
        speedForm.elements[0].value = "7";
        speedForm.elements[1].value = "-5";
        speedForm.elements[2].value = "4";
	speedForm.elements[3].value = "0";
        break;

    case "s43":
        step_per_frame_input = 40;
        update_step_per_frame();
        parametersForm.elements[0].value = 1.5;
        parametersForm.elements[1].value = 7;
        
        radiusForm.elements[0].value = "15";
        radiusForm.elements[1].value = "12";
        radiusForm.elements[2].value = "10";
        radiusForm.elements[3].value = "5";
	radiusForm.elements[4].value = "1";
        
        speedForm.elements[0].value = "7";
        speedForm.elements[1].value = "-5";
        speedForm.elements[2].value = "1";
	speedForm.elements[3].value = "0";
        break;

    case "s44":
        step_per_frame_input = 10;
        update_step_per_frame();
        parametersForm.elements[0].value = 1.3;
        parametersForm.elements[1].value = 12;
        
        radiusForm.elements[0].value = "20";
        radiusForm.elements[1].value = "15";
        radiusForm.elements[2].value = "12";
        radiusForm.elements[3].value = "13";
	radiusForm.elements[4].value = "-3";
        
        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-4";
        speedForm.elements[2].value = "13";
	speedForm.elements[3].value = "0";
        break;

    case "s45":
        step_per_frame_input = 80;
        update_step_per_frame();
        parametersForm.elements[0].value = 1;
        parametersForm.elements[1].value = 3;
        
        radiusForm.elements[0].value = "20";
        radiusForm.elements[1].value = "15";
        radiusForm.elements[2].value = "12";
        radiusForm.elements[3].value = "11.5";
	radiusForm.elements[4].value = "11.5";
        
        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-4";
        speedForm.elements[2].value = "99";
	speedForm.elements[3].value = "0";
        break;

    case "fcf1":
        step_per_frame_input = 120;
        update_step_per_frame();
        parametersForm.elements[0].value = 1;
        parametersForm.elements[1].value = 40;
        
        radiusForm.elements[0].value = "7";
        radiusForm.elements[1].value = "6";
        radiusForm.elements[2].value = "5";
        radiusForm.elements[3].value = "0";
        
        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-3";
        speedForm.elements[2].value = "-0";
        break;
        
    case "fcf2":
        step_per_frame_input = 140;
        update_step_per_frame();
        parametersForm.elements[0].value = .5; // scale
        parametersForm.elements[1].value = 40; // colorFactor
        
        radiusForm.elements[0].value = "7";
        radiusForm.elements[1].value = "6";
        radiusForm.elements[2].value = "5";
        radiusForm.elements[3].value = "-10";
        
        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-3";
        speedForm.elements[2].value = "-0";
        break;
        
    case "s2":
        step_per_frame_input = 120;
        update_step_per_frame();
        parametersForm.elements[0].value = 1;
        
        radiusForm.elements[0].value = "7";
        radiusForm.elements[1].value = "6";
        radiusForm.elements[2].value = "-1";
        radiusForm.elements[3].value = "0";
        
        speedForm.elements[0].value = "4";
        speedForm.elements[1].value = "-11";
        speedForm.elements[2].value = "0";
        break;
        
    case "s3":
        step_per_frame_input = 120;
        update_step_per_frame();
        parametersForm.elements[0].value = 1;
        parametersForm.elements[1].value = 1; //colorFactor
        
        radiusForm.elements[0].value = "61";
        radiusForm.elements[1].value = "29";
        radiusForm.elements[2].value = "14";
        radiusForm.elements[3].value = "0";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "0";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta":
        step_per_frame_input = 10;
        update_step_per_frame();
        parametersForm.elements[0].value = .2; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "-10";
        radiusForm.elements[3].value = "-10";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "-20";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta1":
        step_per_frame_input = 1;
        update_step_per_frame();
        parametersForm.elements[0].value = .1; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "39.75";
        radiusForm.elements[3].value = "-20";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "-159";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta2":
        step_per_frame_input = 4;
        update_step_per_frame();
        parametersForm.elements[0].value = .2; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "-10";
        radiusForm.elements[3].value = "-10";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "161";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta3":
        step_per_frame_input = 4;
        update_step_per_frame();
        parametersForm.elements[0].value = .2; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "-10";
        radiusForm.elements[3].value = "-10";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "321";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta4":
        step_per_frame_input = 4;
        update_step_per_frame();
        parametersForm.elements[0].value = .2; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "-10";
        radiusForm.elements[3].value = "-10";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "-319";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta5":
        step_per_frame_input = 4;
        update_step_per_frame();
        parametersForm.elements[0].value = .1; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "40.5";
        radiusForm.elements[3].value = "20";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "81";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta6":
        step_per_frame_input = 1;
        update_step_per_frame();
        parametersForm.elements[0].value = .1; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "40.416666";
        radiusForm.elements[3].value = "20";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "97";
        speedForm.elements[2].value = "0";
        break;
    case "Rosetta7":
        step_per_frame_input = 1;
        update_step_per_frame();
        parametersForm.elements[0].value = .1; // scale
        parametersForm.elements[1].value = 1; // colorFactor
        
        radiusForm.elements[0].value = "10";
        radiusForm.elements[1].value = "80";
        radiusForm.elements[2].value = "41";
        radiusForm.elements[3].value = "20";
        
        speedForm.elements[0].value = "1";
        speedForm.elements[1].value = "41";
        speedForm.elements[2].value = "0";
        break;	
    }
}
