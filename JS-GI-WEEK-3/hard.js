class pii{
    #ssn

    constructor (name, ssn){
        this.#ssn = 123456789, // public property
        this.name = " Sharryl"  // private property 
    }

    getName (){
        return this.name
    }
}



console.log(new pii)