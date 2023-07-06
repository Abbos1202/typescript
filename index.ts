// interface general {
//   age: number;
// }

// interface name {
//   name: string
// }

// interface user extends general, name {}

// let obj: user = {
//   name: "Abbos",
//   age: 21,
// };

// type name = {
//   name?: string;
// };

// type age = {
//   age?: number;
// };

// type data = name | age;

// let obj: data = {
//   age: 21,
// };

// interface name {
//   readonly name?: string;
// }

// interface age {
//   age?: number;
// }

// interface data extends name, age {}

// interface writable {
//   name?: string;
//   age?: number;
// }

// let obj: data = {
//   name: "Abbos",
//   age: 21,
// };

// let wo: writable = obj;

// wo.name = "Anvar",

// // obj.name = "Webbrain"; => error

// console.log(obj.name);

// interface Prop<Type, TypeN> {
//   year: TypeN;
//   name: Type;
//   check?:() =>void
//   [index: string]: Function | undefined | Type | TypeN;
// }

// let obj: Prop<string, number> = {
//   name: "Abbos",
//   age: 21,
//   year: 2002,
//   // check(){},
// };

// console.log(obj.name, obj.age, obj.year);

// interface User {
//   name: string;
//   age: number;
// }

// class Person implements User {
//   constructor(name: string) {}
//   name = "Abbos";
//   age = 21;
// }

// let usr = new Person("Firdavs");

// interface User {
//   // name: string;
//   age?: number;
// }

// class Person implements User{
//   constructor(name: string) {}
//   #name = "Abbos";
//   private title = "Hi";
//   age = 21;
//   getData(){
//     console.log(this.#name, this.title);

//   }
// }

// let usr = new Person("Firdavs");

// // console.log(usr.age);
// console.log(usr.getData());

type course = "frontend" | "backend" | "mobile";

let courses: course = "frontend";
