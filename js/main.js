var count = 0;
let opt1text = "";
let opt2text = "";
let opt3text = "";
let opt4text = "";
let opt5text = "";
let choice = true;
let final = "";

var health = 20;
var economy = 20;
var growth = 20;
var security = 20;
var environment = 80;

let lostCause = "";
let era = "";

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
            opt1text = "Iron Smelting";
            opt2text = "Watermills";
            break;
        case 9:
            opt1text = "Crossbow";
            opt2text = "Horse Collar";
            break;
        case 10:
            opt1text = "Astrolabe";
            opt2text = "Coinage";
            break;
        case 11:
            opt1text = "Universities";
            opt2text = "Castles";
            break;
        case 12:
            opt1text = "Blast Furnace";
            opt2text = "Firearms";
            break;
        case 13:
            opt1text = "Steam Engine";
            opt2text = "Cotton Gin";
            break;
        case 14:
            opt1text = "Bessemer Process";
            opt2text = "Railroads";
            break;
        case 15:
            opt1text = "Refridgeration";
            opt2text = "Electricity";
            break;
        case 16:
            opt1text = "Assembly Line";
            opt2text = "Automobile";
            break;
        case 17:
            opt1text = "Plastic";
            opt2text = "Airplanes";
            break;
        case 18:
            opt1text = "Penicillin";
            opt2text = "Nylon";
            break;
        case 19:
            opt1text = "Polyethylene";
            opt2text = "Commercial Aviation";
            break;
        case 20:
            opt1text = "Nuclear Fission";
            opt2text = "Computers";
            break;
        case 21:
            opt1text = "Space Exploration";
            opt2text = "Machine Learning";
            break;
        case 22:
            opt1text = "Internet";
            opt2text = "Microprocessors";
            break;
        case 23:
            opt1text = "Smartphone";
            opt2text = "Wikipedia";
            break;
        case 24:
            opt1text = "Cryptocurrencies";
            opt2text = "CRISPR";
            break;
        case 25:
            opt1text = "AGI: Artificial Genderal Intelligence";
            opt2text = "Nuclear Fusion";
            opt3text = "Genetic Engineering";
            opt4text = "Nanotechnology";
            opt5text = "Brain Implants";
            document.getElementById("sec3").removeAttribute("hidden");
            document.getElementById("sec4").removeAttribute("hidden");
            document.getElementById("sec5").removeAttribute("hidden");
            document.getElementById("button3").removeAttribute("hidden");
            document.getElementById("button4").removeAttribute("hidden");
            document.getElementById("button5").removeAttribute("hidden");
            break;
        default:
            opt1text = "error";
            opt2text = "error";
            break;
    
    }

    document.querySelector("#opt1").innerHTML = opt1text;
    document.querySelector("#opt2").innerHTML = opt2text;
    document.querySelector("#opt3").innerHTML = opt3text;
    document.querySelector("#opt4").innerHTML = opt4text;
    document.querySelector("#opt5").innerHTML = opt5text;
    //window.location.href = 'https://HON150PROJECT.github.io/lost';

    if (health >= 100 || health <= 0) {
        lostCause = "health";
        lost(era, lostCause);
    } else if (economy >= 100 || economy <= 0) {
        lostCause = "economy";
        lost(era, lostCause);
    } else if (growth >= 100 || growth <= 0) {
        lostCause = "growth";
        lost(era, lostCause);
    } else if (security >= 100 || security <= 0) {
        lostCause = "security";
        lost(era, lostCause);
    } else if (environment >= 100 || environment <= 0) {
        lostCause = "environment";
        lost(era, lostCause);
    } else {
        document.querySelector("error").innerHTML = "didnt run";
    }

}

function opt1() {

    choice = true;
    final = "1";
    checkList(choice);
    cycle();
    //document.querySelector("#check").innerHTML = "opt 1, count" + (count - 1);


}

function opt2() {

    choice = false;
    final = "2";
    checkList(choice);
    //document.querySelector('#error').innerHTML = choice;
    cycle();
    //document.querySelector("#check").innerHTML = "opt 2, count:" + (count - 1);

}

function opt3() {

    final = "3";
    checkList(choice);

}

function opt4() {

    final = "4";
    checkList(choice);

}

