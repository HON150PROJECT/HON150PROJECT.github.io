var count = 0;
let opt1text = "";
let opt2text = "";
let choice = true;

var health = 20;
var economy = 20;
var growth = 20;
var security = 20;
var environment = 20;

cycle();

function cycle() {    

    switch (count) {

        case 0:
            opt1text = "Fire";
            opt2text = "Stone Tools";
            break;
            
        case 1:
            opt1text = "Agriculture";
            opt2text = "Pottery";
            break;
    
        default:
            opt1text = "error";
            opt2text = "error";
            break;
    
    }

    document.querySelector("#opt1").innerHTML = opt1text;
    document.querySelector("#opt2").innerHTML = opt2text;
    
    if (health >= 100 || health <= 0) {
        window.location.href = 'https://HON150PROJECT.github.io/lost';
        document.querySelector("#error").innerHTML = "this code ran";
    } else {
        document.querySelector("error").innerHTML = "didnt run";
    }

}

function opt1() {

    choice = true;
    checkList(choice);
    cycle();
    //document.querySelector("#check").innerHTML = "opt 1, count" + (count - 1);


}

function opt2() {

    choice = false;
    checkList(choice);
    //document.querySelector('#error').innerHTML = choice;
    cycle();
    //document.querySelector("#check").innerHTML = "opt 2, count:" + (count - 1);

}

function checkList(choice) {

    switch (count) {

        case 0:
            if (choice == true) {
                health += 1;
            } else if (choice == false) {
                health = health - 1;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        default:
            break;

    }

    document.querySelector("#health").innerHTML = "Health: " + health;
    document.querySelector("#economy").innerHTML = "Economy: " + economy;
    document.querySelector("#growth").innerHTML = "Growth: " + growth;
    document.querySelector("#security").innerHTML = "Security: " + security;
    document.querySelector("#environment").innerHTML = "Environment: " + environment;

    //count += 1

}

function guide() {

    window.location.href = 'https://HON150PROJECT.github.io/guide';

}