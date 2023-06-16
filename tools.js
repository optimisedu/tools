//_______________________________________________EASE OF USE ________________________________

//Welcome to the mess that is my mind, I hope it helps you - this is not a traditional library and I have chose to not use module import. That may change.
//This is built on the shoulders of giants.Mmassive shoutout to MDN, I am trying to keep as many of these functions pure as possible.
//I also want to thank Lukaz Ruebbekle for making the clarity of his talks and taking the time to give this a once over. I didn't take any advice on error handling
//Potentially this could be used as a teaching resource after a lot of cleaning. If anybody wants input it would be appreciated.

//////////////////////////////////////////////////////////////////////////////////////////////////
//            CONTENTS
//__________________________________________________________________________________________________
//
// **--Lego Blocks | Functional programming part 1
// --INTEGER BASICS**
//    --(Int Manipulation)
// --STRING MANIPULATION
//    --(Casing)
//    --(Replacing)
//    --(Splitting)n
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
//   --(Image eventListeners)
// --Generator and Fibonacachci
// --(Node Traversal)
// --Functional Programming Part 3 | RECUSION AND MEMORY MANAGEMENT
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

const DOT = '.';
const DASH = '-';
const USCORE = '_';
const SPACE = ' ';
const EMPTY = '';
const DOT_REGEX = /\./g;
const SPACE_REGEX = /\s/g;
const USCORE_REGEX = /_/g;
const LEN = length; //unescisarry
const isBool = (bool) => (bool === true ? true : false);
const toggle = (e) => (true ? false : true);

//__________________________________________________________________--INTEGER BASICS -FAR MORE TO COME_______________________________________________________________
//The let variable can be recalled multiple times. There are some coding patterns which are near universal -- i is iterate, and if you have a lot of for loops, e is generally event and n is genrerally number. This is not a requirement and only advised for readability.
//it is often worth letting i globally (as opposed to each time you have parenthesis()). As a beginner learning code knowing the operators inside out is a great help.
//One of the main pillars of functional programming is that there should be no side effects - a function should have one predictable return value. This is a toolbox rather than a purely fuctional monoid but it has many useful tools.

let i; //iterable
let n; //this allows the same value to be passed through multiple functions as a property.
let int;//this is required as a second parameter for some of the following functions. Declaring your functions/arguments at the top of your code is a good habit.
const ADD = (int, n) => int + n;
const SUB = (int, n) => int - n;
const MUL = (int, n) => int * n;
const DIV = (int, n) => int / n;
const MOD = (int, n) => int % n;
const POW = (int, n) => Math.pow(int, n);
const SQRT = (n) => Math.sqrt(n);
const randomInt = (n) => Math.floor(Math.random() * (n - 1));
const isEven = (n) => (n % 2 == 0 ? true : false);

const coinFlip = () => (Math.random() > 0.5 ? true : false);
const isOdd = (n) => (n % 2 != 1 ? num : false);//another two ways of finding an odd number and returning a boolean value.

const isOddUnFun = !isEven || isEven() ? false : true;
const isOddClosure = toggle(isEven(n))//and just a little taste of what is to come
const isFactor = (n, int) => (n % int == 0 ? true : false);
const isPrime = (n) => {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};
const isFactor = (n, int) => { isOdd(n) ? false : true; };

