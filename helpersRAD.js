//manipulation;
export const $ = document.getElementById;
$();
export const DASH = "-";
export const USCORE = "_";
export const SPACE = " ";
export const EMPTY = "";
export const isEven = (num) => num % 2 == 0;
export const arr = [];
export const isOdd = !isEven;
export const isBinary = "/^0b[01]+$/i";
export function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
  //filter, typeof
}
//casing

export const lowercase = (str) => str.toLowerCase();
export const uppercase = (str) => str.toUpperCase();
export const capitalise = (str) => str.charAt(0).toUpperCase + s.slice(1);
export const decapitalise = (str) => str.charAt(0).tolowerCase + s.slice(1);
export const capitaliseWords = (str) =>
  str.split(space).map(capitalise).join(space);

//replacing

export const replace = (str, targ, subj) => str.split(targ).join(subj);
export const removeDashes = (str) => replace(str, DASH, SPACE);
export const removeUscores = (str) => replace(str, USCORE, SPACE);
export const removeSpaces = (str) => replace(str, SPACE, EMPTY);
export const addDashes = (str) => replace(str, SPACE, DASH);
export const addUscores = (str) => replace(str, SPACE, USCORE);

//functional
export const _pipe = (a, b) => (arg) => b(a(arg));
export const transformPipe = (...ops) => ops.reduce(_pipe);
export const arrAdd = (arr, item) => [...arr, item];
export function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last ? first + sumAll([first + 1, last]) : first;
}

//casing
export const strip = transformPipe(stripDashes, stripUnderscores);
export const startCase = transformPipe(strip, capitalizeWords);
export const pascalCase = transformPipe(startCase, stripSpaces);
export const camelCase = transformPipe(pascalCase, decapitalize);
export const kebabCase = transformPipe(strip, addDashes, lowercase);
export const snakeCase = transformPipe(strip, addUnderscores, lowercase);
export const constantCase = transformPipe(strip, addUnderscores, uppercase);

//USEFUL EVEVNTS
export const hover = onmouseover();
export const click = onclick();
export const dclick = ondblclick();
export let height = window.innerHeight(x)// optional z
export let width = window.innerWidth(y)//
for(let i = 0; i < arr.length; i++)


//convolsuion - convulted methods and IMPURE functions

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


//PURE FUNCTION RECURSION  -- The Y COMBINATOR

export let = recusion function (n){
    if (n < 2){
      return 1;
    }
    else{
      return n * recusion(n - 1);
    }
}


