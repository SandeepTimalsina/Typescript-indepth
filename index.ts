// function addNumber(a:number,b:number){
//     return a+b;
// }
// console.log(addNumber(2,4));
// console.log(addNumber(809,4));

// var city:number = 90;
// const num:number = 23;
// city.toString();
// console.log(city);

// let bod:string = "2001";
// let biw:number = parseInt(bod);
// console.log(biw-1)

// let haha:boolean = true;

// let users:undefined;
// let users_roles:null;
// users_roles = null;
// console.log(users,users_roles);
// const safeINt = Number.MAX_SAFE_INTEGER;
// const safeintplusone = safeINt+1;
// console.log(safeINt,safeintplusone);
// let bugINT1 = BigInt(1234);
// let bigint1:bigint = 12344n;
// console.log(bugINT1-bigint1); //also a bigint
// let f = Math.log(34);

let id:symbol = Symbol(1234);
let alphabaticsymbol:symbol = Symbol("id");

let user={
    [id]: "1234",
    name: "Mark",
    getID(){
        return this[id];
    }
}
console.log(user.name);
console.log(user.getID());