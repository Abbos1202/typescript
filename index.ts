// function getData(a: string | number) {
//   if (typeof a === "string") a.repeat(3);
// }

// function check(a: string | string[] | null) {
//   if (a) {
//     for (let i of a) {
//       console.log(i);
//     }
//   }
// }

// const time = (key: string): string => {
//   let date = new Date();

//   switch (key) {
//     case "ll":
//       return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
//     case "l":
//       return `${date.getDate()} ${date.getMonth()} `;
//     default:
//       return `${date.getDate()} ${date.getMonth()}`;
//   }
// };

// console.log(time("ll"));
// console.log(time("l"));

// function getData (str: string | number[]) {
//   console.log(str.length);
// }

// function get(str: string | number) {
//   if (typeof str === "string") console.log(str.length);
// }

// function get(str?: string) {
//   if (typeof str === "string") {
//     let title: string = str;
//   }
// }

// function get(str?: string) {
//   let title: string = str!;
// }

// function get(): never {
//   throw new Error("404 Not found")
// }

function get(): unknown {
  throw new Error("404 Not found");
}

let test: never;
