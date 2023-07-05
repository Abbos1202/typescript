let num: number = 1234;

num = 543;

console.log(num);

let title: string = "webbrain";

title = "Abbos";
title = num.toString();
title = `${num}`;

console.log(title);

let anyData: any = "Abbos";

anyData = 1234;
anyData = "Ibrokhimov";
anyData = true;
anyData = null;
anyData = undefined;

console.log(anyData);

let anyDataAr: any[] = [];

anyDataAr.push(1234, "Abbos", [], {}, true, null, undefined);

console.log(anyDataAr);

let ArrString: string[] = [];
let ArrNumber: number[] = [];
let ArrBoolean: boolean[] = [];

ArrString.push("web", "1234");
ArrNumber.push(1234);
ArrBoolean.push(true, false);

console.log(ArrString);
console.log(ArrNumber);
console.log(ArrBoolean);

let ArrExact: [string, number, boolean] = ["web", 1234, true];

ArrExact = ["Abbos", 1234, false];

console.log(ArrExact);

let union: number | string | boolean = "Abbos";

union = 1234;
union = true;

console.log(union);

let arUnion: [string | number] = [1234];

arUnion = ["Abbos"];

console.log(arUnion);

let anyDataArUnion: any[string | number] = [
  1234,
  "Abbos",
  true,
  false,
  null,
  undefined,
];

anyDataArUnion = ["Abbos", 1234, false];

console.log(anyDataArUnion);

let tuple: [string, number][];

tuple = [
  ["webbrain", 1234],
  ["academy", 2021],
];

console.log(tuple);

let Tuple: [string, number];

Tuple = ["webbrain", 1234];

console.log(Tuple);

enum dir {
  down = 5,
  up,
  top,
  left,
  right,
  bottom,
}

console.log(dir.down, dir.up, dir.top, dir.left, dir.right, dir.bottom);

enum dir {
  string = "string",
  number = "number",
  boolean = "boolean",
  null = "null",
  undefined = "undefined",
  symbol = "symbol",
  bigInt = "bigInt",
}

console.log(
  dir.string,
  dir.number,
  dir.boolean,
  dir.null,
  dir.undefined,
  dir.symbol,
  dir.bigInt
);

let id: any = 123;

id = 456;

let uId = <string>id;

uId = "1357";

let uIds = id as number;

uIds = 1234;

console.log(id);

console.log(uId);

console.log(uIds);
