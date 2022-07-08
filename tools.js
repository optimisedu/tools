//Welcome to the mess that is my mind, I hope it helps you - this is not a traditional library and I have chose to not use module import. That may change.
//This is built on the shoulders of giants massive shoutout to MDN, I am trying to keep as many of these functions pure as possible.
//I also want to thank Lukaz Ruebbekle for making the clarity of his talks and taking the time to give this a once over. I didn't take any advice on error handling
//Potentially this could be used as a teaching resource after a lot of cleaning. If anybody wants input it would be appreciated.

//////////////////////////////////////////////////////////////////////////////////////////////////
//            CONTENTS
//__________________________________________________________________________________________________
//
// --Lego Blocks | Functional programming part 1
// --INTEGER BASICS
//    --(Int Manipulation)
// --STRING MANIPULATION
//    --(Casing)
//    --(Replacing)
//    --(Splitting)
//    --(Joining)
//  --Functors | Functional Programming Part 2
// --CREATING ARRAYS AND MATRICIES
//    --(Array Primatives)
//   --(Array Creation)
//   --(Matrix Creation)
//   --(Matrix Search)
//  --Tree Search
// --(FUNCTIONAL) SEARCH METHODS
// --URI MANIPULATION
// --IMAGE MANIPULATION, *useful, but use "npm i sharp" for C performance*
//   --(Canvas)
//   --(Image calls)
//   --(bitmap,JPEG,PNG,GIF loads)
// --Generator and Fibonacci
// --(Node Traversal)
// --RECUSION AND MEMORY MANAGEMENT
//   --(Mutation Observer)
//   --(MEMOISATION and CACHING)
//   --(UNESSIISCCARY BRUTE FORCE)
// --BASIC ASYNC PROMISES
// --USEFUL EVENTS
// --FUNCTIONAL PROGRAMMING PART (N) CURRYING AND SUMMERY
// --Random Pieces of Lego
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//____________________________________________________________________--Lego Blocks | Functional programming part 1--______________________________________________________________________________
//const or constants are "block scoped". Think of them as individual containers. Their name cannot be redeclared, however they store a value as an object. 
//That value can be any primative type, but if they store arrays[] or hashes{hash, key} then the objects can be manipulated. This is extremely useful as you will see.
//The old way of storing  variables was var. You will find it in a lot of legacy code. Vars still retain some usefulness as unlike let or const they get 
//"hoisted" to the top of their scope. This is because javascript in series top to bottom. Toggle is a very useful functor. Arrow functions are not required
//nor is the ternary operator. They are a relatively new style (es6) allowing you have "implicit return" so you can tell ? is a truthy value and : is false. 
//Toggle reverses that.

const DOT = ".";
const DASH = "-";
const USCORE = "_";
const SPACE = " ";
const EMPTY = "";
const DOT_REGEX = /\./g;
const SPACE_REGEX = /\s/g;
const USCORE_REGEX = /_/g;
const ISBINARY = "/^0b[01]+$/i";
const LEN = "length";
const toggle = (e) => (true ? false : true);

//__________________________________________________________________--INTEGER BASICS -FAR MORE TO COME_______________________________________________________________
//The let variable can be recalled multiple times. There are some coding patterns which are near universal -- i is iterate, and if you have a lot of for loops
//it is often worth letting i globally (as opposed to each time you have parenthesis()). As a beginner learning code knowing the operators inside out is a great help

let i;
const ADD = (int, val) => int + val;
const SUB = (int, val) => int - val;
const MUL = (int, val) => int * val;
const DIV = (int, val) => int / val;
const MOD = (int, val) => int % val;
const POW = (int, val) => Math.pow(int, val);
const SQRT = (int) => Math.sqrt(int);
const randomInt = (val) => Math.floor(Math.random() * val);
const isEven = (num) => num % 2 == 0;
const isOdd = (num) => num % 2 != 1;
const isOddUnFun = !isEven || isEven ? false : true;
const mid = (high, low) => high - low || high + low / 2;

// --(Int manipulation)   
const intToString = (int) => int.toString();
const strToInt = (str) => parseInt(str);
const strToFloat = (str) => parseFloat(str);
const twoIntLeng = (int1, int2) => map(int1.size() + int2.size());
const twoArrleng = (arr1, arr2) => map(arr1.length() + arr2.length());