function opt5() {

    final = "5";
    checkList(choice);

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
                economy += 10;
                security += 10;
            } else if (choice == false) {
                economy += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 9:
            if (choice == true) {
                security += 5;
            } else if (choice == false) {
                economy += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 10:
            if (choice == true) {
                economy += 5;
            } else if (choice == false) {
                economy += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 11:
            if (choice == true) {
                economy += 5;
                health += 5;
            } else if (choice == false) {
                security += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 12:
            if (choice == true) {
                economy += 5;
            } else if (choice == false) {
                security += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 13:
            if (choice == true) {
                economy += 5;
                environment += -5;
            } else if (choice == false) {
                economy += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 14:
            if (choice == true) {
                economy += 5;
            } else if (choice == false) {
                economy += 10;
                environment += -5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 15:
            if (choice == true) {
                health += 5;
            } else if (choice == false) {
                economy += 10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 16:
            if (choice == true) {
                economy += 10;
            } else if (choice == false) {
                economy += 5;
                environment += -10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 17:
            if (choice == true) {
                economy += 10;
                environment += -10;
            } else if (choice == false) {
                economy += 5;
                environment += -5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 18:
            if (choice == true) {
                health += 10;
            } else if (choice == false) {
                economy += 5;
                environment += -5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 19:
            if (choice == true) {
                economy += 5;
                environment += -15;
            } else if (choice == false) {
                economy += 5;
                environment += -10;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 20:
            if (choice == true) {
                environment += 10;
                security += -10;
            } else if (choice == false) {
                economy += 5;
            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 21:
            if (choice == true) {
                security += -5;
                environment += -5;
                economy += -10;
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 22:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 23:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 24:
            if (choice == true) {
                
            } else if (choice == false) {

            } else {
                document.querySelector("#error").innerhtml = "ERROR: 0, CHOICE ERROR"
            }
            break;
        case 25:

            if (final == "1") {
                //AGI: The AGI deems that humans are preventing technology from progressing as fast as it could be without them and decides to exterminate them.
                
                document.getElementById("header").innerHTML = "AGI ENDING";
                document.getElementById("mainImage").src = "res/ai_ending.png";
                document.getElementById("lost").innerHTML = "The AGI deems that humans are preventing technology from progressing as fast as it could be without them and decides to exterminate them.";
                
                document.getElementById("main").setAttribute("hidden", "hidden");
                document.getElementById("jump").setAttribute("hidden", "hidden");

            } else if (final == "2") {
                //Nuclear Fusion: Developments in thermonuclear weapons lead to the mutually assured destruction of humans.
                
                document.getElementById("header").innerHTML = "NUCLEAR ENDING";
                document.getElementById("mainImage").src = "res/nuke_ending.png";
                document.getElementById("lost").innerHTML = "Developments in thermonuclear weapons lead to the mutually assured destruction of humans.";
                
                document.getElementById("main").setAttribute("hidden", "hidden");
                document.getElementById("jump").setAttribute("hidden", "hidden");

            } else if (final == "3") {
                //Genetic Engineering: The engineering of DNA leads to humans and many other organisms becoming mere engineered products.

                document.getElementById("header").innerHTML = "GENETIC MODIFICATION ENDING";
                document.getElementById("mainImage").src = "res/gene_ending.png";
                document.getElementById("lost").innerHTML = "The engineering of DNA leads to humans and many other organisms becoming mere engineered products.";
                
                document.getElementById("main").setAttribute("hidden", "hidden");
                document.getElementById("jump").setAttribute("hidden", "hidden");

            } else if (final == "4") {
                //Nanotechnology: Humans lose control of self-replicating nanobots developed from nanotechnology, which become a deadly unstoppable artificial pathogen.
                
                document.getElementById("header").innerHTML = "NANOTECHNOLOGY ENDING";
                document.getElementById("mainImage").src = "res/nano_ending.png";
                document.getElementById("lost").innerHTML = "Humans lose control of self-replicating nanobots developed from nanotechnology, which become a deadly unstoppable artificial pathogen.";
                
                document.getElementById("main").setAttribute("hidden", "hidden");
                document.getElementById("jump").setAttribute("hidden", "hidden");

            } else if (final == "5") {
                //Brain Implants: Brain implants eventually become required and lead to a mass panopticon effect, where every single aspect of one’s life is surveilled, including thought patterns.

                document.getElementById("header").innerHTML = "NEURAL IMPLANTS ENDING";
                document.getElementById("mainImage").src = "res/brain_ending.png";
                document.getElementById("lost").innerHTML = "Brain implants eventually become required and lead to a mass panopticon effect, where every single aspect of one's life is surveilled, including thought patterns.";
                
                document.getElementById("main").setAttribute("hidden", "hidden");
                document.getElementById("jump").setAttribute("hidden", "hidden");

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
        era = "tribal";
        
        document.querySelector("#growth").innerHTML = "Growth: " + growth;
    } else if (count > 1 && count <= 3) {
        document.querySelector("#header").innerHTML = "TRIBAL ERA";

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
    } else if (count > 3 && count <= 4) {
        document.querySelector("#header").innerHTML = "BRONZE ERA";
        era = "bronze";

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
        era = "iron";

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
        document.querySelector("#economy").innerHTML = "Economy: " + economy;
        document.querySelector("#health").innerHTML = "Health: " + health;
    } else if (count > 12 && count <= 17) {
        document.querySelector("#header").innerHTML = "INDUSTRIAL ERA";
        document.getElementById("mainImage").src = "res/industrial.jpg";
        era = "industrial"

        document.querySelector("#growth").innerHTML = "Growth: " + growth;
        document.querySelector("#security").innerHTML = "Security: " + security;
        document.querySelector("#economy").innerHTML = "Economy: " + economy;
        document.querySelector("#health").innerHTML = "Health: " + health;
        document.querySelector("#environment").innerHTML = "Environment: " + environment;
    }


}

function lost(era, cause) {

    if (era == "tribal") {
        document.getElementById("mainImage").src = "res/tribal_fire.jpg";

        if (cause == "growth") {
            document.querySelector("#lost").innerHTML = "YOU LOST: STARVATION";
        } else if (cause == "security") {
            document.querySelector("#lost").innerHTML = "YOU LOST: TRIBAL WARFARE";
        } 

    } else if (era == "bronze") {
        document.getElementById("mainImage").src = "res/tribal_fire.jpg";

        if (cause == "growth") {
            document.querySelector("#lost").innerHTML = "YOU LOST: STARVATION";
        } else if (cause == "security") {
            document.querySelector("#lost").innerHTML = "YOU LOST: TRIBAL WARFARE";
        } else if (cause == "health") {
            document.querySelector("#lost").innerHTML = "YOU LOST: EPIDEMIC";
        } else if (cause == "economy") {
            document.querySelector("#lost").innerHTML = "YOU LOST: ECONOMIC COLLAPSE";
        }

    } else if (era == "iron") {
        document.getElementById("mainImage").src = "res/tribal_fire.jpg";

        if (cause == "growth") {
            document.querySelector("#lost").innerHTML = "YOU LOST: STARVATION";
        } else if (cause == "security") {
            document.querySelector("#lost").innerHTML = "YOU LOST: WARFARE";
        } else if (cause == "health") {
            document.querySelector("#lost").innerHTML = "YOU LOST: EPIDEMIC";
        } else if (cause == "economy") {
            document.querySelector("#lost").innerHTML = "YOU LOST: ECONOMIC COLLAPSE";
        }

    } else if (era == "industrial") {
        document.getElementById("mainImage").src = "res/modern_fire.jpg";

        if (cause == "growth") {
            document.querySelector("#lost").innerHTML = "YOU LOST: STARVATION";
        } else if (cause == "security") {
            document.querySelector("#lost").innerHTML = "YOU LOST: WARFARE";
        } else if (cause == "health") {
            document.querySelector("#lost").innerHTML = "YOU LOST: EPIDEMIC";
        } else if (cause == "economy") {
            document.querySelector("#lost").innerHTML = "YOU LOST: DYSTOPIAN ECONOMIC SYSTEM";
        } else if (cause = "environment") {
            document.querySelector("#lost").innerHTML = "YOU LOST: ENVIRONMENTAL COLLAPSE";
        }

    } else if (era == "digital") {
        document.getElementById("mainImage").src = "res/modern_fire.jpg";

        if (cause == "growth") {
            document.querySelector("#lost").innerHTML = "YOU LOST: STARVATION";
        } else if (cause == "security") {
            document.querySelector("#lost").innerHTML = "YOU LOST: WARFARE";
        } else if (cause == "health") {
            document.querySelector("#lost").innerHTML = "YOU LOST: EPIDEMIC";
        } else if (cause == "economy") {
            document.querySelector("#lost").innerHTML = "YOU LOST: DYSTOPIAN ECONOMIC SYSTEM";
        } else if (cause = "environment") {
            document.querySelector("#lost").innerHTML = "YOU LOST: ENVIRONMENTAL COLLAPSE";
        }

    } 

}

function reload() {

    location.reload();

}

function jump() {

    count = 25;
    cycle();

}