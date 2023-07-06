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