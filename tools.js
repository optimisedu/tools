// welcome to the mess that is my mind, I hope it helps you - this is not a traditional library and I have chose to not use module import. That may change. 
//This is built on the shoulders of giants massive shoutout to MDN, this is trying to be purely functional. I also want to thank Lukaz Ruebbekle --
//warning -- I didn't take any advice on error handling

//____________________________________________________________________BLOCKS______________________________________________________________________________
const DASH = "-";
const USCORE = "_";
const SPACE = " ";
const EMPTY = "";
const DOT = "."
const DOT_REGEX = /\./g;
const SPACE_REGEX = /\s/g;
const USCORE_REGEX = /_/g;
const ISBINARY = "/^0b[01]+$/i";

//__________________________________________________________________INTEGER BASICS -FAR MORE TO COME_______________________________________________________________

let i
const ADD = (int, val) => int + val;
const SUB = (int, val) => int - val;
const MUL = (int, val) => int * val;
const DIV = (int, val) => int / val;
const MOD = (int, val) => int % val;
const POW = (int, val) => Math.pow(int, val);
const SQRT = (int) => Math.sqrt(int);
const randomInt = (val) => Math.floor(Math.random() * val) ; 
const isEven = (num) => num % 2 == 0;
const isOdd = !isEven;

// int manipulation
const toString = (int) => int.toString();
const toInt = (str) => parseInt(str);
const toFloat = (str) => parseFloat(str);
const twoIntLeng = (int1, int2) => map(int1.size()+int2.size());

//________________________________________________________________STRING MANIPULATION________________________________________________________________________________
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

const truncatedString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength);
  }
  else{
  return str;
  }
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

//_______________________________________________________________SEARCH_____________________________________________________________________________________________

//binery search

  const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] === item) {
        return mid;
      }
      else if (arr[mid] < item) {
        low = mid + 1;
      }
      else {
        high = mid - 1;
      }
    }
    return -1;
  }

  const binarySearchRecursive = (arr, item, low, high) => {
    if (low > high) {
      return -1;
    }

    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    }
    else if (arr[mid] < item) {
      return binarySearchRecursive(arr, item, mid + 1, high);
    }
    else {
      return binarySearchRecursive(arr, item, low, mid - 1);
    }
  }

  
 // __________________________________________________________________ARRAYS________________________________________________________________________
  
  // 2d array
  const twoDArray = (rows, cols, val) => {
    let arr = [];
    for ( = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < cols; j++) {
        arr[i][j] = val;
      }
    }
  // return arr;
  // functional
  return arr.map(row => row.map(col => col = val));  
  }
  // 3d array
  const threeDArray = (rows, cols, depths, val) => {
    let arr = [];
    for ( = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < cols; j++) {
        arr[i][j] = [];
        for (let k = 0; k < depths; k++) {
          arr[i][j][k] = val;
        }
      }
    }
  // return arr;
  // functional 
  return arr.map(row => row.map(col => col.map(depth => depth = val)));
  }
  // 4d array
  const fourDArray = (rows, cols, depths, heights, val) => {      
    let arr = [];
    for ( = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < cols; j++) {
        arr[i][j] = [];
        for (let k = 0; k < depths; k++) {
          arr[i][j][k] = [];
          for (let l = 0; l < heights; l++) {
            arr[i][j][k][l] = val;
          }
        }
      }
    }
  // return arr;
  // functional
  return arr.map(row => row.map(col => col.map(depth => depth.map(height => height = val))));
  }

  //matrix
  const matrix = (rows, cols, val) => {
    let matrix = [];
    for ( = 0; i < rows; i++) {  
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = val;
      }
    }
    return matrix.map(row => row.map(col => col = val));
  }
  
  const matrixSearch = (matrix, item) => {
    for ( = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === item) {
          return true;
        }
      }
    }
    return false; 
  }
  
  
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

const arrHead = (arr) => arr[0];
const arrTail = (arr) => arr[-1];

//GENERRATOR

const generator = function*(start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for ( = start; i < end; i += step) {
      iterationCount++;
      yield i;
  }
  return iterationCount;
}

const fibonacci = function* (n) {
  let current = 0;

  for ( = 0; i < n; i++) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

//PURE FUNCTION RECURSION  -- LookUp The Y COMBINATOR

const recursion = function (n){
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

//_____________________________________________________________________IMAGE MANIPULATION________________________________________________________
const imgToBitmap = function(img){
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}


const imgTopng = function(img){
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL('image/png');
}

const imgToJpeg = function(img){
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL('image/jpeg');
}

const getImageToBitmap = (url) =>
loadImage(url).then(imgToBitmap);


const getImageToJpeg = (url) =>
loadImage(url).then(imgToJpeg);


const imgToPng = (url) =>
loadImage(url).then(imgToPng);


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

//memoization -- keep the cache as a local scope
const saveCache = (key, value) => {
    const cache = {};
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
//_______________________________________________EASE OF USE ________________________________

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
