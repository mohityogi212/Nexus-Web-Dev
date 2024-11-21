// // // //Object


// // // // let obj = {
// // // //     let user_name: "Mohit",   //key and corresp value
// // // //     let ac_num: 45636552234,
// // // //     let balance: 420
// // // // }
// // // let obj = {
// // //     user_name: "Mohit",   //key and corresp value
// // //     ac_num: 45636552234,
// // //     balance: 420
// // // }
// // // console.log(typeof obj);

// // // //function
// // // let fun = function() {
// // //     console.log("Hello Coder Army");
// // //     return 21;
    
// // // }

// // // fun();  //function ko call karenge  tb Hello Coder Army
// // // console.log(typeof fun);  //-->function 
// // // console.log(fun()); //21 fxn call hoga or uske andr ki stmt 

// // //Type  just overview for now after a while we'll go in depth

// // //Type conversion --> ek type ko dusre type me convert karna 

// // let ac_bal = "20"; // ye string form me h hume number form me chaiye coz infuture hume ispr operation krna ho like + 
// // let num = Number(ac_bal);

// // console.log(num);
// // console.log(typeof num); //number
// // console.log(typeof ac_bal);  //string

// // //Booean convert to a number
// // let x = true;
// // let y = false;
// // console.log(Number(x)); //1  true 
// // console.log(Number(y)); /// 0 false

// // let account = "100xs"
// // let bal = "2200s"
// // console.log(Number(account));  //NaN  --> this is not a number 
// // console.log(Number(bal)); //NaN agr no me convert nhi hota to hume ye de deta h

// // //null

// // let x1 = null;  //Null ko Num me convert krenge to 0 dega
// // console.log(Number(x1));  //0 -- > intentionally we haven't added a value in it


// // //undefined
// // let x2;
// // console.log(Number(x2));  //NaN


// // //String
// // let ab = 20;
// // console.log(String(ab)); //20
// // console.log(String(typeof ab)); //number

// // let ax = true;
// // let ac = false;
// // console.log(String(ax)); //true

// // console.log(String(ac));  //false lekin ye boolean wala nhi h boolean wala h
// // console.log(String(typeof ac)); //boolean

// // //Boolean
// // let abc = "utopia";  //string me kuch nhi to false kuch bhi h to true
// // console.log(Boolean(abc)); //true

// // //kya ho agar isme space ho to coz. space bhi kuch ascii char hota h
// // let azc = " ";
// // console.log(Boolean(azc)); //true


// // let cab = "";
// // console.log(Boolean(cab)); //false

// // //aise hi hum baakiyo ke liye dekh skte h so type conversion is over 


// //Operation

// console.log(((6*(3+18)/6)-9)); //12   (6*3+18/6-9)  isme jo rule h   btw aise complex code ko aise nhi likh skte you'll be novice so we must use brackets
// //18+18/6-9
// //18+3-9 = 21
// //21-9 = 12

// //Divide Multiply precedence left to right 
// //Add Sub   left to right


// //Modulus --> remainder deta hai
// console.log(20%3);

// //pre-increment ++ , -- decrement operator
// let sum = 20;
// // sum++ post 
// //++sum pre increment , --sum , pre decrement 
// console.log(sum++);
// console.log(++sum);


// let total = sum++; //20
// console.log(total); //22
// console.log(sum); // 23 



//Assignment Operator   += -= *= /=

let x = 20; //+10

 // x = x+10; -->x+=10
x+=12;
console.log(x); //30


//Comparison operator & Logical Operator