const isPrime = (n) => {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

const r = () => randomInt(255)
const mid = (int, n) => int - n || (n + int) / 2;//option one is getting the mode average, option two is median/mean(they are both the same as there are only two parameters)
// --(Int manipulation)
let fx = {};
const intToString = (n, fx) => fx = n.toString();
const strToInt = (str, fx) => fx = parseInt(str, fallback);//saving parseInt into a variable is not a requrirement however it is good practice if you are planning on using your  int in future functions.
const strToFloat = (str) => parseFloat(str);
const twoArrleng = (arr1, arr2) => map(arr1.length() + arr2.length());

//PRACTICAL USE: Generate a random color - this saves writing the whole randomInt function,
//which saves generating a random color line line ETC

function generateRandomColor() {
	hue = randomInt(360);
	sat = randomInt(100) + '%';
	lgt = randomInt(100) + '%';
	const a = 1;
	return 'hsl(' + hue + 'deg, ' + sat + ', ' + lgt + ',' + a + ')';
}

let RGB = '#' + Math.random().toString(16).slice(-7);

const createRandomGradient = (n) => {
	let gradient = []; //early use of caching -- canvas use later
	n = randomInt(10);
	for (i = 0; i < n; i++) {
		gradient.push(generateRandomColor());
	}
	return gradient;
};
//============================================String Manipulation==================================================
//I hope this code has been self explanatory. For strings I wanted to show that there are many ways of achieving the same goal. Javascript is a very heavy
// language so different methods suit different approaches

const str = 'Awkward . str / uctuure spe44ing - mistakes _ DELIBERATE';
const strAdd = (str, item) => str + item;
const strLen = (str) => str.LEN;
const strFirst = (str, strLen) => str.strLen[1];
const strLast = (str, strLen) => str.strlen[-1];
const beginStr = (str, subj) => str.startsWith(subj);
const endStr = (str, subj) => str.endsWith(subj);
const _pipe = (a, b) => (arg) => b(a(arg));
const transformPipe = (...ops) => ops.reduce(_pipe);

//--(Replacing)
const split = (str, sep) => str.split(sep);
const replace = (str, targ, subj) => str.split(targ).join(subj);
const removeDashes = (str) => replace(str, DASH, SPACE);
const removeInt = (str, subject) => str.replace(int, EMPTY);
const removeUscores = (str) => replace(str, USCORE, SPACE);
const removeSpaces = (str) => replace(str, SPACE, EMPTY);
const addDashes = (str) => replace(str, SPACE, DASH);
const addUscores = (str) => replace(str, SPACE, USCORE);
const removedot = (str) => replace(str, DOT, EMPTY);
const endSentence = (str) => replace(str, DOT, EMPTY);

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
const whiteSpace = (str) => str.replace(/\s/g, '');


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
	 str.length > maxLength ? str.slice(0, maxLength) : str;
};
const truncatedStringWithDot = (str, maxLength) => {
	str.length > maxLength
		? str.slice(0, maxLength)
		: str.concatWithDot(str.slice(-1)); // a bit excessive and concat can be used
};
const truncatedStringWithDash = (str, maxLength) => {
	 	str.length > maxLength
		? str.slice(0, maxLength)
		: str.concatWithDash(str.slice(-1));
};

//======================================Array====================================
const arrr = [1, 2, 3];
const arr2 = arrr.map((item) => item + 1);
const mapHOF = (fn, arr) => arr.map(fn);
const filterSpread = (arr, fn) => [...arr].filter(fn);
const spreadHOF = (fn, arr) => fn(...arr);
const arrHead = (arr) => arr[0]; //start| - are probably better function names for real usage
const arrTail = (arr) => arr[-1]; //end | - but I like thinking of 1d arrays as a snake [<--->]
const dotAtEnd = (arr) => arr.every(concatWithDot(arr[i]));
const dotAtStart = (arr) => arr.every(concatWithDot(arr[i]));
//example of why this would work much better in typescript
const quickSearch = (arr, target) => (arr[item] ? true : false);
const _filterEven = (arr) => arr.filter(isEven);
const isEvenArr = (arr) => (isEven(arr.length - 1) ? true : false);
const arrMap = (input, output) => output.map(input);
const mapWith = (input, output) => output.map(input.forEach(input.splitWith));
const mapWithLetter = (input, output) =>
	output.map(input.forEach(input.splitWithLetter));