//________________________________________________________________--STRING MANIPULATION--________________________________________________________________________________
//I hope this code has been self explanatory. For strings I wanted to show that there are many ways of achieving the same goal. Javascript is a fairly heavy
//                                                  language so different methods suit different approaches

const str = "Awkward . str / uctuure spe44ing - mistakes _ DELIBERATE";
const strAdd = (str, item) => str + item;
const strLen = (str) => str.LEN;
const valLen = (val) => val.toString().LEN;
const strFirst = (str, strLen) => str.strLen[1];
const strLast = (str, LEN) => str.strlen[-1];
const _pipe = (a, b) => (arg) => b(a(arg));
const transformPipe = (...ops) => ops.reduce(_pipe);

//--(Replacing)
const split = (str, sep) => str.split(sep);
const replace = (str, targ, subj) => str.split(targ).join(subj);
const removeDashes = (str) => replace(str, DASH, SPACE);
const removeUscores = (str) => replace(str, USCORE, SPACE);
const removeSpaces = (str) => replace(str, SPACE, EMPTY);
const addDashes = (str) => replace(str, SPACE, DASH);
const addUscores = (str) => replace(str, SPACE, USCORE);
const removedot = (str) => replace(str, DOT, EMPTY);

//--(Casing)
const lowercase = (str) => str.toLowerCase();
const uppercase = (str) => str.toUpperCase();
const capitalise = (str) => str.charAt(0).toUpperCase + s.slice(1);
const decapitalise = (str) => str.charAt(0).tolowerCase + s.slice(1);
const capitaliseWords = (str) => str.split(SPACE).map(capitalise).join(SPACE);
const strip = transformPipe(removeDashes, removeUscores);
const stripSpaces = (str) => replace(str, SPACE, EMPTY);
const startCase = transformPipe(strip, capitaliseWords);
const pascalCase = transformPipe(startCase, stripSpaces);
const camelCase = transformPipe(pascalCase, decapitalise);
const kebabCase = transformPipe(strip, addDashes, lowercase);
const snakeCase = transformPipe(strip, addUscores, lowercase);
const constantCase = transformPipe(strip, addUscores, uppercase);

//--(Splitting)
const splitOnSpace = (str) => split(str, SPACE);
const splitOnDash = (str) => split(str, DASH);
const splitOnUscore = (str) => split(str, USCORE);
const splitOnDot = (str) => split(str, DOT);
const splitOnLetter = (str) => split(str, EMPTY);

//--(Reducinging)
const reducingOnSpace = (str, fn, init) =>
  str.reduce(split(str, SPACE), fn, init);
const reducingOnDot = (str, fn, init) => str.reduce(split(str, DOT), fn, init);
const reducingOnDash = (str, fn, init) =>
  str.reduce(split(str, DASH), fn, init);
const reducingOnUscore = (str, fn, init) =>
  str.reduce(split(str, USCORE), fn, init);

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
const truncatedString = (str, maxLength) => {
  //thank you lukaz
  return str.length > maxLength ? str.slice(0, maxLength) : str;
};
const truncatedStringWithDot = (str, maxLength) => {
  return str.length > maxLength
    ? str.slice(0, maxLength)
    : str.concatWithDot(str.slice(-1)); // a bit excessive and concat can be used
};
const reSize = (obj, len, key) => {
  let size = [];
  key = !key ? len == key.length : len == 1;
  for (i = 0; i <= len; i++) {
    size.push(obj[i]);
  }
  return size;
};
//________________________________________________________Array_____________________________________________________________________________________
//____________________________________________________________________________________________________________________________________________________
const arrr = [1, 2, 3];
const arr2 = arr.map((item) => item + 1);
const mapHOF = (fn, arr) => arr.map(fn);
const arrHead = (arr) => arr[0];//start| - are probably better function names for real usage
const arrTail = (arr) => arr[-1];//end | - but I like thinking of 1d arrays as a snake [<--->]
const dotAtEnd = (arr) => arr.every(concatWithDot(arr[i]));
//example of why this would work much better in typescript
const quickSearch = (item, arr) => arr.includes(item) ? item : false
const _filterEven = (arr) => arr.filter(isEven);
const isEvenArr = (arr) => isEven(arr.length - 1) ? true : false;
const arrMap = (input, output) => output.map(input);
const mapWith = (input, output) => output.map(input.forEach(input.splitWith));
const mapWithLetter = (input, output) =>
  output.map(input.forEach(input.splitWithLetter));
