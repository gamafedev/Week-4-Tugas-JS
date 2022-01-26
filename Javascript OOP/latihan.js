class orang {
    constructor(name, hobi) {
        this.name = name;
        this.hobi = hobi;
        console.log("Object has been created!");
    }
    motoran (){
        console.log("GAS motoran lembang!");
    }

    static riding(){
        console.log("Sedang dalam perjalanan...");
    }
}

class perkerjaan extends orang {
    constructor (name){
        super(name);
    }
}

const gama = new orang("Gama Prabowo", "Motoran");
console.log(gama);
orang.riding();

const programmer = new perkerjaan('Zalfa Dhia');
console.log(programmer);


// gama.umur = 19;
// console.log(gama.motoran());
// console.log(gama.umur);