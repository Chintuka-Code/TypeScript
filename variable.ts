// Variable
const a: string = 'sabban';
const b: number = 10;
const c: boolean = false;
let x;
console.log(`${typeof a}${a} ${typeof b}${b} ${typeof c}${c}`);

// Array
const y: string[] = ['sabban'];
const z: Array<string> = ['hi'];
// const xyz=['data',true,10]
const xyz: any[] = ['data', true, 10];
xyz.map((key) => console.log(key));
