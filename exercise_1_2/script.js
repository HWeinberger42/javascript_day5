class Thing {
   
    constructor(tName, tAge, tWeight) {
        this.name = tName;
        this.age = tAge;
        this.weight = tWeight;
        this.type = "thing";
    }

    printMain() {
        return `Its name is ${this.name} and is ${this.age} years old and weighs ${this.weight} kg.`;
    }
};

class Animal extends Thing {
    constructor (tName, tAge, tWeight, aBreed, aFavoriteToys) {
        super (tName, tAge, tWeight);
        this.breed = aBreed;
        this.favoriteToys = aFavoriteToys;
    }
    printBreed() {
        return `${this.name}'s breed is ${this.breed}.`;
    }

    printFavoriteToys() {
        return `${this.name}'s favorite toys are ${this.favoriteToys.join(", ")}.`;
    }
}

class Person extends Thing {
    constructor (tName, tAge, tWeight, pProfession, pMaritalStatus) {
        super (tName, tAge, tWeight);
        this.profession = pProfession;
        this.maritalStatus = pMaritalStatus;
    }
    printProfession() {
        return `${this.name}'s profession is ${this.profession}.`;
    }

    printMaritalStatus() {
        return `${this.name} is ${this.maritalStatus}.`;
    }
 }

class Bird extends Animal {
    constructor (tName, tAge, tWeight, aBreed, aFavoriteToys, BWingspan) {
        super (tName, tAge, tWeight, aBreed, aFavoriteToys);
        this.wingspan = BWingspan;
    }

    printWHoleBird() {
        return [super.printMain(), super.printBreed(), super.printFavoriteToys(), 
                `It has the wingspan of ${this.wingspan}.` ];
    }
}

let animal1 = new Animal("George", 3, 15, "Labrador dog", ["ball", "disc"]);
let animal2 = new Animal("Mandy", 1, 7, "Siam cat", ["rubberduck", "laserpointer", "feather"]);

let person1 = new Person("Jennifer", 55, 80, "singer", "single");
let person2 = new Person("Martin", 26, 180, "trucker", "married");
console.log(person1);

let bird1 = new Bird("Colin", 81, 6, "Tucan bird", ["visitors"], 1.5);
let bird2 = new Bird("Gretchen", 1, 2, "Cacadu bird", [], .5);

let thing1 = new Thing("The Thing", 6000, 1000);

let number1 = 1;

let things = [animal1, animal2, person1, person2, bird1, bird2, thing1, number1];

for (let thing of things) {
    let method = "";
    console.log(method);
    if (thing.constructor.name == "Bird") {
        method = `<p>${thing.printWHoleBird()}</p> <hr>`;
    } else if (thing.constructor.name == "Animal") {
        method = `<p>${thing.printMain()} <br>
            ${thing.printBreed()} <br>
            ${thing.printFavoriteToys()}
        </p> <hr>`;
    } else if (thing.constructor.name == "Person") {
        method = `<p>${thing.printMain()} <br>
            ${thing.printProfession()} <br>
            ${thing.printMaritalStatus()}
        </p> <hr>`;
    } else if (thing.type == "thing") {
        method = `<p>It has only parentclass! ${thing.printMain()}</p> <hr>`;
    } else { 
        method = `<p>${thing}</p> <hr>`;
    };
    console.log(method);

    document.getElementById("output").innerHTML += method;
}