const arrRemoveDupes = (arr, item) => [...new Set(arr.filter(fn))];
const arrRemoveDupesWithSpace = (arr, fn) => [
  ...new Set(arr.filter(fn).splitWithSpace()),
];
const arrRemoveDupesWithDash = (arr, fn) => [
  ...new Set(arr.filter(fn).splitWithDash()),
];
const arrRemoveDupesWithUscore = (arr, fn) => [
  ...new Set(arr.filter(fn).splitWithUscore()),
];
const arrRemoveDupesWithDot = (arr, fn) => [
  ...new Set(arr.filter(fn).splitWithDot()),
];
const arrRemoveDupesWithLetter = (arr, fn) => [
  ...new Set(arr.filter(fn).splitWithLetter()),
];
const arrAdd = (arr, item) => [...arr, item];
const sumAll = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const arrRemove = (arr, item) => arr.filter((i) => i !== item);
const arrRemoveWith = (arr, fn) => arr.filter(fn);
const firstLastSort = (a, b, arr) => {
  let arrFirst = arr[0];
  let arrLast = arr[-1];
  a == b ? arr.sort() : arr.sort((a, b) => a - b);
};
const firstLastSum = (a, b, arr) =>
arrFirst !== arrLast ? arrFirst + sumAll([arrFirst + 1, arrLast]) : arrFirst;
[...arr].sort((a, b) => a + b);
const firstLastReduceSort = (a, b, arr) => [...arr].sort((a, b) => a - b);
const arrItemRemove = (arr, item) => arr.filter((i) => i !== item);
//_____________________________________________________________________Functional Programing Part 1_________________________________________________
//now things are starting to get a bit more complex we can do things like sort, filter, map, reduce, etc. These are the basic higher order functions 
//(HOFs). Functional programming is much more fun when you introduce functions which take and return other functions.
const arr = ["a", "b", "c"];
const arrPosition = (arr, target) => ((quickSearch(arr, target) ? arr.indexOf(target) : console.log(false))) ;
//This where things start to get a bit more interesting, arrPosition above us is a bit more defensive than the index of method, some people may have
//All the functions called by our HOF work stand alone. quickSearch only returns true or false, indexOf returns -1 or a number however both 
//throw errors if there isn't an array or the target isn't found. If we go back to our --Ineger Manipulation-- saying is 
const Z = (X) => X
const Y = (X, Y) => Z + X;
//This is Y, this is where functional programming becomes interesting, and Y I am making notes on the evolution of my tools for the open source community
//In this case Z - or arrPosition are monads - basic design patterns, XOR functions. Many names applicable in many ways this is not disimilar to X(N)OR Logic gates
//Compact programs translate across all langauges.Z and X may always be the same but add them together and thats Y
//_________________________________________________________________ Arrays________________________________________________________________________

// 2d array
const twoDArray = (rows, cols, val) => {
  let arr = [];
  // for (i = 0; i < rows; i++) {
  //   arr[i] = [];
  //   for (let j = 0; j < cols; j++) {
  //     arr[i][j] = val;
  //   }
  // }
  // return arr;
  // functional
  return arr.map((row) => row.map((col) => (col = val)));
};
//very basic to be improved upon - improve on concat
const flattenArr = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArr(curr));
    }
    return acc.concat(curr);
  }, []);
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
  return arr.map((row) => row.map((col) => col.map((depth) => (depth = val))));
};
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
  return arr.map((row) =>
    row.map((col) => col.map((depth) => depth.map((height) => (height = val))))
  );
};

// --(Matrix)
const matrix = (rows, cols, val) => {
  let matrix = [];
  for (i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = val;
    }
  }
  return matrix.map((row) => row.map((col) => (col = val)));
};

const matrixSearch = (matrix, item, key) => {
  for (i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === item) {
        return true;
      }
    }
  }
};

//_______________________________________________________(FUNCTIONAL) SEARCH METHODS_____________________________________________________________________________________________

//Binery Search

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr[-1];
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
//the slice function significantly slows the recusion down even with a divide and conquer approach
const binarySearchRecursive = (arr, item) => {
  let high = arr[-1];
  let low = 0;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === item) {
    return mid;
  } else if (arr[mid] < item) {
    return binarySearchRecursive(arr, item, mid + 1, high);
  } else {
    return binarySearchRecursive(arr, item, low, mid - 1);
  }
};

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
};

