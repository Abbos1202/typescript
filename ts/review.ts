// lesson 1

// Typescript => A language that superset of JS yani Javascriptni oldindan typeni aytib ketuvchi language

// npm install -g typescript => typescript o'rnatish uchun

// tsc.cmd --version => typescript versiyasini tekshirish

// tsc.cmd --watch index.ts => typescriptni javascriptga o'giradi va qanday o'zgarish bo'lsa watch qilib turadi va automatic javascriptga o'giradi
// tsc.cmd index.ts => typescriptni javascriptga o'giradi
// tsc.cmd => typescriptni javascriptga o'giradi

// tsc.cmd --init => typescript configurationini o'rnatib beradi

   /* Language and Environment */
//    "target": "es2016", => "target": "es6" --> ga o'zgartirish kerak bo'lmasam var orqali yaratib beradi

// any => bu xohlagan typeni o'z ichiga oladi. Misol uchun number string null undefined boolean

// any [] => bunda push methodi orqali array ichiga xohlagancha ma'lumot qo'shsa bo'ladi
// Misol uchun => 

// let anyDataAr: any[] = [];
// anyDataAr.push(1234, "Abbos", [], {}, true, null, undefined);

// console.log(anyDataAr);

// ==========================================================
// ==========================================================


// lesson 2

// undefined = void

// ==========================================================
// ==========================================================

// lesson 3 

// type => extends qilib bo'lmaydi
// interface => extends qilib bo'ladi va bir marta extends yozib vergul orqali xohlagancha interface ni yozish mumkin

// interface user extends general, name {}

// readonly => malumotni yangilab  bo'lmaydi
// writable => yangi object va interface yaratib readonly ni yo'q qilsa bo'ladi


// index signature = > string number symbol oladi boshqa type olmaydi

// index signature => biz objectda ixtiyoriy malumot biriktirishimiz mumkin bo'ladi yani nechta key borligini oldindan bilmasligimiz mumkin mana shu xolatda barcha ma'lumotni qabul qilishga ruxsat berishga aytiladi

// implements => class bilan ishlaydi va obj dagi : nuqtani ornini bosadi va key larimiz = bilan yoziladi

// interface User {
//    name: string
//  }
 
//  class Person implements User {
//    name = "Abbos"
//  }

// lesson 4

// typeof 
// repeat()
// for (of)
// date
// switch(){}

// function getData (str: string | number[]) {
//   console.log(str.length);
// }

// ?(optional) and !

// never vs unknown

// lesson 5

// Typescript with React JS

// hooks vs class

// import React, { Component } from 'react'

// export default class review extends Component {
//   render() {
//     return (
//       <div>review</div>
//     )
//   }
// }

// import React from 'react'

// const review = () => {
//   return (
//     <div>review</div>
//   )
// }

// export default review

// ReactNode => children props yozish uchun Reactdan keladi
// React.MouseEvent => event ni chiqarib beradi


// useRef => 
// input ref => <HTMLInputElement>(null)
// button ref => <HTMLButtonElement>(null)

// const btnRef = useRef<HTMLButtonElement>(null)
// const inpRef = useRef<HTMLInputElement>(null)

// <button ref={btnRef}>button</button>
// <input ref={inpRef} type="text" />

// useReducer => 

// import React, { useReducer } from "react";

// const fruits = [
//   { id: 1, name: "Apple" },
//   { id: 2, name: "Orange" },
//   { id: 3, name: "Kiwi" },
//   { id: 4, name: "Banana" },
// ];

// const Input = () => {
//   type Actions =
//     | { type: "add"; value: string }
//     | { type: "remove"; id: number };

//   type Todos = {
//     id: number;
//     name: string;
//   };

//   type State = Todos[];
//   const [state, dispatch] = useReducer((state: State, action: Actions) => {
//     switch (action.type) {
//       case "add":
//         return [...state, { id: state.length + 1, name: action.value }];
//       case "remove":
//         let res = state.filter((value) => value.id !== action.id);
//         return res;
//       default:
//         return state;
//     }
//   }, fruits);

//   return (
//     <div>
//       {state.map((value) => {
//         return (
//           <h3 key={value.id}>
//             {value.id} - {value.name}
//           </h3>
//         );
//       })}
//       <button onClick={() => dispatch({ type: "add", value: "grapes" })}>
//         Add
//       </button>
//       <button onClick={() => dispatch({ type: "remove", id: 1 })}>
//         delete Apple
//       </button>
//     </div>
//   );
// };

// export default Input;