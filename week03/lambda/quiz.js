const Left = x => f => g =>  f(x);
const Right = x => f => g => g(x);
const either = e => f =>g => e(f)(g);

const safeDiv = num => divisor => divisor === 0
? Left("Cannot"): Right(num/divisor);
const result = safeDiv(1)(1);
either(result)(msg => document.writeln(msg))(val=> document.writeln(val ===1));


const join = x => (acc, cur) => acc + x + cur ;
[1,2,3].reduce(join('-'));


const id = x => x;
const eShow = e => either(e)(id)(val=> "Result is: " + val);


eShow(safeDiv(1)(0));

const x_ = Math. random();

console.log(eShow( safeDiv(1)(0)) === "Cannot");

console.log(eShow (safeDiv(x_)(1)) === "Result is: "+x_);