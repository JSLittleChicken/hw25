class Human {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`HUMAN: ${this.name} ${this.age}`)
    }
}
class Car {
    constructor (brand,model,year,number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number
    }
    setOwner(owner) {
        if (owner.age > 18) {
            this.owner = owner
        } else {
            console.log("Owner's age must be greater than 18")
        }
        
    }
    get carInfo() {
        console.log(`CAR: ${this.brand} ${this.model} ${this.year} ${this.number}.`)
        this.owner.info()    
    }
}

let karina = new Human('Karina',30)
let valya = new Human('Valya',50)
let kiddo = new Human('Pavlyk', 7)
valya.info();
karina.info();
kiddo.info()

let audi = new Car('audi','A5',2000,'АК1111КС')
let mazda = new Car('mazda',6,2020,'ВК2222НК')
let tesla = new Car('tesla', 'X', 2022, 'AC2222AH')

audi.setOwner(karina)
mazda.setOwner(valya)
tesla.setOwner(kiddo)

audi.carInfo;
mazda.carInfo;


