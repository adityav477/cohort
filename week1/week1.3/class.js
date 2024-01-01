class Animal {
  constructor(name, legCount, speaks) {
    (this.name = name), (this.legCount = legCount), (this.speaks = speaks);
  }

  //static functions - associated with the class itself and not the object of that particular class
  static Type() {
    console.log("the output of static function is " + "Animal");
  }

  //this are functions associated with the objects
  speak() {
    console.log("hi there " + this.speaks);
  }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");

dog.speak();
console.log("the name of cat object is " + cat.name);
Animal.Type();
