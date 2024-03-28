const first = {a: 3, d: 5, b: 4};
const second = {a: 3, c: 5, b: 4};
const firstS = JSON.stringify(first);
const secondS = JSON.stringify(second);
console.log(firstS, secondS);

function compare(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length) {
        for(const key of firstKeys) {
            if(first[key] !== second[key]) {
                return false;
            }
        };
        return true;
    }
    else{
        return false;
    };
};
const result = compare(first, second);
console.log(result);