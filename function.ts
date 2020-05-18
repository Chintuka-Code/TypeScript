function display(name, age): void {
  console.log(name, typeof age);
}

function demo(name: string, age: number) {
  console.log(name, typeof age, age);
}

function check(age: number): number {
  return age;
}

// Set default Value and optional value
function setdefault(
  age: number,
  name: string = 'sabban',
  alive?: boolean
): void {
  console.log(name, age, alive);
}

display('sabban', '21');
demo('sabban', 21);
setdefault(21);
setdefault(21, 'jd', true);
setdefault(21, 'rahul', true);
console.log(check(21));
