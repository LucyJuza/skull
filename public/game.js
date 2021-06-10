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
        document.getElementById("skull").disabled = true;
        document.getElementById("flower").disabled = true;
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
    document.getElementById("sorties").innerHTML = ""
    document.getElementById("infos").innerHTML = ""
    player1 = new Player(document.getElementById("p1n").value)
    player2 = new Player(document.getElementById("p2n").value)
    roundnr = 0
    akiletour = player1
    regencardGame();
    document.getElementById("quest").innerText = akiletour.getName()+ ", Fleur ou crâne?"
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
function showDrinks(){
    var divplay1 = document.createElement("div");
        divplay1.setAttribute("id","player1_sorties");
        var divplay2 = document.createElement("div");
        divplay2.setAttribute("id","player2_sorties");

        var imgstrongs = document.createElement("img")
        imgstrongs.setAttribute("src","./media/shot.svg")
        var imgos = document.createElement("img")
        imgos.setAttribute("src","./media/chug.svg")
        var imgsofts = document.createElement("img");
        imgsofts.setAttribute("src","./media/beer.svg")

        var imgstrongs1 = document.createElement("img")
        imgstrongs1.setAttribute("src","./media/shot.svg")
        var imgos1 = document.createElement("img")
        imgos1.setAttribute("src","./media/chug.svg")
        var imgsofts1 = document.createElement("img");
        imgsofts1.setAttribute("src","./media/beer.svg")

        var spanplayer1 = document.createElement("span");
        spanplayer1.setAttribute("id","player");
        spanplayer1.innerText = player1.getName() + " :";
        var spanoneshotsplay1 = document.createElement("span")
        spanoneshotsplay1.setAttribute("id","numbOneShots")
        spanoneshotsplay1.innerText = player1.getOneShotCount();
        var spansoftplay1 = document.createElement("span")
        spansoftplay1.setAttribute("id","numbSofts")
        spansoftplay1.innerText = player1.getSoftDrinkCount();
        var spanstrongsplay1 = document.createElement("span")
        spanstrongsplay1.setAttribute("id","numbStrongs")
        spanstrongsplay1.innerText = player1.getStrongDrinkCount();

        var spanplayer2 = document.createElement("span");
        spanplayer2.setAttribute("id","player");
        spanplayer2.innerText = player2.getName() + " :";
        var spanoneshotsplay2 = document.createElement("span")
        spanoneshotsplay2.setAttribute("id","numbOneShots")
        spanoneshotsplay2.innerText = player2.getOneShotCount();
        var spansoftplay2 = document.createElement("span")
        spansoftplay2.setAttribute("id","numbSofts")
        spansoftplay2.innerText = player2.getSoftDrinkCount();
        var spanstrongsplay2 = document.createElement("span")
        spanstrongsplay2.setAttribute("id","numbStrongs")
        spanstrongsplay2.innerText = player2.getStrongDrinkCount();

        document.getElementById("infos").appendChild(spanplayer1)
        divplay1.appendChild(spanoneshotsplay1)
        divplay1.appendChild(imgos)
        divplay1.appendChild(spansoftplay1)
        divplay1.appendChild(imgsofts)
        divplay1.appendChild(spanstrongsplay1)
        divplay1.appendChild(imgstrongs)
        document.getElementById("infos").appendChild(divplay1)

        document.getElementById("infos").appendChild(spanplayer2)
        divplay2.appendChild(spanoneshotsplay2)
        divplay2.appendChild(imgos1)
        divplay2.appendChild(spansoftplay2)
        divplay2.appendChild(imgsofts1)
        divplay2.appendChild(spanstrongsplay2)
        divplay2.appendChild(imgstrongs1)
        document.getElementById("infos").appendChild(divplay2)
}
function switchroles(){
    if (akiletour == player1) {
        document.getElementById("sorties").innerHTML = ""
        document.getElementById("infos").innerHTML = ""
        showDrinks()
        //<div id="player2_sorties"><span id="player">Jou2 :</span> <span id="numbOneShots">3</span> <img src="./media/chug.svg"> 
        //<span id="numbSofts">12</span> <img src="./media/beer.svg"> <span id="numbStrongs">3</span> <img src="./media/shot.svg"></div>
        console.log("changement de rôles")
        roundnr = 0
        regencardGame()
        player1.clearCounts();
        player2.clearCounts();
        akiletour = player2
        document.getElementById("quest").innerText = akiletour.getName()+ ", Fleur ou crâne?"
    }else{
        document.getElementById("quest").innerText = "";
        document.getElementById("infos").innerHTML = ""
        showDrinks();
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
    if (color != cartetiree.type) {
            fail()
            var img = document.createElement("img");
            if (cartetiree.type == 0) {
                img.setAttribute("src","./media/cardSortieFleurFalse.svg")
            }
            else{
                img.setAttribute("src","./media/cardSortieSkullFalse.svg")
            }
            document.getElementById("sorties").appendChild(img);
    }else{
        var img = document.createElement("img");
        if (cartetiree.type == 0) {
            img.setAttribute("src","./media/cardSortieFleur.svg")
        }
        else{
            img.setAttribute("src","./media/cardSortieSkull.svg")
        }
        document.getElementById("sorties").appendChild(img);
    }
    if (roundnr == 12) {
        if (akiletour == player1) {
            if (akiletour.lives == 2) {
                console.log("ajouté " + 3 + " cul-sec à " + player2.getName())
                player2.addOneShots(3)
            }else if (akiletour.lives == 1){
                console.log("ajouté " + 12 + " softs à " + player2.getName())
                player2.addSoftDrinks(12)
            }
        }
        else{
            if (player2.lives == 2) {
                console.log("ajouté " + 3 + " cul-sec à " + player1.getName())
                player1.addOneShots(3)
            }else if(player2.lives == 1){
                console.log("ajouté " + 12 + " softs à " + player1.getName())
                player1.addSoftDrinks(12)
            }
        }
        switchroles()
    }else{
        if (akiletour.lives == 0) {
            switchroles()            
        }
    }
}