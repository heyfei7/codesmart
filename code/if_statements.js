//Teach if statements through a click-based game

var level = 1;
var points = 0;

var if_pressed = false;
var elseif_pressed = false;
var else_pressed = false;
var buttons = new Array(4);

var levelvariables = {
    1 : "cookies",
    2 : "chocolate",
    3 : "candies"
};

var leveloutcomes = {
    "0-4" : "sad",
    "5-9" : "happy",
    "10+" : "sick"
}; //1 : "5-9" ; 2 : "0-4", "5-9"; 3 : "0-4", "5-9", "10+"



var allbuttonanswers = [["if", "else if", "else"], ["cookies", "candies", "chocolates"], ["0-4", "5-9", "10+"], ["happy", "sad", "sick"]];

// var allbuttons = result of a function in html;

function check_buttons(allbuttons) {
    //add in a block to check, if elseif_pressed, then else_pressed too
    if (allbuttons[0] == "if") {
        if_pressed = true;
    }
    else if (allbuttons[0] == "else if") {
        if (!if_pressed) {
            return false;
        }
        
        elseif_pressed = true;
    }
    else if (allbuttons[0] == "else") {
        if (!if_pressed) {
            return false;
        }
        else_pressed = true;
    }
    else {
        return false;
    }
    
    if (allbuttons[1] != levelvariables[level]) {
        return false;
    }
    if (allbuttons[3] != levelvariables[allbuttons[2]]) {
        return false;
    }
    return true;
}
