class a {
  display() {
    console.log('class a');
  }
}

class b extends a {
  dis() {
    this.display();
    console.log('class b calling class a method');
  }
}

class c extends a {
  data() {
    super.display(); // call parent class method
  }
}

const xyz = new b();
xyz.dis();
xyz.display();
const abc = new c();
abc.data();
