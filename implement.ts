interface person {
  name: string;
  display(): void;
}

class demo implements person {
  name: string;
  display() {
    this.name = 'sabban';
    console.log('i' + this.name);
  }
}

const de = new demo();
de.display();
