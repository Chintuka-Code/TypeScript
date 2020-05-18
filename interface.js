var employe = {
    name: 'sabban',
    age: 21
};
var employe2 = {
    bloodgroup: 'o+'
};
var employe3 = {
    bloodgroup: 'o+',
    dob: 231998
};
var data = /** @class */ (function () {
    function data() {
        this.da = {
            name: 'rahul',
            age: 21
        };
    }
    data.prototype.dis = function () {
        console.log(this.da);
    };
    return data;
}());
console.log(employe);
console.log(employe.name);
console.log(employe2);
console.log(employe3);
var newperson = new data();
newperson.dis();
