// function getData(): string {
//   return "Abbos";
// }

// console.log(getData());

// function getNum(a: number, b: number): number {
//   return a**b;
// }

// console.log(getNum(2, 4));

// function getUndefined(): number | void {
// }

// console.log(getUndefined());

// type callProp = {
//   (a: number): number
// }

// type param = {
//   key: string,
//   // value: number,
//   value?: number,
// }

// function callback(prop: param): callProp{
//   return (a: number) => a
// }

// callback({key: "abbos", value:1234})
// callback({key: "abbos"})

// type callProp = {
//   new (a: number) : number
// }

// function callback(date: Date){
//   return 5
// }

// console.log(new Date());

// type callParam = {
//   new (): Object;
// };

// const getData = (fn: callParam): string => {
//   return new fn().toString();
// };

// function ConsFun() {
//   return Date;
// }

// console.log(getData(ConsFun()));

// let arrString : string[] = []
// let arrNumber : number[] = []

// arrString.push("Abbos", "webbrain", "academy")
// arrNumber.push(21, 2021, 2023)

// console.log(arrString);
// console.log(arrNumber);

// let ar : string[] =[ "webbrain", "academy"]
// function getData(value: string, ar: string[]) {
// ar.push(value)
// console.log(ar);
// }

// getData("frontend", ar)
// getData("backend", ar)

// function getData<Type>(ar: Type[]) {
//   return (value: Type) => {
//     ar.push(value);
//     console.log(ar);
//   };
// }

// const strArray = getData<string>([]);
// const numArray = getData<number>([]);

// strArray("frontend");
// strArray("backend");

// numArray(1234);

// function getData<Type extends {length: number}> (a: Type){
//   console.log(a.length);
  
// }

// getData<string>("Abbos")
// getData<number[]>([1, 2, 3, 4])


function getDate(a: string) : string
function getDate(a: string, b: string) : string
function getDate(a: string, b: string, c?: string) : string
function getDate(a?: string, b?: string, c?:string) : string {
  return "string"
}
console.log(getDate("Abbos", "Ibrokhimov"));
