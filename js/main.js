var count = 0;
let opt1text = "";
let opt2text = "";
let choice = true;

var health = 0;
var economy = 0;
var growth = 0;
var security = 0;
var environment = 0;

function cycle() {

    switch (count) {

        case 0:
            opt1text = "Choice Option 1";
            opt2text = "Choice Option 2";
            break;
        default:
            opt1text = "error";
            opt2text = "error";
            break;
    
    }
    
    document.querySelector("#opt1").innerHTML = "#" + "opt1text";
    document.querySelector("#opt2").innerHTML = "#" + "opt2text";

    count += 1
}

function opt1() {

    choice = true;
    checkList();
    document.querySelector("#check").innerHTML = "opt 1";


}

function opt2() {

    choice = false;
    checkList();
    document.querySelector("#check").innerHTML = "opt 2";

}

function checkList() {

    switch (count) {

        case 0:
            if (choice = true) {
                health += 1;
            } else if (choice = false) {
                health -= 1;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        default:
            break;

    }

}