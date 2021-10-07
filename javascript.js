var signe_o = "";
var signe_u = "";
var Score_u = 0;
var Score_o = 0;
var Match = 0;

function signe_user(signe) {
    Match++;
    if (Match < 4) {
        if (signe == "Feuille") {
            document.getElementById("signe_user").setAttribute("src", "main.png");
            signe_u = "Feuille";
        } else if (signe == "Ciseaux") {
            document.getElementById("signe_user").setAttribute("src", "ciseaux.png");
            signe_u = "Ciseaux";
        } else if (signe == "Pierre") {
            document.getElementById("signe_user").setAttribute("src", "pierre.png");
            signe_u = "Pierre";
        }


        signe_ordinateur();

        if (signe_o == "Pierre" && signe_u == "Feuille" || signe_o == "Feuille" && signe_u == "Ciseaux" || signe_o == "Ciseaux" && signe_u == "Pierre") {
            console.log("Vous avez gagnez");
            Score_u++;
        } else if (signe_o == "Pierre" && signe_u == "Ciseaux" || signe_o == "Feuille" && signe_u == "Pierre" || signe_o == "Ciseaux" && signe_u == "Feuille") {
            console.log("Vous avez perduuu");
            Score_o++;
        } else {
            console.log("Egalité");

        }


        console.log(Score_o);
        console.log(Score_u);
        console.log(Match);
        document.getElementById("Score_robot").innerText = Score_o;
        document.getElementById("Score_user").innerText = Score_u;
        document.getElementById("Score_Match").innerText = Match;

    }
}

function signe_ordinateur() {
    var nombre = Math.floor(Math.random(1) * 3);

    if (nombre == 0) {
        document.getElementById("signe_ordinateur").setAttribute("src", "main.png");
        signe_o = "Feuille";
    } else if (nombre == 1) {
        document.getElementById("signe_ordinateur").setAttribute("src", "ciseaux.png");
        signe_o = "Ciseaux";
    } else if (nombre == 2) {
        document.getElementById("signe_ordinateur").setAttribute("src", "pierre.png");
        signe_o = "Pierre";


    }

    console.log(nombre);

}

function reset() {
    Score_o = 0;
    Score_u = 0;
    Match = 0;
    document.getElementById("Score_robot").innerText = Score_o;
    document.getElementById("Score_user").innerText = Score_u;
    document.getElementById("Score_Match").innerText = Match;
}