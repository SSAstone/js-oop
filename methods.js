const student = {
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


const out = student.exam();
console.log(out);

const re = student.imp('algebra');
console.log(re);

const rem = student.treat(30);
console.log(rem);

const taka = student.treat(200, 500);
console.log(taka);