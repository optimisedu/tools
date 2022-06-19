// welcome to the mess that is my mind, I hope it helps you - this is not a traditional library and I have chose to not use module import. That may change.
//This is built on the shoulders of giants massive shoutout to MDN, I am trying to keep as many of these functions pure as possible.
//I also want to thank Lukaz Ruebbekle for making the clarity of his talks and taking the time to give this a once over. I didn't take any advice on error handling

//////////////////////////////////////////////////////////////////////////////////////////////////
//            CONTENTS
//__________________________________________________________________________________________________
//
// --BUILDING BLOCKS
// --INTEGER BASICS
//    --(Int Manipulation)
// --STRING MANIPULATION
//    --(Casing)
//    --(Replacing)
//    --(Splitting)
//    --(Joining)
// --CREATING ARRAYS AND MATRICIES
//    --(Array Primatives)
//   --(Array Creation)
//   --(Matrix Creation)
//   --(Matrix Search)
//  --Tree Search
// --USEFUL EVENTS
// --(FUNCTIONAL) SEARCH METHODS
// --USEFUL EVENTS
// --URI MANIPULATION
// --IMAGE MANIPULATION, *useful, but use "npm i sharp" for C performance*
//   --(Canvas)
//   --(Image calls)
//   --(bitmap,JPEG,PNG,GIF loads)
// --Generator and Fibonacci
// --(Node Traversal)
// --RECUSION
//   --(Mutation Observer)
//   --(MEMOISATION and CACHING)
//   --(UNESSIISCCARY BRUTE FORCE)
// --Basic Async Promisses
// --Random Pieces of Lego
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//____________________________________________________________________--BUILDING BLOCKS--______________________________________________________________________________
const DASH = "-";
const USCORE = "_";
const SPACE = " ";
const EMPTY = "";
const DOT = "."
const DOT_REGEX = /\./g;
const SPACE_REGEX = /\s/g;
const USCORE_REGEX = /_/g;
const ISBINARY = "/^0b[01]+$/i";
const LEN = "length";

//__________________________________________________________________--INTEGER BASICS -FAR MORE TO COME_______________________________________________________________

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
const isOdd = (num) => num % 2 != 1;
const isOddUnFun = !isEven || isEven(num) ? true : false;
const mid = (high, low) => high - low || high + low / 2;

// --(Int manipulation)
const intToString = (int) => int.toString();
const strToInt = (str) => parseInt(str);
const strToFloat = (str) => parseFloat(str);
const twoIntLeng = (int1, int2) => map(int1.size() + int2.size());
const twoArrleng = (arr1, arr2) => map(arr1.length()+arr2.length());

//________________________________________________________________--STRING MANIPULATION--________________________________________________________________________________
const s = "Awkward . str / uctuure\ spe44ing - mistakes _ DELIBERATE"
const strAdd = (str, item) => str + item;
const strLen = (str) => str.LEN;
const valLen = (val) => val.toString().LEN;
const strFirst = (str, strLen) => str.strLen[1]
const strLast = (str, LEN) => str.strlen[-1]

//--(Casing)
 const lowercase = (str) => str.toLowerCase();
 const uppercase = (str) => str.toUpperCase();
 const capitalise = (str) => str.charAt(0).toUpperCase + s.slice(1);
 const decapitalise = (str) => str.charAt(0).tolowerCase + s.slice(1);
 const capitaliseWords = (str) =>//array
 str.split(space).map(capitalise).join(space);
 const strip = transformPipe(stripDashes, stripUnderscores);
 const startCase = transformPipe(strip, capitalizeWords);
 const pascalCase = transformPipe(startCase, stripSpaces);
 const camelCase = transformPipe(pascalCase, decapitalize);
 const kebabCase = transformPipe(strip, addDashes, lowercase);
 const snakeCase = transformPipe(strip, addUnderscores, lowercase);
 const constantCase = transformPipe(strip, addUnderscores, uppercase);

//--(Replacing)
const split = (str, sep) => str.split(sep);
 const replace = (str, targ, subj) => str.split(targ).join(subj);
 const removeDashes = (str) => replace(str, DASH, SPACE);
 const removeUscores = (str) => replace(str, USCORE, SPACE);
 const removeSpaces = (str) => replace(str, SPACE, EMPTY);
 const addDashes = (str) => replace(str, SPACE, DASH);
 const addUscores = (str) => replace(str, SPACE, USCORE);
 const removedot = (str) => replace (str, DOT, EMPTY)
 
 //--(Splitting)
 const splitOnSpace = (str) => split(str, SPACE);
 const splitOnDash = (str) => split(str, DASH);
 const splitOnUscore = (str) => split(str, USCORE);  
 const splitOnDot = (str) => split(str, DOT);
