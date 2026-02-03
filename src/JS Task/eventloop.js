// console.log("Event Start");

// const samplePromise = new Promise((resolve, reject) => {
//   const success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("Promise is resolve");
//     } else {
//       reject("Promise is rejected");
//     }
//   }, 1000);

//   console.log("In Promise");
// });

// setTimeout(() => {
//   console.log("In Set time out after promise");
// }, 1000);

// samplePromise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log("Event End");

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

const higherOrderFun = (name) => {
  return "Hello my name is " + name;
};

const callhigherOrderFun = (fn) => {
  return fn("TestName");
};

// console.log(callhigherOrderFun(higherOrderFun));

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// let sampleSet = new Set();
// sampleSet.add("Audi");
// sampleSet.add("BMW");
// sampleSet.add("Kia");
// sampleSet.add("Honda");
// sampleSet.add("Lexas");
// sampleSet.add("Audi");

// console.log(sampleSet);

// const hasAudi = sampleSet.has("Audi");
// console.log(hasAudi);

// sampleSet.forEach((eachSet) => console.log(eachSet));
// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// const sampleMap = new Map();
// sampleMap.set("Banana", 5);
// sampleMap.set("Banana", 3);
// sampleMap.set("Orange", 7);
// sampleMap.set("Grapes", 2);
// sampleMap.set("Water Malon", 9);
// sampleMap.set("Apple", 3);

// console.log(sampleMap);

// sampleMap.forEach((key, val) =>
//   console.log("Key is " + key + ". And value is " + val),
// );

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// Reverse string
// 'Hello World'

// const sampleStr = "Hello World";
// const convtArr = sampleStr.split("");
// const reverseArr = convtArr.reverse().join("");
// console.log(reverseArr);

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// Count vovels in string.
// const vovels = ["a", "e", "i", "o", "u"];
// const vovelString = "Hello World";
// let vovelCount = 0;

// const vocelArr = vovelString.split("");

// vocelArr.forEach((eachChat) => {
//   if (vovels.includes(eachChat)) {
//     vovelCount++;
//   }
// });

// console.log(vovelCount);
// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -
// Two string are anagrams 'listen' and 'silent'
const firstAnagramStr = "listen";
const secondAnagramStr = "silent";

const sortedFirstAnagramStr = firstAnagramStr.split("").sort().join("");
const sortedSecondAnagramStr = secondAnagramStr.split("").sort().join("");

sortedFirstAnagramStr.toLocaleLowerCase().trim();
sortedSecondAnagramStr.toLocaleLowerCase().trim();

let anagramsResult = false;
if (sortedFirstAnagramStr == sortedSecondAnagramStr) {
  anagramsResult = true;
}
// console.log("anagramsResult ", anagramsResult);
// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// Remove duplicates from Array

const arrWithDuolicates = [1, 1, 2, 2, 3, 4, 5, 1, 2, 3];
let uniqNumSet = new Set(arrWithDuolicates);
const uniqArr = [...uniqNumSet];

// console.log(uniqArr);
// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -
// Find most frequest element in Arr
const freqArray = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const freqElementObj = {};

freqArray.forEach((num) => {
  freqElementObj[num] = (freqElementObj[num] || 0) + 1;
});

let mostFrequent = 0;
let freqElementNumber = null;

for (const key in freqElementObj) {
  if (freqElementObj[key] > mostFrequent) {
    mostFrequent = freqElementObj[key];
    freqElementNumber = Number(key);
  }
}

// console.log("Most frequent element:", mostFrequent); // 4

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// Flatt Nested Arr

const nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  1,
  2,
  3,
  6,
  5,
  4,
];
const flatArr = nestedArr.flat();

// console.log("flatten array is ", flatArr);

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// Capitalized first letter of each word
const smallLetterString =
  "hello this string has first small letter of each word";
const smallLetterArr = smallLetterString.split("");
let spaceKeyword = true;

smallLetterArr.forEach((eachLetter, index) => {
  if (spaceKeyword) {
    smallLetterArr[index] = smallLetterArr[index].toUpperCase();
  }

  if (eachLetter == " ") {
    spaceKeyword = true;
  } else {
    spaceKeyword = false;
  }
});

console.log(smallLetterArr.join(""));

// - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -  - -- - - - -

// Intersection of 2 arrayBuffer

const firstIntersectionArr = [1, 2, 3, 4, 5, 6];
const secondIntersectionArr = [4, 5, 6, 7, 8, 9];

let resIntersectionArr = [];

firstIntersectionArr.forEach((eachElement) => {
  if (secondIntersectionArr.includes(eachElement)) {
    resIntersectionArr.push(eachElement);
  }
});

console.log("resIntersectionArr ", resIntersectionArr);
