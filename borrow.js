const kodmAli = {
    name: 'shiam',
    money: 40,
    study: 'Math',
    subjects: ['calculus', 'algebra'],
    exam: function() {
        return this.name + 'is exam';
    },
    imp: function(sub) {
        const a = this.exam();
        return `${a} is imp in ${sub}`
    },
    treat: function (amount, tips = 0) {
        this.money = this.money - amount + tips;
        return this.money;
    }
};
// console.log(kodmAli);

const out = kodmAli.exam();
// console.log(out);

const abulSir = {
    name: 'abul',
    money: 3000
};
abulSir.exam = kodmAli.exam;
console.log(abulSir);

const output = kodmAli.exam.call(abulSir);
console.log(output);

// const abulSirMoney = kodmAli.treat.call(abulSir, 20, -40)
// const abulSirMoney2 = kodmAli.treat.apply(abulSir, [20, -40])
// console.log(abulSirMoney);
// console.log(abulSirMoney2);

const abulSirTreat = kodmAli.treat.bind(abulSir);
const remaining = abulSirTreat(500, -100);
console.log(remaining);
