class CardGame {
    cards
    constructor(){
        this.cards = this.generateCardGame()
    }
    generateCardGame(){
        /* types 
        0 : piques
        1 : carreaux
        2 : coeurs
        3 : trèfles
        */
        let array = []
        for (let t = 0; t < 4; t++) {
            for (let v = 1; v < 14; v++) {
                array.push(new Card(t,v));
            }
        }
        return array;
    }
    getCards(){
        return this.cards;
    }
    getCard(index){
        return this.cards[index]
    }
}