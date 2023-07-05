var num = 1234;
num = 543;
console.log(num);
var title = "webbrain";
title = "Abbos";
title = num.toString();
title = "".concat(num);
console.log(title);
var anyData = "Abbos";
anyData = 1234;
anyData = "Ibrokhimov";
anyData = true;
anyData = null;
anyData = undefined;
console.log(anyData);
var anyDataAr = [];
anyDataAr.push(1234, "Abbos", [], {}, true, null, undefined);
console.log(anyDataAr);
var ArrString = [];
var ArrNumber = [];
var ArrBoolean = [];
ArrString.push("web", "1234");
ArrNumber.push(1234);
ArrBoolean.push(true, false);
console.log(ArrString);
console.log(ArrNumber);
console.log(ArrBoolean);
var ArrExact = ["web", 1234, true];
ArrExact = ["Abbos", 1234, false];
console.log(ArrExact);
var union = "Abbos";
union = 1234;
union = true;
console.log(union);
var arUnion = [1234];
arUnion = ["Abbos"];
console.log(arUnion);
var anyDataArUnion = [
    1234,
    "Abbos",
    true,
    false,
    null,
    undefined,
];
anyDataArUnion = ["Abbos", 1234, false];
console.log(anyDataArUnion);
var tuple;
tuple = [
    ["webbrain", 1234],
    ["academy", 2021],
];
console.log(tuple);
var Tuple;
Tuple = ["webbrain", 1234];
console.log(Tuple);
var dir;
(function (dir) {
    dir[dir["down"] = 5] = "down";
    dir[dir["up"] = 6] = "up";
    dir[dir["top"] = 7] = "top";
    dir[dir["left"] = 8] = "left";
    dir[dir["right"] = 9] = "right";
    dir[dir["bottom"] = 10] = "bottom";
})(dir || (dir = {}));
console.log(dir.down, dir.up, dir.top, dir.left, dir.right, dir.bottom);
(function (dir) {
    dir["string"] = "string";
    dir["number"] = "number";
    dir["boolean"] = "boolean";
    dir["null"] = "null";
    dir["undefined"] = "undefined";
    dir["symbol"] = "symbol";
    dir["bigInt"] = "bigInt";
})(dir || (dir = {}));
console.log(dir.string, dir.number, dir.boolean, dir.null, dir.undefined, dir.symbol, dir.bigInt);
var id = 123;
id = 456;
var uId = id;
uId = "1357";
var uIds = id;
uIds = 1234;
console.log(id);
console.log(uId);
console.log(uIds);
