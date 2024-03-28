const numbers = [12, 13, 53, 4];

const bottle = {
    color: 'yellow',
    price: 49,
    isCleaned: true,
    capacity: 1
};
const keys = Object.keys(bottle);
for(const key of keys) {
    // console.log(key, bottle[key]);
};

for(const key in bottle) {
    // console.log(key, bottle[key])
};

const value = bottle[keys];
const pair = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
};
