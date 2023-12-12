var count = 0;
let opt1text = "";
let opt2text = "";
let choice = true;

var health = 20;
var economy = 20;
var growth = 20;
var security = 20;
var environment = 80;

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
        
        case 2:
            opt1text = "Villages";
            opt2text = "Weapons";
            break;
        
        case 3:
            opt1text = "Writing";
            opt2text = "Boats";
            break;

        case 4:
            opt1text = "Metallurgy";
            opt2text = "Irrigation Systems";
            break;
        case 5:
            opt1text = "Medicine";
            opt2text = "Trade Networks";
            break;
        case 6:
            opt1text = "Glassmaking";
            opt2text = "Surgical Tools";
            break;
        case 7:
            opt1text = "Sundials and Water Clocks";
            opt2text = "Urban Planning";
            break;
        case 8:
            opt1text = "";
            opt2text = "";
            break;
        case 9:
            opt1text = "";
            opt2text = "";
            break;
        case 10:
            opt1text = "";
            opt2text = "";
            break;
        case 11:
            opt1text = "";
            opt2text = "";
            break;
        case 12:
            opt1text = "";
            opt2text = "";
            break;
        case 7000000:
            opt1text = "";
            opt2text = "";
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
    } else if (economy >= 100 || economy <= 0) {
        window.location.href = 'https://HON150PROJECT.github.io/lost';
        document.querySelector("#error").innerHTML = "this code ran";
    } else if (growth >= 100 || growth <= 0) {
        window.location.href = 'https://HON150PROJECT.github.io/lost';
        document.querySelector("#error").innerHTML = "this code ran";
    } else if (security >= 100 || security <= 0) {
        window.location.href = 'https://HON150PROJECT.github.io/lost';
        document.querySelector("#error").innerHTML = "this code ran";
    } else if (environment >= 100 || environment <= 0) {
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
                growth += 5;
            } else if (choice == false) {
                growth += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 1:
            if (choice == true) {
                growth += 10;
            } else if (choice == false) {
                growth += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 2:
            if (choice == true) {
                growth += 10;
            } else if (choice == false) {
                growth += (-5);
                security += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 3:
            break;
        case 4:
            if (choice == true) {
                economy += 10;
                security += 10;
            } else if (choice == false) {
                growth += 10;
                economy += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 5:
            if (choice == true) {
                growth += 5;
                health += 10;
            } else if (choice == false) {
                economy += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 6:
            if (choice == true) {
                economy += 5;
            } else if (choice == false) {
                economy += 5;
                health += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 7:
            if (choice == true) {
                economy += 5;
            } else if (choice == false) {
                growth += 5;
                security += 10;
                economy += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 8:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 9:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 10:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 11:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 12:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 70000000:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        default:
            break;

    }

    
    Era(count);
    count += 1;

}

function guide() {

    window.location.href = 'https://HON150PROJECT.github.io/guide';

}

function Era(count) {

    if (count <= 1) {
        document.querySelector("#header").innerHTML = "TRIBAL ERA";
        
        document.querySelector("#growth").innerHTML = "Growth: " + growth;
    } else if (count > 1 && count <= 3) {
        document.querySelector("#header").innerHTML = "TRIBAL ERA";

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
    } else if (count > 3 && count <= 4) {
        document.querySelector("#header").innerHTML = "BRONZE ERA";

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
        document.querySelector("#economy").innerHTML = "Economy: " + economy;
    } else if (count > 4 && count <= 7) {
        document.querySelector("#header").innerHTML = "BRONZE ERA";

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
        document.querySelector("#economy").innerHTML = "Economy: " + economy;
        document.querySelector("#health").innerHTML = "Health: " + health;
    } else if (count > 7 && count <= 12) {
        document.querySelector("#header").innerHTML = "IRON ERA";
        document.getElementById("mainImage").src = "res/medevil.jpg";

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
        document.querySelector("#economy").innerHTML = "Economy: " + economy;
        document.querySelector("#health").innerHTML = "Health: " + health;
    }


    //document.querySelector("#environment").innerHTML = "Environment: " + environment;

}