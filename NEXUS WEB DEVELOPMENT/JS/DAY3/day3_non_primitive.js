// ============================
// JavaScript Class - Day 3
// Topics Covered:
// 1. Objects
// 2. Functions
// 3. Type Conversion
// 4. Arithmetic Operations
// 5. Pre/Post Increment
// 6. Assignment Operators
// ============================

// 1. Objects
let obj = {
    user_name: "Mohit",   // key-value pair
    ac_num: 45636552234,
    balance: 420
};
console.log(typeof obj); // 'object'

// 2. Functions
let fun = function() {
    console.log("Hello Coder Army");
    return 21;
};
fun();                     // Calls the function and prints "Hello Coder Army"
console.log(typeof fun);   // 'function'
console.log(fun());        // 21

// 3. Type Conversion
// Convert String to Number
let ac_bal = "20"; 
let num = Number(ac_bal);
console.log(num);          // 20
console.log(typeof num);   // 'number'
console.log(typeof ac_bal); // 'string'

// Boolean to Number
let x = true;
let y = false;
console.log(Number(x));    // 1 (true)
console.log(Number(y));    // 0 (false)

// Invalid Number Conversion
let account = "100xs";
console.log(Number(account)); // NaN (Not a Number)

// Null Conversion
let x1 = null;
console.log(Number(x1));   // 0 (Null as Number)

// Undefined Conversion
let x2;
console.log(Number(x2));   // NaN

// Number to String
let ab = 20;
console.log(String(ab));   // "20"

// Boolean to String
let ax = true;
console.log(String(ax));   // "true"

// String to Boolean
let abc = "utopia";        // Non-empty string evaluates to true
console.log(Boolean(abc)); // true
let azc = " ";             // Space is also considered true
console.log(Boolean(azc)); // true
let cab = "";              // Empty string evaluates to false
console.log(Boolean(cab)); // false

// 4. Arithmetic Operations
console.log(((6 * (3 + 18) / 6) - 9)); // 12

// Modulus Operator
console.log(20 % 3);       // 2

// Pre/Post Increment
let sum = 20;
console.log(sum++);        // 20 (post-increment)
console.log(++sum);        // 22 (pre-increment)

let total = sum++;
console.log(total);        // 22
console.log(sum);          // 23

// 5. Assignment Operators
let x3 = 20;
x3 += 12;                  // Same as x3 = x3 + 12
console.log(x3);           // 32
