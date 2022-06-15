const DASH = "-";
const USCORE = "_";
const SPACE = " ";
const EMPTY = "";
const DOT = "."

//int primatives

const add = (int, val) => int + val;
const sub = (int, val) => int - val;
const mul = (int, val) => int * val;
const div = (int, val) => int / val;
const mod = (int, val) => int % val;
const pow = (int, val) => Math.pow(int, val);
const sqrt = (int) => Math.sqrt(int);
const random = (int) => (Math.floor(Math.random) * int) + 1; 

//casing

 const lowercase = (str) => str.toLowerCase();//curried functors
 const uppercase = (str) => str.toUpperCase();
 const capitalise = (str) => str.charAt(0).toUpperCase + s.slice(1);
 const decapitalise = (str) => str.charAt(0).tolowerCase + s.slice(1);
 const capitaliseWords = (str) =>//array
  str.split(space).map(capitalise).join(space);

//replacing
 const replace = (str, targ, subj) => str.split(targ).join(subj);
 const removeDashes = (str) => replace(str, DASH, SPACE);
 const removeUscores = (str) => replace(str, USCORE, SPACE);
 const removeSpaces = (str) => replace(str, SPACE, EMPTY);
 const addDashes = (str) => replace(str, SPACE, DASH);
 const addUscores = (str) => replace(str, SPACE, USCORE);
 const removedot = (str) => replace (str, DOT, EMPTY)

//splitting
    const split = (str, sep) => str.split(sep);
    const splitOnSpace = (str) => split(str, SPACE);
    const splitOnDash = (str) => split(str, DASH);
    const splitOnUscore = (str) => split(str, USCORE);  
    const splitOnDot = (str) => split(str, DOT);
    const splitOnLetter = (str) => split(str, EMPTY);

    //joining
    const join = (str, sep) => str.join(sep);
    const joinWithSpace = (str) => join(str, SPACE);
    const joinWithDash = (str) => join(str, DASH);
    const joinWithUscore = (str) => join(str, USCORE);
    const joinWithDot = (str) => join(str, DOT);
    const joinWithLetter = (str) => join(str, EMPTY);

    //concatenation
    const concat = (str, sep) => str.concat(sep);
    const concatWithSpace = (str) => concat(str, SPACE);
    const concatWithDash = (str) => concat(str, DASH);
    const concatWithUscore = (str) => concat(str, USCORE);
    const concatWithDot = (str) => concat(str, DOT);
    const concatWithLetter = (str) => concat(str, EMPTY);

    //mapping#
    const arrMap = (input, output)  => output.map(input);
    const mapWithSpace = (input, output) => output.map(input.forEach(input.splittWithSpace));
    const mapWithDash = (input, output) => output.map(input.forEach(input.splitWithDash));
    const mapWithUscore = (input, output) => output.map(input.forEach(input.splitWithUscore));
    const mapWithDot = (input, output) => output.map(input.forEach(input.splitWithDot));
    const mapWithLetter = (input, output) => output.map(input.forEach(input.splitWithLetter)); 

 //array primitives
 const arr = ['a','b','c']
 const arrrr = [1,2,3]
 const arr2 = arr.map((item) => item + 1);
const pop = arr.map((item) => (...arrrr.pop()))
const unset = arr.map(item => (...arrrr.unset()))
const _filter = arr.map((arr) => (arr.filter(isEven))
const squared = (int)=> {int * int};
const randomIdx = (arr, randomIdx) =>{
    // from lowdash
if (arr.length === 0) {
    return arr;
}
return randomIdx = Math.floor(Math.random() * arr.length);
}
const baseSlice(array, start, end) => {
    let index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    const result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }


  const reSize(obj, len, key) => {
    let reSize = [];
      if (!key){
          len = 1;
      }
      else{
          len = key.length
      }
    for(let i = 0, i <= len, i++){
        reSize.push(obj[i])
    }
    return reSize
  }



//string primative functional manipulation
  const str = "hello world";
  const strAdd = (str, item) => str + item;
  const last = (str.length) => (str.length)-1

//functional
 const map = (fn, arr) => arr.map(fn);
const filter = (fn, arr) => arr.filter(fn);
 const _pipe = (a, b) => (arg) => b(a(arg));
 const transformPipe = (...ops) => ops.reduce(_pipe);
 const arrAdd = (arr, item) => [...arr, item];
 function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last ? first + sumAll([first + 1, last]) : first;
}




//int
const size = (int) => int.toString().length;
const twoIntLeng = (int1, int2) => map(int1.size()+int2.size());

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
  for(let i = 0; i < arr.length; i++){
    let loopy
    console.log(loopy)
  }

const arrHead = (arr) => arr[0];




//GENERRATOR

const _yield = *function(){
  yield 'hello';
  yield 'world';

  let str  = '';
  for(const val of _yield()) {
    str += val;
  }
  return str;
}
//PURE FUNCTION RECURSION  -- LookUp The Y COMBINATOR

 let = recusion function (n){
    if (n < 2){
      return 1;
    }
    else{
      return n * recusion(n - 1);
    }
}

//web
const getJSON = (url) => fetch(url).then(res => res.json());
const isValidUrl = function(url){
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

//image manipulation
const loadImage = function(url){
  return new Promise(function(resolve, reject){
      const image = new Image();
      image.onload = () => resolve(image);{
          image.onerror = () => reject(new Error('Could not load image at ' + url));
      };
      image.src = url;
  });
};

//getter/setter
const get = (obj, key) => obj[key];
const set = (obj, key, value) => {obj[key] = value; return obj;};
const unset = (obj, key) => {delete obj[key]; return obj;};
const has = (obj, key) => obj.hasOwnProperty(key);
const hasnt = (obj, key) => !obj.hasOwnProperty(key);
const hasValue = (obj, key, value) => obj[key] === value;
const hasntValue = (obj, key, value) => obj[key] !== value;



//async
const fetch = async (url, res, rej) => {
  try{
  Promise.reject(30);
  const response = await fetch(url);
  }catch(error){
    console.log(error);
  const json = await response.json();
  return json;
}


_______________________________________________EASE OF USE ________________________________

//Working with the DOM - no longer immutable, but nesciscarry for Front End Design (FED), not being used to extend classes
//as that is an unescissary application at this point but for more practical work with the shadow dom and switching classes
//these can be declared universally at the top of a stylesheet in order to improve speed and readability.
/* TODO:                                                                                                                      */
/* benchmark time to create (x) elements and shadow elements using this method both as individual functors or as part of a file*/



//building blocks D, S, C

const D = document
const S = shadow
const C = child



//initialise shaddow DOM and muatable element creation and manipulation

this.attachShadowRoot()
createShadowElement //mode open and close <>
appendShadowRoot //not immutable but unlikely to cause unwarrented sideFX unless working with forms
customElement
createElement
getElementById
querySelector
appendElement
setAttribute
setAtrributes
setAtributesString
hasAttribute //
setAtributeValue //not immutable or functional
 const isEven = (num) => num % 2 == 0;
 const arr = [];
 const isOdd = !isEven;

//events

 const isBinary = "/^0b[01]+$/i";

 const truncateString(str, num) =>{
  str.length > num ? str.slice(0, num) + "..." : str;
  }

 //for each
 items.forEach((item)=>{console.log(item)})