const splitOnLetter = (str) => split(str, EMPTY);
 
//--(Reducinging)
const reducingOnSpace = (str, fn, init) => str.reduce(split(str, SPACE), fn, init);
const reducingOnDot = (str, fn, init) => str.reduce(split(str, DOT), fn, init);
const reducingOnDash = (str, fn, init) => str.reduce(split(str, DASH), fn, init);
const reducingOnUscore = (str, fn, init) => str.reduce(split(str, USCORE), fn, init);
 
 //--(Joining)
 const join = (str, sep) => str.join(sep);
 const joinWithSpace = (str) => join(str, SPACE);
 const joinWithDash = (str) => join(str, DASH);
 const joinWithUscore = (str) => join(str, USCORE);
const joinWithDot = (str) => join(str, DOT);
const joinWithLetter = (str) => join(str, EMPTY);
const concat = (str, sep) => str.concat(sep);
const concatWithSpace = (str) => concat(str, SPACE);
const concatWithDash = (str) => concat(str, DASH);
const concatWithUscore = (str) => concat(str, USCORE);
const concatWithDot = (str) => concat(str, DOT);
const concatWithLetter = (str) => concat(str, EMPTY);
const truncatedString = (str, maxLength) => {//thank you lukaz
  return str.length > maxLength ? str.slice(0, maxLength) : str;
};
const truncatedStringWithDot = (str, maxLength) => {//thank the
  return str.length > maxLength ? str.slice(0, maxLength) : str.concatWithDot(str.slice(-1));// a bit excessive and concat can be
};
const reSize = (obj, len, key) => {
  let size = [];
  key = !key ? len == key.length : len == 1;
  for(i = 0; i <= len; i++)
  {
      size.push(obj[i])
  }
    return size
}
  //________________________________________________________Array Primatives__________________________________________________________________
  const arr = ['a','b','c']
  const arrr = [1,2,3]
  const arrHead = (arr) => arr[0];
  const arrTail = (arr) => arr[-1];
  const filter = (fn, arr) => arr.filter(fn);
  const arr2 = arr.map((item) => item + 1);
  const pop = (arr) => (arr.pop())
  const unset = (arr) => (arr.unset())
  const _filterEven = (arr) => (arr.filter(isEven))
const arrMap = (input, output)  => output.map(input);
const mapWith = (input, output) => output.map(input.forEach(input.splitWith));
const mapWithSpace = (input, output) => output.map(input.forEach(input.splittWithSpace));
const mapWithDash = (input, output) => output.map(input.forEach(input.splitWithDash));
const mapWithUscore = (input, output) => output.map(input.forEach(input.splitWithUscore));
const mapWithDot = (input, output) => output.map(input.forEach(input.splitWithDot));
const mapWithLetter = (input, output) => output.map(input.forEach(input.splitWithLetter));
const _pipe = (a, b) => (arg) => b(a(arg));
const transformPipe = (...ops) => ops.reduce(_pipe);
const arrAdd = (arr, item) => [...arr, item];
const sumAll = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const arrRemove = (arr, item) => arr.filter(i => i !== item); 
 const arrRemoveAll = (arr, item) => arr.filter(i => i !== item);
 const [arrFirst, arrLast] = [...arr].sort((a, b) => a - b);{
 return arrFirst !== arrLast ? arrFirst + sumAll([arrFirst + 1, arrLast]) : arrFirst;
}

 // ______________________________________________________Dimensional Arrays________________________________________________________________________
  
  // 2d array
  const twoDArray = (rows, cols, val) => {
    let arr = [];
    for (i = 0; i < rows; i++) {
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
    for (i = 0; i < rows; i++) {
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
    for (i = 0; i < rows; i++) {
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

  // --(Matrix)
  const matrix = (rows, cols, val) => {
    let matrix = [];
    for (i = 0; i < rows; i++) {  
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = val;
      }
    }
    return matrix.map(row => row.map(col => col = val));
  }
  
const matrixSearch = (matrix, item, key) => {
  for (i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === item) {
        return true;
      }
    }
  }
}



    

//---------------------------------------------------------USEFUL EVENTS----------------------------------------------------------------------------------
 const hover = onmouseover();
 const click = onclick();
 const dclick = ondblclick();
 let windowHeight = window.innerHeight(x)// optional z
 let windowWidth = window.innerWidth(y)//
 let windowArea = height * width;
  for(i = 0; i < arr.length; i++){
    let loopy
    console.log(loopy)
  }
//_______________________________________________________(FUNCTIONAL) SEARCH METHODS_____________________________________________________________________________________________

//Binery Search

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
  //the slice function significantly slows the recusion down even with a divide and conquer approach
const binarySearchRecursive = (arr, item) => {
  const high == arr.length - 1;
  const low = 0; 
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

const recursiveBinarySearch = (n, arr) => {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  if (n === arr[mid]) {
    return true;
  } else if (n < arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(mid));
  }
}

//(Tree Search)i
const treeSearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    arr[mid] < item ? (low = mid + 1) : (high = mid - 1);
  }
  return mid + 1;
};

treeSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);


  
//______________________________________________URI/encription______________________________________________________________________________________________
  
  //--(decode URI)
const decode = (str) => decodeURIComponent(str);

//--(encode string)
const encode = (str) => encodeURIComponent(str);

const encodeQueryString = (obj) => {//very useful for sending data to a server PGP
  let str = '';
  for (let key in obj) {
    str += `${encode(key)}=${encode(obj[key])}&`;
  }
  return str.slice(0, -1);
}

  const generateRandomString = (length) => {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += Math.random().toString(36).substring(2, 15);
    }
    console.log(str);
  }




//_____________________________________________________Genrator and Fisbonacci_______________________________________________________________________________________

const generator = function*(start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for (i = start; i < end; i += step) {
      iterationCount++;
      yield i;
  }
  return iterationCount;
}

const fibonacci = function* (n) {
  let current = 0;

  for (i = 0; i < n; i++) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}
//_____________________________________________________________________Node Traversal____________________________________________________________________  
let tail
let head
  const nodeAdd = (val) => {
    let node = {
      value: val,
      next: null
    }
    if (head === null) {  
      head = node;
      tail = node;
    }
    else {
      tail.next = node;
      tail = node;t
    }
    length++;
  }
  const nodeRemove = (val) => {
    let current = head;
    let previous = null;
    while (current !== null) {
      if (current.value === val) {
        if (previous === null) {
          head = current.next;
        }
        else {
          previous.next = current.next;
        } 
        length--;
        return true;
      } 
      previous = current;
      current = current.next;
    }
    return false;
  }
  const nodeSearch = (val) => {
    let current = head;
    while (current !== null) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  } 
  const nodeOutput = () => {
    let current = head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }





//_____________________________________________________________________IMAGE MANIPULATION________________________________________________________
//web
const getJSON = (url) => fetch(url).then(res => res.json());
const isValidUrl = function(url){
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

//image manipulation -- use the sharp library - https://sharp.pixelplumbing.com/ cpp much faster than js and many functions already available
const loadImage = function(url){
  return new Promise(function(resolve, reject){
      const image = new Image();
      image.onload = () => resolve(image);{
          image.onerror = () => reject(new Error('Could not load image at ' + url));
      };
      image.src = url;
  });
};


  const imgToBitmap = function (img) {
  const cache = {}
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
    cache = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return cache;
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

///--(bitmap,JPEG,PNG,GIF loads)


const getImageToBitmap = (url) =>
loadImage(url).then(imgToBitmap);


const getImageToJpeg = (url) =>
loadImage(url).then(imgToJpeg);


const imgToPng = (url) =>
loadImage(url).then(imgToPng);

const getFormData = (form) => {
  const data = new FormData(form);
  return data;
}

//___________________________________________________________________Recursion_______________________________________________________________________________________________

const recursion = (n) => (n == 0) ? 0 : recursion(n - 1);
const recusionThatWorks = (n) => {
  if (n == 0) {
    return 0;
  }
  return recusionThatWorks(n - 1);
};
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

//--(Memoization and Caching) 

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



  const cacheSearch = (arr, target) => {
    let cache = {};
    arr = [];
    for (i = 0; i < arr.length; i++) {
      target in cache ? cache[target] = i : cache[target] = -1;
      return cache[target] ? true : false;
    }
} 

  //destructuring function
  const destructuring = (obj) => { 
    let { name, age } = obj;
    console.log(name, age);
  }

  
//_________________________________________________________________Getters and Setters___________________________________________________________________________
const get = (obj, key) => obj[key];
const set = (obj, key, value) => {obj[key] = value; return obj;};
const unset = (obj, key) => {delete obj[key]; return obj;};
const has = (obj, key) => obj.hasOwnProperty(key);
const hasnt = (obj, key) => !obj.hasOwnProperty(key);
const hasValue = (obj, key, value) => obj[key] === value;
const hasntValue = (obj, key, value) => obj[key] !== value;

//Complete mess of a brute force search
// const regret = (arr, cache) => {
//   while(i = 0; i >= arr.length)
//     if(arr[i] in cache)
//     {return arr2.map(arr[i])}
//     i++
//   }

//_________________________________________________________________Basic Async and Promisses___________________________________________________________________________
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

//There is no right way of programming but there certainly are stack overflows
