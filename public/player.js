class Player{
    name
    lives
    softdrinkcount
    strongdrinkcount
    oneshotcount
    constructor(name){
        this.name = name
        this.softdrinkcount = 0
        this.strongdrinkcount = 0
        this.oneshotcount = 0
        this.lives = 2
    }
    /* 
    Get zone
    */
    getLives(){
        return this.lives
    }
    getName(){
        return this.name
    }
    getSoftDrinkCount(){
        return this.softdrinkcount
    }
    getStrongDrinkCount(){
        return this.strongdrinkcount
    }
    getOneShotCount(){
        return this.oneshotcount
    }
    /*
    Set zone
    */
    setName(name){
        this.name = name
    }
    /*
    add zone
    */
    addSoftDrinks(number){
        if (this.softdrinkcount + number > 12) {
            this.strongdrinkcount += (this.softdrinkcount + number) - 12
            this.softdrinkcount = 12;
        }
        else{
            this.softdrinkcount += number
        }
    }
    addStrongDrinks(number){
        this.strongdrinkcount += number
    }
    addOneShots(number){
        this.oneshotcount += number
    }
    /*
    remove zone
    */
    removeLive(){
        this.lives--
    }

    /*
    clearzone
    */
   clearCounts(){
       this.softdrinkcount = 0;
       this.strongdrinkcount = 0;
       this.oneshotcount = 0;
   }
}