class Card{
    type
    constructor(type,value){
        /* types 
        0 : fleur
        1 : crâne
        */
       this.type = type
    }

    toString(){
        let transtype = ""
        switch (this.type) {
            case 0:
                transtype = "Fleur"
            break;
            case 1:
                transtype = "Crâne"
            break;
        }

        return transtype 
    }
}