class CardGame {
    static generateCardGame(){
        /* types 
        0 : piques
        1 : carreaux
        2 : coeurs
        3 : trèfles
        */
        let array = []
        for (let v = 0; v < 12; v++) {
            array.push(new Card(0));
        }
        for (let v = 0; v < 4; v++) {
            array.push(new Card(1));
        }
        return array;
    }
}