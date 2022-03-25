//manipulation;

const DASH = "-";
const USCORE = "_";
const SPACE = " ";
const EMPTY = "";

//casing

 const lowercase = (str) => str.toLowerCase();
 const uppercase = (str) => str.toUpperCase();
 const capitalise = (str) => str.charAt(0).toUpperCase + s.slice(1);
 const decapitalise = (str) => str.charAt(0).tolowerCase + s.slice(1);
 const capitaliseWords = (str) =>
  str.split(space).map(capitalise).join(space);

//replacing

 const replace = (str, targ, subj) => str.split(targ).join(subj);
 const removeDashes = (str) => replace(str, DASH, SPACE);
 const removeUscores = (str) => replace(str, USCORE, SPACE);
 const removeSpaces = (str) => replace(str, SPACE, EMPTY);
 const addDashes = (str) => replace(str, SPACE, DASH);
 const addUscores = (str) => replace(str, SPACE, USCORE);

//functional
 const _pipe = (a, b) => (arg) => b(a(arg));
 const transformPipe = (...ops) => ops.reduce(_pipe);
 const arrAdd = (arr, item) => [...arr, item];
 function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last ? first + sumAll([first + 1, last]) : first;
}

//casing
 const strip = transformPipe(stripDashes, stripUnderscores);
 const startCase = transformPipe(strip, capitalizeWords);
 const pascalCase = transformPipe(startCase, stripSpaces);
 const camelCase = transformPipe(pascalCase, decapitalize);
 const kebabCase = transformPipe(strip, addDashes, lowercase);
 const snakeCase = transformPipe(strip, addUnderscores, lowercase);
 const constantCase = transformPipe(strip, addUnderscores, uppercase);

//USEFUL EVEVNTS
 const hover = onmouseover();
 const click = onclick();
 const dclick = ondblclick();
 let height = window.innerHeight(x)// optional z
 let width = window.innerWidth(y)//
for(let i = 0; i < arr.length; i++)


//PURE FUNCTION RECURSION  -- LookUp The Y COMBINATOR

 let = recusion function (n){
    if (n < 2){
      return 1;
    }
    else{
      return n * recusion(n - 1);
    }
}


//Working with the DOM - no longer immutable, but nesciscarry for Front End Design (FED), not being used to extend classes 
//as that is an unescissary application at this point but for more practical work with the shadodw dom and switching classes
//these can be declared universally at the top of a stylesheet inorder to improve speed and readability.
/* TODO:                                                                                                                      */
/* benchmark time to create (x) elements and shadow elements using this method both as individual functors or as part of a file*/



//building blocks D, S, C

const D = doocument
const S = shaddow
const C = child



//initialise shaddow DOM and muatable element creation and manipulation

this.attachShadowRoot()
const CSE = createShaddowElement //mode open and close <>
const ASE = appendShadowRoot //not immutable but unlikely to cause unwarrented sideFX unless working with forms
const CELE = customElement

const CEL = createElement
const GET = getElementById
const QS = querySelector
const APEL = appendElement//not immutable or functional
const SETAT = setAttribute
const SETATS = setAtrributes
const SETSTR = setAtributesString
const HASAT = hasAttribute //
const SETVAL = setAtributeValue //not immutable or functional
 const isEven = (num) => num % 2 == 0;
 const arr = [];
 const isOdd = !isEven;

//events

 const isBinary = "/^0b[01]+$/i";
 const truncateString(str, num) =>  {str.length > num ? str.slice(0, num) + "..." : str;}
