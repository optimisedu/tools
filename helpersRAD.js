// welcome to the mess that is my mind, I hope it helps you - this is not a traditional library and I have chose to not use module import. That may change.

const DASH = "-";
const USCORE = "_";
const SPACE = " ";
const EMPTY = "";
const DOT = "."
const DOT_REGEX = /\./g;
const SPACE_REGEX = /\s/g;
const USCORE_REGEX = /_/g;

//int primatives

const add = (int, val) => int + val;
const sub = (int, val) => int - val;
const mul = (int, val) => int * val;
const div = (int, val) => int / val;
const mod = (int, val) => int % val;
const pow = (int, val) => Math.pow(int, val);
const sqrt = (int) => Math.sqrt(int);
const random = (int) => (Math.floor(Math.random) * int) + 1; 

// int manipulation
let i
const toString = (int) => int.toString();
const toInt = (str) => parseInt(str);
const toFloat = (str) => parseFloat(str);
const twoIntLeng = (int1, int2) => map(int1.size()+int2.size());

//string primative functional manipulation -- search "more later"
const str = "hello world";
const strAdd = (str, item) => str + item;
const last = (str) => (str.length[-1])
const size = (int) => int.toString().length;

//casing

 const lowercase = (str) => str.toLowerCase();//curried functors
 const uppercase = (str) => str.toUpperCase();
 const capitalise = (str) => str.charAt(0).toUpperCase + s.slice(1);
 const decapitalise = (str) => str.charAt(0).tolowerCase + s.slice(1);
 const capitaliseWords = (str) =>//array
  str.split(space).map(capitalise).join(space);

//replacing
const split = (str, sep) => str.split(sep);
 const replace = (str, targ, subj) => str.split(targ).join(subj);
 const removeDashes = (str) => replace(str, DASH, SPACE);
 const removeUscores = (str) => replace(str, USCORE, SPACE);
 const removeSpaces = (str) => replace(str, SPACE, EMPTY);
 const addDashes = (str) => replace(str, SPACE, DASH);
 const addUscores = (str) => replace(str, SPACE, USCORE);
 const removedot = (str) => replace (str, DOT, EMPTY)

//splitting
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

//decode URI
const decode = (str) => decodeURIComponent(str);

//encode string
const encode = (str) => encodeURIComponent(str);

//mapping
const arrMap = (input, output)  => output.map(input);
const mapWithSpace = (input, output) => output.map(input.forEach(input.splittWithSpace));
const mapWithDash = (input, output) => output.map(input.forEach(input.splitWithDash));
const mapWithUscore = (input, output) => output.map(input.forEach(input.splitWithUscore));
const mapWithDot = (input, output) => output.map(input.forEach(input.splitWithDot));
const mapWithLetter = (input, output) => output.map(input.forEach(input.splitWithLetter)); 

//array primitives
const arr = ['a','b','c']
const arrr = [1,2,3]
const arr2 = arr.map((item) => item + 1);
const pop = (arr) => (arr.pop())
const unset = (arr) => (arr.unset())
const _filterEven = (arr) => (arr.filter(isEven))
const squared = (int)=> {int * int};

  const reSize = (obj, len, key) => {
    let reSize = [];
      if (!key){
          len = 1;
      }
      else{
          len = key.length
      }
    for(i = 0; i <= len; i++)
    {
        reSize.push(obj[i])
    }
    return reSize
  }

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
  for(i = 0; i < arr.length; i++){
    let loopy
    console.log(loopy)
  }

const arrHead = (arr) => arr[0];
const arrTail = (arr) => arr[-1];

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

//image manipulation -- 
const loadImage = function(url){
  return new Promise(function(resolve, reject){
      const image = new Image();
      image.onload = () => resolve(image);{
          image.onerror = () => reject(new Error('Could not load image at ' + url));
      };
      image.src = url;
  });
};

//img to bitmap -- use the sharp library for image manipulation instead to avoid prohibitively long wait times
const imgToBitmap = function(img){
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

//img to jpg file
const imgTopng = function(img){
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL('image/png');
}

//img to png 
const imgToJpeg = function(img){
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL('image/jpeg');
}

const getImageToBitmap(url) =>{
loadImage(url).then(imgToBitmap);
}

const getImageToJpeg(url){
  loadImage(url).then(imgToJpeg);
}

const imgToPng(url) =>{
  loadImage(url).then(imgToPng);
}

//mutation obvserver
const observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
    if(mutation.type === 'childList'){
      console.log('A child node has been added or removed.');
    }
    else if(mutation.type === 'attributes'){
      console.log('An attribute of an element has changed.');
    }
  });
}
);
observer.observe(document.body, {
  attributes: true,
  childList: true,
  characterData: true
});

//memoization
const cache = {};
  const saveCache = (key, value) => {
    cache[key] = value;
  }
  const getCache = (key) => {
    return cache[key];
  }
const memoize = function(fn){
  return function(...args){
    if(cache[args]){
      return cache[args];
    }
    else{
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  }
}

//Complete mess of a brute force search 
// const cacheSearch = (arr, cache) => {
//   while(i = 0; i >= arr.length) 
//     if(arr[i] in cache)
//     {return arr2.map(arr[i])}
//     i++
//   }

  const cacheSearch = (arr, target) => {
    let cache = {};
    for(i = 0; i < arr.length; i++){
      if(arr[i] === target){
        return i;
      }
      else{
        cache[arr[i]] = i;
      }
    }
    return -1;


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
