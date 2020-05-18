function display(name, age) {
    console.log(name, typeof age);
}
function demo(name, age) {
    console.log(name, typeof age, age);
}
function check(age) {
    return age;
}
// Set default Value and optional value
function setdefault(age, name, alive) {
    if (name === void 0) { name = 'sabban'; }
    console.log(name, age, alive);
}
display('sabban', '21');
demo('sabban', 21);
setdefault(21);
setdefault(21, 'jd', true);
setdefault(21, 'rahul', true);
console.log(check(21));