const splitWith = (str, sep) => split(str, sep);
const splitWithLetter = (str, sep) => split(str, sep);
const splitWithDash = (str) => split(str, DASH);
const splitWithUscore = (str) => split(str, USCORE);
const splitWithDot = (str) => split(str, DOT);
const splitWithSpace = (str) => split(str, SPACE);
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
const weakmap = new WeakMap();
//OR
const arrRemoveWith = (arr, fn) => arr.filter(fn);
const arrRemoveWithSpace = (arr, fn) => arr.filter(fn).splitWithSpace();
const arrRemoveWithDash = (arr, fn) => arr.filter(fn).splitWithDash();
const arrRemoveWithUscore = (arr, fn) => arr.filter(fn).splitWithUscore();
const arrRemoveWithDot = (arr, fn) => arr.filter(fn).splitWithDot();
const arrRemoveWithLetter = (arr, fn) => arr.filter(fn).splitWithLetter();
const arrAdd = (arr, item) => [...arr, item];
const sumAll = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const arrRemove = (arr, item) => arr.filter((i) => i !== item);
const merge = (arr1, arr2) => [...arr1, ...arr2];
// this sorting algoirtm is an example of why functional purity (one parameter and one output) or typechecking is better than mutability in *most* cases
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
const shuffle = (arr) => {
	let i = arr.length,
	  j = 0, end
	  temp
  while (i < 0) {
	  j = Math.floor(Math.random() * i)
	  i--
	  temp = arr[i]
	  arr[i] = arr[j]
	  arr[j] = temp
  }
  return arr
}
//=========================================Types==================================
//I have left it to here to add type validation as it's own section. Most programming languages have types built in and there are many ways of declaring types. If you aren't ready or do not want to deviate to typescript, adding basic type validation is a good idea.

const isArray = val => Array.isArray(val);
const isObject = val => typeof val === 'object';
const isString = val => typeof val === 'string';
const isNumber = val => typeof val === 'number';
const isBoolean = val => typeof val === 'boolean';
const isFunction = val => typeof val === 'function';
const isUndefined = val => typeof val === 'undefined';
const isNull = val => val === null;
const isSymbol = val => typeof val === 'symbol';
const isBigInt = val => typeof val === 'bigint';
const isPrimitive = val =>
  isString(val) ||
  isNumber(val) ||
  isBoolean(val) ||
  isSymbol(val) ||
  isBigInt(val) ||
  isNull(val) ||
  isUndefined(val);
const isIterable = val => isString(val) || isArray(val) || isObject(val);
const isEven = val => val % 2 === 0;
const isOdd = val => val % 2 !== 0;
const isPositive = val => val > 0;
const isNegative = val => val < 0;
const isZero = val => val === 0;
const isTruthy = val => !!val;
const isFalsy = val => !val;
const isPromise = val => val instanceof Promise;
const isDate = val => val instanceof Date;
const isRegExp = val => val instanceof RegExp;
const isMap = val => val instanceof Map;
const isSet = val => val instanceof Set;

const
// =========================================Functional Proramming Part 1==================================
//now things are starting to get a bit more complex we can do things like sort, filter, map, reduce, etc. Thetringe are the basic higher order functions
//(HOFs). Functional programming is much more fun when you introduce functions which take and return other functions. This is a good reason to keep your code clean - it reduces the amount of arguments you have to keep in both your, and the computer's memory.
const arr = ['a', 'b', 'c'];
const arrPosition = (arr, target) => {
	quickSearch(arr, target) ? arr.indexOf(target) : console.log(false);
};

const randomCoord = (val) => [randomInt(val), randomInt(val)];
//calling our randomInt function twice results in a very clean way of getting a random coordinate on canvas. We also now have a function which is able to quickly search for this random coordinate.
//This is very applicable. This one line function can be used to encrypt and decrypt data efficiently.

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
};

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
const listRandomCoord = (val, list) => {
	list = [];
	let item = randomcoord(val);
	list.push(...item);
	return list;
};

// --(minimal array sorts  - oN extend with spread and reduce or flatten where needed
//quick sort algorithm
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let divide = (arr) => {
	let a = [];
	let b = [];
	for (let i = 0; i < arr.length; i++) {
		isEven(i) ? a.push(arr[i]) : b.push(arr[i]);
	}
	return [a, b];
};
let combine = (a, b) => {
	let arr = [];
	for (let i = 0; i < a.length; i++) {
		arr.push(a[i]);
		arr.push(b[i]);
	}

	return arr;
};
let quickSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//bubble sort algorithm
let bubbleSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//insertion sort algorithm
let insertionSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//selection sort algorithm
let selectionSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//tim sort algorithm
let timSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//heap sort algorithm
let heapSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//cocktail sort algorithm
let cocktailSort = (arr) => {
  let [a, b] = divide(arr);
  return combine(a, b);
};
//gnome sort algorithm
//===============================Numbers in Arayy======================
const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const product = (arr) => arr.reduce((acc, curr) => acc * curr, 1);
const max = (arr) => Math.max(...arr);
const min = (arr) => Math.min(...arr);
const average = (arr) => sum(arr) / arr.length;
const median = (arr) => {
	arr.sort((a, b) => a - b);
	let mid = Math.floor(arr.length / 2);
	return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};
