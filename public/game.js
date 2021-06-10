var chosenName = "Jean"
var chosenName2 = "Pierre"
var player1 = new Player(chosenName)
var player2 = new Player(chosenName2)
let cardgame = new CardGame()
var roundnr = 0;
var akiletour = player1

function getRandomCard(){
    return cardgame.getCard( Math.floor(Math.random() * cardgame.cards.length ))
}

function initgame() {
    player1 = new Player(document.getElementById("p1n").value)
    player2 = new Player(document.getElementById("p2n").value)
    roundnr = 0
    akiletour = player1
    document.getElementById("quest").innerText = akiletour.getName()+ ", Rouge ou noire?"
}
function next(color){
    document.getElementById("quest").innerText = akiletour.getName()+ ", Rouge ou noire?"
    document.getElementById("infos").innerText = ""
    roundnr++
    console.log("Round N°: " + roundnr)
    console.log(akiletour.getName() + " a choisi " + color);
    /* types 
        0 : piques
        1 : carreaux
        2 : coeurs
        3 : trèfles
    */
    var cartetiree = getRandomCard()
    console.log("carte tirée: " + cartetiree.toString())
    if (color == 0) {
        if (cartetiree.type == 0 || cartetiree.type == 3) {
            akiletour.removeLive()
            console.log(akiletour.getName() + " a perdu une vie, il lui en reste "+ akiletour.getLives() )
            if (roundnr <= 6) {
                akiletour.addSoftDrinks(roundnr)
                console.log("ajouté " + roundnr + " soft à " + akiletour.getName())
            }
            if (roundnr >= 5) {
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
    }else{
        if (cartetiree.type == 1 || cartetiree.type == 2) {
            akiletour.removeLive()
            console.log(akiletour.getName() + " a perdu une vie, il lui en reste "+ akiletour.getLives() )
            if (roundnr <= 6) {
                akiletour.addSoftDrinks(roundnr)
                console.log("ajouté " + roundnr + " soft à " + akiletour.getName())
            }
            if (roundnr >= 5) {
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
    document.getElementById("textCard").innerText = "Carte: " + cartetiree.toString()
    if (roundnr == 8) {
        if (akiletour == player1) {
            if (akiletour.lives == 2) {
                console.log("ajouté " + 3 + " cul-sec à " + player2.getName())
                player2.addOneShots(3)
            }else if (akiletour.lives == 0){
                player1.addOneShots(1)
                player2.addOneShots(1)
                console.log("ajouté " + 1 + " cul-sec au deux")
            }
            console.log("changement de rôles")
            roundnr = 0
            akiletour = player2
            document.getElementById("textCard").innerText = akiletour.getName()+ ", Rouge ou noire?"
        }
        else{
            player1.addOneShots(3);
            console.log("ajouté " + 3 + " cul-sec à " + player1.getName())
            document.getElementById("infos").innerText = "Fin de la partie\n"+ "Le joueur " + 
                player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs\n"+
                "Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs";
            console.log("Le joueur " + player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs")
            console.log("Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs")
        }
    }else{
        if (akiletour.lives == 0) {
            if (roundnr == 2) {
                akiletour.addOneShots(1)
                console.log("ajouté " + 1 + " cul-sec à " + player1.getName())
            }
            if (akiletour == player1) {
                console.log("changement de rôles")
                roundnr = 0
                akiletour = player2
                document.getElementById("quest").innerText = akiletour.getName()+ ", Rouge ou noire?"
            }else{
                document.getElementById("infos").innerText = "Fin de la partie\n"+ "Le joueur " + 
                    player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs\n"+
                    "Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs";
                console.log("Le joueur " + player1.getName() + " doit boire " + player1.getSoftDrinkCount() + " gorgées faibles, " + player1.getStrongDrinkCount() + " gorgées fortes et " + player1.getOneShotCount() + " cul-secs")
                console.log("Le joueur " + player2.getName() + " doit boire " + player2.getSoftDrinkCount() + " gorgées faibles, " + player2.getStrongDrinkCount() + " gorgées fortes et " + player2.getOneShotCount() + " cul-secs")
            }
        }
    }
}