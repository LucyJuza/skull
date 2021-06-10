var chosenName = "Jean"
var chosenName2 = "Pierre"
var player1 = new Player(chosenName)
var player2 = new Player(chosenName2)
var cardgame = []
var roundnr = 0;
var akiletour = player1
var alreadyOut = []

function playInterface() {
    if (document.getElementById("p1n").value == "") {
        document.getElementById("p1n").focus()
    }
    else if (document.getElementById("p2n").value == "") {
        document.getElementById("p2n").focus()
    }else{
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("accueil").classList.add("hidden");
    }
}


function getRandomCard(){
    var index = Math.floor(Math.random() * cardgame.length );
    var carte = cardgame[index];
    cardgame.splice(index,1)
    return carte
}

function initgame() {
    document.getElementById("flower").disabled = false;
    document.getElementById("skull").disabled = false;
    document.getElementById("sorties").innerText = ""
    document.getElementById("textCard").innerText = ""
    document.getElementById("infos").innerText = ""
    player1 = new Player(document.getElementById("p1n").value)
    player2 = new Player(document.getElementById("p2n").value)
    roundnr = 0
    akiletour = player1
    regencardGame();
    document.getElementById("quest").innerText = akiletour.getName()+ ", Fleur ou crâne?"
    document.getElementById("vies").innerText = "Vies:\n" +
        player1.getName() + " : " + player1.lives + "\n" +
        player2.getName() + " : " + player2.lives;
}

function regencardGame(){
    cardgame = CardGame.generateCardGame()
    for (let index = 0; index < 4; index++) {
        var ra = Math.floor(Math.random() * cardgame.length)
        cardgame.splice(ra,1);
    }
    alreadyOut = [];
}
function switchroles(){
    if (akiletour == player1) {
        document.getElementById("sorties").innerText = ""
        document.getElementById("infos").innerText = "Millieu de partie\n"+ "Le joueur " + 
            player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs\n"+
            "Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs";
        console.log("changement de rôles")
        roundnr = 0
        regencardGame()
        player1.clearCounts();
        player2.clearCounts();
        akiletour = player2
        document.getElementById("quest").innerText = akiletour.getName()+ ", Fleur ou crâne?"
    }else{
        document.getElementById("quest").innerText = "";
        document.getElementById("infos").innerText = "Fin de la partie\n"+ "Le joueur " + 
            player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs\n"+
            "Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs";
        console.log("Le joueur " + player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs")
        console.log("Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs")
        document.getElementById("flower").disabled = true;
        document.getElementById("skull").disabled = true;
    }
}
function fail(){
    akiletour.removeLive()
    console.log(akiletour.getName() + " a perdu une vie, il lui en reste "+ akiletour.getLives())
    if (akiletour.lives == 0 && roundnr == 2) {
        akiletour.clearCounts();
        akiletour.addOneShots(1)
        console.log("ajouté " + 1 + " cul-sec à " + player1.getName())

    }
    else if (akiletour.lives == 0 && roundnr == 12) {
        player1.clearCounts();
        player2.clearCounts();
        player1.addOneShots(1)
        player2.addOneShots(1)
        console.log("ajouté " + 1 + " cul-sec aux deux")
    }else{
        if (roundnr < 6) {
            akiletour.addSoftDrinks(roundnr)
            console.log("ajouté " + roundnr + " soft à " + akiletour.getName())
        }
        if (roundnr > 5) {
            if (akiletour == player1) {
                player2.addSoftDrinks(roundnr)
                console.log("ajouté " + roundnr + " soft à " + player2.getName())
            }
            else{
                player1.addSoftDrinks(roundnr)
                console.log("ajouté " + roundnr + " soft à " + player1.getName())
            }
        }
    }
}
function next(color){
    document.getElementById("quest").innerText = akiletour.getName()+ ", Fleur ou crâne?"
    document.getElementById("infos").innerText = ""
    roundnr++
    console.log("Round N°: " + roundnr)
    console.log(akiletour.getName() + " a choisi " + color);
    /* types 
        0 : Fleur
        1 : Crâne
    */
    var cartetiree = getRandomCard()
    alreadyOut.push(cartetiree);
    console.log("carte tirée: " + cartetiree.toString())
    if (color == 0) {
        if (cartetiree.type == 1) {
            fail()
        }
    }else{
        if (cartetiree.type == 0) {
            fail()
        }
    }
    document.getElementById("textCard").innerText = "Carte: " + cartetiree.toString()
    if (roundnr == 12) {
        if (akiletour == player1) {
            if (akiletour.lives == 2) {
                console.log("ajouté " + 3 + " cul-sec à " + player2.getName())
                player2.addOneShots(3)
            }
        }
        else{
            player1.addOneShots(3);
        }
        switchroles()
    }else{
        if (akiletour.lives == 0) {
            switchroles()            
        }
    }
    document.getElementById("vies").innerText = "Vies:\n" +
        player1.getName() + " : " + player1.lives + "\n" +
        player2.getName() + " : " + player2.lives;
    document.getElementById("sorties").innerText = "Cartes sorties: "
    alreadyOut.forEach( (c,i) => {
        if (i < alreadyOut.length -1) {
            document.getElementById("sorties").innerText += c.toString() + ", "
        }else{
            document.getElementById("sorties").innerText += c.toString()
        }
    });
}