//_==============================URI & Encryption======================_

//--(decode URI)
const decode = (str) => decodeURIComponent(str);

//--(encode string)
const encode = (str) => encodeURIComponent(str);

const encodeQueryString = (obj) => 
    Object.entries(obj).map(([k, v]) => `${encode(k)}=${encode(v)}`).join('&');

const generateRandomString = (length) => {
	let str = '';
	for (let i = 0; i < length; i++) {
		str += randomInt(36).substring(2, 15);
	}
	console.log(str);
};
//alt
const generateRandomString = (length) => 
    Array.from({length}, () => randomInt(36).toString(36)).join('');

const form = (form) => {
	const data = new FormData(form);
	return data;
};

const formToJson = (form) => {
	const data = new FormData(form);
	return JSON.stringify(Object.fromEntries(data));
};

const formToUrlEncoded = (form) => {
	const data = new FormData(form);
	return new URLSearchParams(data).toString();
};

//==============================Generator and Fibonacci======================
//Anothe form of itteration, generators aren't pure by nature, but this fibonacci function has a predictable output from the input. The benefit of Generator Functions is that you can pause and edit as each step needs a yield - hence this basic boiler has a for loop iteration nested inside
const fibonacci = function* (n) {
    let [prev, curr] = [0, 1];
    while (n-- > 0) {
        [prev, curr] = [curr, prev + curr];
        yield prev;
    }
};


const fibonacci = function* (n, target) {
	let current = 0;
	target = target || 1;
	while (current< target) {
		let reset = yield (current[(current, next)] = [next, next + current]);
		if (reset) {
			current = 0;
			next = 1;
		}
		
	}
};

//break on target

//--(Generator)






//_____________________________________________________________________Node Traversal____________________________________________________________________
//is currently a mess - see oop.js for details


// o = n^2 it is hard to create a monoid like this without touching on big O notation. In simple terms N is Space and O is Memory, ideally if you can visualise this a linear search would be o = n as it is searching an arr[o] with a length of N. In Web development this is becoming less important, however if you have a complicated algoithm a base case plus test allows for(--recursion)  safely.

const linearSearch = (arr, val) =>
	arr.map((item, i) => (item === val ? i : false));

// this is the array search demonstrated functionally the use of connected terms in the prop(erties) is begining to show it's use - this "filtered linear search" uses two of the higher order functions as closures to created a third - see currying.

const filteredLinearSearch = (arr, val) =>
	arr
		.map((item, i) => (item === val ? i : -1))
		.filter((item) => item !== -1)[0];

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
};
        
//_____________________________________________________________________IMAGE MANIPULATION________________________________________________________
//web
const getJSON = (url) => fetch(url).then((res) => res.json());
const isValidUrl = (url) => {
	return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
const getImage = (url) => {
	isValidUrl(url) ? (img.src = url) : console.error(`${url} is not valid.`);
};

const getImageData = (url) => {
	return getImage(url).then((img) => {
		let canvas = document.createElement('canvas');
		let ctx = canvas.getContext('2d');
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0);
		return ctx.getImageData(0, 0, img.width, img.height);
	});
};

//image manipulation -- use the sharp library - https://sharp.pixelplumbing.com/ c much faster than js and many functions already available

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
const loadImage = function (url) {
	return new Promise(function (resolve, reject) {
		const image = new Image();
		image.onload = () => resolve(image);
		{
			image.onerror = () => reject(new Error('Could not load image at ' + url));
		}
		image.src = url;
	});
};

//strongly suggest using https://github.com/optimisedu/imgconvert , designed for bulk image conversion
const imgConverter = function (imgPath, extension, newImg) {
	imgPath = promt('enter the path to the image you want to convert');
	extension = promt('enter the suffix you want to convet to');
	imgPath.split('.')[0];
	const canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	const ctx = canvas.getContext('2d');
	ctx.drawImage(imgPath, 0, 0);
	newImg = imagePath.replace(imgPath + DOT + ` ${extension}`);
	return canvas.toDataURL(newImg);
};

