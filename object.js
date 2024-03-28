const player = {};
player.name = 'sakibe';
player.specoalty = 'batsman';
player.bat = function() {
    console.log('it is good');
};

console.log(player);
player.bat();

const student = {
    name: 'abul',
    roll: 10,
    scikle: function() {
        console.log('good');
    }  
};
const person = new Object();
console.log(person);

const item = Object.create(student);
console.log(item.name);

class person1 {
    name = 'kabul';
    address = 'motijul';
    constructor(age) {
        this.age = age;
    }
}
console.log(new person1(23))

function car(model, p) {
    this.m = model;
    this.p = p;
}
const ans = new car('model-s', 38);
console.log(ans);