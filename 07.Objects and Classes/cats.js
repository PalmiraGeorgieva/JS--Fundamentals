function catsClass(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for(let catData of arr) {
        let tokens = catData.split(' ');
        let catName = tokens[0];
        let catAge = tokens[1]

        let cat = new Cat(catName, catAge);

        console.log(cat.meow())
    }

}
catsClass(['Mellow 2', 'Tom 5'])