const imgToBitmap = function (img) {
	const cache = {};
	const canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	const ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	cache = ctx.getImageData(0, 0, canvas.width, canvas.height);
	return canvas.toDataURL('image/png');
};

const imgTopng = function (img) {
	const canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	const ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	return canvas.toDataURL('image/png');
};

const imgToJpeg = function (img) {
	const canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	const ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	return canvas.toDataURL('image/jpeg');
};

//--(bitmap,JPEG,PNG,GIF loads)
//this is a safe way to load the image data that you want safely onto a canvas, from a valid URL, which has image data, and is a valid image type. This is an extremely powerful one line function

const angleRadians = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);
const angleDegrees = (p1, p2) => angleRadians(p1, p2) * (180 / Math.PI);
const distance = (p1, p2) => Math.hypot(p2.x - p1.x, p2.y - p1.y);

const pythagoras = (angle) => (angle * 180) / Math.PI;


const getImageToBitmap = (url) => loadImage(url).then(imgToBitmap);

const getImageToJpeg = (url) => loadImage(url).then(imgToJpeg);

const imgToPng = (url) => loadImage(url).then(imgToPng);
const drawCircle = (ctx, x, y, radius) => {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
};
const drawRectangle = (ctx, x, y, width, height) => {
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.closePath();
	ctx.fill();
};

const drawText = (ctx, text, x, y) => {
	ctx.fillText(text, x, y);
};
const drawLine = (ctx, startX, startY, finishX, finishY) => {
	ctx.beginPath();
	ctx.moveTo(startX, starty);
	ctx.lineTo(finishX, finishy);
	ctx.stroke();
};
const drawArc = (ctx, x, y, radius, startAngle, endAngle) => {
	ctx.beginPath();
	ctx.arc(x, y, radius, startAngle, endAngle, true);
	ctx.closePath();
	ctx.stroke();
};
const drawStar = (ctx, x, y, radius, sides) => {
	const angle = (Math.PI * 2) / sides;
	ctx.beginPath();
	ctx.moveTo(x, y);
	for (let i = 1; i < sides; i++) {
		const x = x + Math.cos(i * angle) * radius;
		const y = y + Math.sin(i * angle) * radius;
		ctx.lineTo(x, y);
	}
	ctx.closePath();
	ctx.stroke();
};
const drawHeart = (ctx, x, y, radius) => {
	ctx.beginPath();
	ctx.moveTo(x, y - radius);
	ctx.bezierCurveTo(
		x + radius,
		y - radius,
		x + radius,
		y + radius,
		x,
		y + radius
	);
	ctx.bezierCurveTo(
		x - radius,
		y + radius,
		x - radius,
		y - radius,
		x,
		y - radius
		);
		ctx.closePath();
		ctx.stroke();
	};
	//--(canvas event listeners)
	const reSize = (ctx, img, scale, width, height) => {
		scale = window.onload ? window.onload.apply(windowWidth, windowHeight) : 1;
		ctx.canvas.width = width * scale;
		ctx.canvas.height = height * scale;
		ctx.drawImage(img, 0, 0, width * scale, height * scale);
	};
	const resizeCanvas =
	window.addEventListener('resize', reSize(...args) => {
		ctx.canvas.width = width * scale;
		ctx.canvas.height = height * scale;
		ctx.drawImage(img, 0, 0, width * scale, height * scale);
	});
	//date mods
new Date().toLocaleString('en-gb', { timeZone: 'GMT' });//most efficient way to get the current date and time in the UK
const getDay = (date) => new Date(date).getDay();
const getWeek = (date) => [0, 6].includes(new Date(date).getDay()); //returns true if the date is a weekend in a relitively efficient way
const getWeekend = (date) => [0,6].includes(new Date(date).getDay()) !== 1;
const getWeekday = (date) => !getWeekend(date);
const getMonth = (date) => new Date(date).getMonth();
const getYear = (date) => new Date(date).getFullYear();
//keep the order of the above functions in mind when using them in a HOF
const getDay = (date) => new Date(date).getDay();
const updateDay = (date, days) => this.date.setDate(getDay(date) + days);
	//_________________________________________________________________Getters and Setters and Hashes_______________________________________________________________________
