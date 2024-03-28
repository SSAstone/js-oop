const bottle = {
    color: 'yellow',
    price: 49,
    isCleaned: true,
    capacity: 1
};
const keys = Object.keys(bottle);
const value = Object.values(bottle);
console.log(keys, value)

const pair = Object.entries(bottle);
console.log(pair);

const twoDimenstion = [ [ 'color', 'yellow' ], [ 'price', 49 ], [ 'isCleaned', true ], [ 'capacity', 1 ]] ;

// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.height = 12
bottle.price = 100;
console.log(bottle);