//(Tree Search)i
const treeSearch = (arr, item) => {
  let low = 0;
  let high = arr[-1];
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    arr[mid] < item ? (low = mid + 1) : (high = mid - 1);
  }
  return mid + 1;
};

//______________________________________________URI/encription______________________________________________________________________________________________

//--(decode URI)
const decode = (str) => decodeURIComponent(str);

//--(encode string)
const encode = (str) => encodeURIComponent(str);

const encodeQueryString = (obj) => {
  //very useful for sending data to a server PGP
  let str = "";
  for (let key in obj) {
    str += `${encode(key)}=${encode(obj[key])}&`;
  }
  return str.slice(0, -1);
};

const generateRandomString = (length) => {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += Math.random().toString(36).substring(2, 15);
  }
  console.log(str);
};

//_____________________________________________________Genrator and Fisbonacci_______________________________________________________________________________________

const generator = function* (start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for (i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
};

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
};
//_____________________________________________________________________Node Traversal____________________________________________________________________
let tail;
let head;
const nodeAdd = (val) => {
  let node = {
    value: val,
    next: null,
  };
  if (head === null) {
    head = node;
    tail = node;
  } else {
    tail.next = node;
    tail = node;
    t;
  }
  length++;
};
const nodeRemove = (val) => {
  let current = head;
  let previous = null;
  while (current !== null) {
    if (current.value === val) {
      if (previous === null) {
        head = current.next;
      } else {
        previous.next = current.next;
      }
      length--;
      return true;
    }
    previous = current;
    current = current.next;
  }
  return false;
};
const nodeSearch = (val) => {
  let current = head;
  while (current !== null) {
    if (current.value === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};
const nodeOutput = () => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

//_____________________________________________________________________IMAGE MANIPULATION________________________________________________________
//web
const getJSON = (url) => fetch(url).then((res) => res.json());
const isValidUrl = function (url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
const getImage = (url) => {
  if (isValidUrl(url)) {
    return getJSON(url);
  }
  return null;
}

const getImageData = (url) => {
  return getImage(url).then((img) => {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, img.width, img.height);
  }
  );
}


//image manipulation -- use the sharp library - https://sharp.pixelplumbing.com/ cpp much faster than js and many functions already available
const loadImage = function (url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = () => resolve(image);
    {
      image.onerror = () => reject(new Error("Could not load image at " + url));
    }
    image.src = url;
  });
};
const imgConverter = function (imgPath, extension, newImg) {
  imgPath = promt("enter the path to the image you want to convert")
  extension = promt("enter the suffix you want to convet to")
  imgPath.split('.')[0];
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imgPath, 0, 0);
  newImg = imagePath.replace(imgPath + DOT +` ${ extension }`)
  return canvas.toDataURL(newImg);
};

const imgToBitmap = function (img) {
  const cache = {};
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  cache = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
};

const imgTopng = function (img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL("image/png");
};

const imgToJpeg = function (img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL("image/jpeg");
};

///--(bitmap,JPEG,PNG,GIF loads)

const getImageToBitmap = (url) => loadImage(url).then(imgToBitmap);

const getImageToJpeg = (url) => loadImage(url).then(imgToJpeg);

const imgToPng = (url) => loadImage(url).then(imgToPng);

const getFormData = (form) => {
  const data = new FormData(form);
  return data;
};
//_________________________________________________________________Getters and Setters and Hashes_______________________________________________________________________
//Lots of playing can be done with this lego -- specially mixed with some of the array functions and caching covered in the next section
//also tested search function work with these objects - --See FUNCTIONAL PROGRAMMING PART 2-- 

const obj2 = { a: 1, b: 2, c: 3 }
const obj3 = { d: 4, e: 5, f: 6 }

const get = (obj, key) => obj[key];
const set = (obj, key, value) => 
{obj.hasOwnProperty(key) ? obj.key != value : obj[key] = value;}
const unset = (obj, key) => {
  delete obj[key];
  return obj;
};
const has = (obj, key) => obj.hasOwnProperty(key);
const keys = obj => Object.keys(obj);
const values = obj => Object.values(obj);
const entries = obj => Object.entries(obj);
const merge = (obj1, obj2) => {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}