//Lots of playing can be done with this lego -- specially mixed with some of the array functions and caching covered in the next section
//also tested search function work with these objects - --See FUNCTIONAL PROGRAMMING PART 2--

const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { d: 4, e: 5, f: 6 };

const get = (obj, key) => obj[key];
const set = (obj, key, value) => {
	obj.hasOwnProperty(key) ? obj.key != value : (obj[key] = value);
};

const unset = (obj, key) => {
	delete obj[key];
	return obj;
};
const has = (obj, key) => obj.hasOwnProperty(key);
const keys = (obj) => Object.keys(obj);
const values = (obj) => Object.values(obj);
const entries = (obj) => Object.entries(obj);
const merge = (obj1, obj2) => {
	for (let key in obj2) {
		obj1[key] = obj2[key];
	}
	return obj1;
};

const enumerate = (obj) => {
	let arr = [];
	for (let key in obj) {
		arr.push([key, obj[key]]);
	}
	return arr;
};

const mergeWith = (obj1, obj2, fn) => {
	for (let key in obj2) {
		obj1[key] = fn(obj1[key], obj2[key]);
	}
	return obj1;
};

const mergeTwo = (...args) => {
	let arr = [];
	for (let i = 0; i < args.length; i++) {
		arr.push(args[i]);
	}
	return arr;
};

