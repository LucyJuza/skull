class Card{
    type
    value
    constructor(type,value){
        /* types 
        0 : piques
        1 : carreaux
        2 : coeurs
        3 : trèfles
        */
       this.type = type
       this.value = value
    }

    toString(){
        let transtype = ""
        let transvalue = ""
        switch (this.type) {
            case 0:
                transtype = "pique"
            break;
            case 1:
                transtype = "carreau"
            break;
            case 2:
                transtype = "coeur"
            break;
            case 3:
                transtype = "trèfle"
            break;
        }
        switch (this.value) {
            case 13:
                transvalue = "Roi"
            break;
            case 12:
                transvalue = "Damme"
            break;
            case 11:
                transvalue = "Vallet"
            break;
            case 1:
                transvalue = "As"
            break;
            default:
                transvalue = this.value
            break;
        }
        return transvalue + " de " + transtype 
    }
}