const mergeWith = (obj1, obj2, fn) => {
    for (let key in obj2) {
        obj1[key] = fn(obj1[key], obj2[key]);
    }
    return obj1;
}
const pick = (obj, keys) => {
    let newObj = {};
    for (let key in obj) {
        if (keys.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const omit = (obj, keys) => {
    let newObj = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
const pickBy = (obj, fn) => {
    let newObj = {};
    for (let key in obj) { 
        if (fn(obj[key])) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const omitBy = (obj, fn) => {
    let newObj = {};
    for (let key in obj) {
        if (!fn(obj[key])) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const mapKeys = (obj, fn) => {
    let newObj = {};
    for (let key in obj) {
        newObj[fn(key)] = obj[key];
    }
    return newObj;
}


//Complete mess of a brute force search
// const regret = (arr, cache) => {
//   while(i = 0; i >= arr.length)
//     if(arr[i] in cache)
//     {return arr2.map(arr[i])}
//     i++
//   }
//___________________________________________________________________Functional Programming Part 3 | Recursion and Memory Management__________________________________________________________________________________________
// Functional programming patterns are so well recognised because while the syntax may shift the idea behind it goes back many decades (thats centuries in programmer years)
// {function1, function2, function3} is a fairly clean stack, scripts make their calls line by line in order. Moore's Law is often represented as computer power doubles every
// two years. Early programmers had to be clever with their scripts to prevent their stacks taking up more space than their memory had and meaning good code can fail on bad devices.
// While for loops should be known to you by now, they perform a lot of work very quickly, however recursion is the functional way of achieving the same thing,
// clever hackers have reinvented this wheel over. What if a function could call itself. Why though? 
const globalCache = {};
const recursion = (n) => (n == 0 ? 0 : recursion(n - 1));

const recusionBrokenDown = (n) => {
  if (n == 0) {
    return 0;
  }
  return recusionThatWorks(n - 1);
};
// recursion cycles over a function until a nice binary value is fulfilled. On top of this memoization, caching and the callstack really evolved.
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log("An attribute of an element has changed.");
    }
  });
});
observer.observe(document.body, {
  attributes: true,
  childList: true,
  characterData: true,
});

//--(Memoization and Caching)

const memoize = function (fn) {
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  };
};


//destructuring function
const destructuring = (obj) => {
  let { name, age } = obj;
  console.log(name, age);
};


//---------------------------------------------------------USEFUL EVENTS----------------------------------------------------------------------------------
const hover = onmouseover();
const click = onclick();
const dclick = ondblclick();
let windowHeight = window.innerHeight(x); // optional z
let windowWidth = window.innerWidth(y); //
let windowArea = height * width;
for (i = 0; i < arr.length; i++) {
  let loopy;
  console.log(loopy);
}

//--------------------------------------------------------FUNCTIONAL PROGRAMMING PART (N) CURRYING--------------------------------------------------------------------------
//In my personal opinion currying is the apex of functional programming defining and calling itself, in larger more practical design systems.
//Currying can save a lot of time . The last 600 lines has been a monad - a personal toolbox which is a self contained system.
//If you have followed, than the most useful of functions which I have defined are curried.

const curryFunction = (fn, ...args) => {
  return (...moreArgs) => fn(...args, ...moreArgs);
}
const add = (a, b) => a + b;
const add5 = curryFunction(add, 5);
console.log(add5(10));
//_______________________________________________EASE OF USE ________________________________

//Working with the DOM - no longer immutable, but nesciscarry for Front End Design (FED), not being used to extend classes
//as that is an unescissary application at this point but for more practical work with the shadow dom and switching classes
//these can be declared universally at the top of a stylesheet in order to improve speed and readability.
/* TODO:                                                                                                                      */
/* benchmark time to create (x) elements and shadow elements using this method both as individual functors or as part of a file*/

//building blocks D, S, C

const D = document;
const S = shadow;
const C = child;

//initialise shaddow DOM and muatable element creation and manipulation

this.attachShadowRoot();
createShadowElement; //mode open and close <>
appendShadowRoot; //not immutable but unlikely to cause unwarrented sideFX unless working with forms
customElement;
createElement;
getElementById;
querySelector;
appendElement;
setAttribute;
setAtrributes;
setAtributesString;
hasAttribute; //
setAtributeValue; //not immutable or functional

//There is no right way of programming but there certainly are stack overflows
