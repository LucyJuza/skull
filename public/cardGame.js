class CardGame {
    static generateCardGame(){
        /* types 
        0 : fleur
        1 : crâne
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