const pick = (obj, keys) => {
	let newObj = {};
	for (let key in obj) {
		if (keys.includes(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

const omit = (obj, keys) => {
	let newObj = {};
	for (let key in obj) {
		if (!keys.includes(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

const pickBy = (obj, fn) => {
	let newObj = {};
	for (let key in obj) {
		if (fn(obj[key])) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

const omitBy = (obj, fn) => {
	let newObj = {};
	for (let key in obj) {
		if (!fn(obj[key])) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

const mapKeys = (obj, fn) => {
	let newObj = {};
	for (let key in obj) {
		newObj[fn(key)] = obj[key];
	}
	return newObj;
};

const breadthFirst = (obj, target) => {
	let cache = [];
	cache.push(obj);
	let current = cache.shift();
	for (let key in current) {
		if (current[key] === target) {
			return true;
		} else {
			cache.push(current[key]);
		}
	}
};
//Complete mess of a brute force search
const regret = (arr, cache) => {
	while (i >= arr.length)
		if (arr[i] in cache) {
			return arr2.map(arr[i]);
		}
	i--;
};
//___________________________________________________________________Functional Programming Part 3 | Recursion and Memory Management__________________________________________________________________________________________
// Functional programming patterns are so well recognised because while the syntax may shift the idea behind it goes back many decades (thats centuries in programmer years)
// {function1, function2, function3} is a fairly clean stack, scripts make their calls line by line in order. Moore's Law is often represented as computer power doubles every
// two years. Early programmers had to be clever with their scripts to prevent their stacks taking up more space than their memory had and meaning good code can fail on bad devices.
// While for iteration should be known to you by now, they perform a lot of work very quickly, however recursion is the functional way of achieving the same thing,
// clever hackers have reinvented this wheel over. What if a function could call itself. Why though?
const globalCache = {};
const recursion = (n) => (n == 0 ? 0 : recursion(n - 1));

const recusionBrokenDown = (n) => {
	if (n == 0) {
		return 0;
	}
	return recursionBrokenDown(n - 1);
};
// recursion cycles over a function until a nice binary value is fulfilled. On top of this memoization, caching and the callstack really evolved.
const observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.type === 'childList') {
			console.log('A child node has been added or removed.');
		} else if (mutation.type === 'attributes') {
			console.log('An attribute of an element has changed.');
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

const recursivePush = (arr, n) => {
	if (!arr[n + 1]) {
		return nodeOutput(arr, n + 1);
	} else {
		return n + 1;
	}
};
//destructuring function
const destructuring = (...obj) => {
	let obj = { ...obj };
	console.log(obj);
};

//________________________________________________-FUNCTIONAL PROGRAMMING PART (N) CURRYING-_________________________________________________________________
//In my personal opinion currying is the apex of functional programming defining and calling itself, in larger more practical design systems.
//Currying can save a lot of time . The last 600 lines has been a monoid - a personal toolbox which is a self contained system.
//If you have followed, than the most useful of functions which I have defined are curried. Not every function has had strictly one parametery, 
//and a single return. There are also some side effects in this system. Curryingi is a form of functional destructuring, and it is a very powerful tool.

const curryFunction = (fn, ...args) => {
	return (...moreArgs) => fn(...args, ...moreArgs);
};
const add = (a, b) => a + b;
const add5 = curryFunction(add, 5);
console.log(add5(10));


//____________________________________________________________-The AI Monad-__________________________________________________________________________________
//I asked a popular chatbot to add it's own functional Monad and it came up with a useful little addition, note the difference in our coding style?:

//--(Maybe)
function Maybe(value) {
  return {
    map: function(fn) {
      if (value === null || value === undefined) {
        return Maybe(null);
      }
      return Maybe(fn(value));
    },
    join: function() {
      if (value && value.isMaybe) {
        return value;
      }
      return Maybe(value);
    },
    value: value,
    isMaybe: true,
  };
}

//"You can use the map function to apply a function to the value inside the Maybe Monad, while the join function is used to flatten 
//a Monad of a Monad down to a single level.

//This is how you might use it:"

const maybeSquareRoot = (x) => Maybe(x >= 0 ? Math.sqrt(x) : null);

const result = Maybe(4)
  .map(x => x * 2)
  .map(maybeSquareRoot)
  .join()  // Unwraps the inner Maybe
  .map(x => x + 1)
  .value;

console.log(result);  // Prints 3.0


function Maybe(value) {
  return {
    map: function(fn) {
      if (value === null || value === undefined) {
        return Maybe(null);
      }
      return Maybe(fn(value));
    },
    join: function() {
      if (value && value.isMaybe) {
        return value;
      }
      return Maybe(value);
    },
    chain: function(fn) {
      return this.map(fn).join();
    },
    value: value,
    isMaybe: true,
  };
}

const result = Maybe(4)
  .map(x => x * 2)
  .chain(maybeSquareRoot)
  .map(x => x + 1)
  .value;

console.log(result);  // Prints 3.0




//-------------------------------USEFUL EVENTS-----------------------------------------------
// MDN HAS FAR MORE USEFUL INFORMATION ON EVENT HANDLING THAN I CAN WRITE HOWEVER I ENCORAGE YOU TO MAKE YOUR OWN CUSTOM SNIPPETS AND GET USED TO THESE FUNCTIONS:
// https://developer.mozilla.org/en-US/docs/Web/Events
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

const $body = document.body;
const $id = document.getElementById;
const $class = document.getElementsByClassName;
const $tag = document.getElementsByTagName;
const $create = document.createElement;
const $appendC = document.appendChild;
const $selector = document.querySelector;
const $selectorAll = document.querySelectorAll;
const $remove = document.removeChild;
const $replace = document.replaceChild;
const $insert = document.insertBefore;
//initialise shaddow DOM and muatable element creation and manipulation

const designMode = document.getDesignMode = "on"; // impressive florish

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
setAtributeValue;

//very useful function:

function handleFiles() {
	const fileList = this.files;
	let loader = Promise.all(
		Array.from(fileList).map((file) => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => {
					const img = new Image();
					img.src = reader.result;
					resolve(img);
				};
				reader.onerror = reject;
			});
		})
	);
	loader
		.then((imgs) => {
			images = imgs;
		})
		.then(() => {
			canvas.style.border = "1px solid black";
				let aspectRatio = images[currentImage].naturalWidth / images[currentImage].naturalHeight;
				canvas.width = canvas.height * aspectRatio;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.globalAlpha = globalAlpha;
				ctx.drawImage(images[currentImage], 0, 0, canvas.width, canvas.height);
			setInterval(animation, 30);
		})
		.catch((err) => {
			console.log(err);
		});
}
//rewrite handleFiles function into a forEach

function forEachFile() {
	const fileList = this.files;
	
}

//#endregion; //not immutable or functional but the building blocks of Javascript design patterns

//There is no right way of programming but there certainly are stack overflows

//There is no right way of programming but there certainly are stack overflows
