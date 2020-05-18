class q {
  readonly a = 'sabban';
}

const xy = new q();
console.log(xy.a);

// xy.a='' show error because you explict set readonly to that variable a
