class person {
  public fname: string;
  private a = [];

  constructor(public name: string, age) {
    this.fname = name;
    console.log(name, age);
  }

  display(value) {
    this.a.push('hello');
    this.a.push(value);
    this.a.map((key) => console.log(key));
  }
}

const newperso = new person('sabban', 10);
newperso.display('jack');
console.log(newperso.fname);
