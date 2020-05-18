interface person {
  name: string;
  age: number;
}

interface human {
  bloodgroup: string;
  dob?: number; // to create optional variable
}

const employe: person = {
  name: 'sabban',
  age: 21,
};

const employe2: human = {
  bloodgroup: 'o+',
};
const employe3: human = {
  bloodgroup: 'o+',
  dob: 23_1998,
};

class data {
  daa: person = {
    name: 'rahul',
    age: 21,
  };
  constructor() {}
  dis() {
    console.log(this.daa);
  }
}

console.log(employe);
console.log(employe.name);
console.log(employe2);
console.log(employe3);
const newperson = new data();
newperson.dis();
