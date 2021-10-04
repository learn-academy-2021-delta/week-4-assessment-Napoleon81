// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

discribe("shufflesArray",(colors)=>{
  test("take in an array, remove the first item from the array and shuffles the remaining content")
expect(shufflesArray("purple", "blue", "green", "yellow", "pink")).toEqual("yellow", "blue", "pink", "green")
  test("take in an array, remove the first item from the array and shuffles the remaining content")
expect(shufflesArray("chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron")).toEqual("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
})
})

// b) Create the function that makes the test pass.
//create the function that takes in a number as an argument

const shufflesArray(colors1)=> {
        let newArr= colors1.slice()
        for (let i = s.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        return newArr
    }
}
// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// // a) Create a test with expect statements for each of the variables provided.
//
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67 8, 24]
// // Expected output: [5, 109]
//
discribe("lowestToHighest",(num)=>{
  test("take an array of numbers and return an array of the minimum and maximum numbers in that order")
expect(lowestToHighest(3, 56, 90, -8, 0, 23, 6)).toEqual(-8, 90)
  test("take in an array, remove the first item from the array and shuffles the remaining content")
expect(lowestToHighest(109, 5, 9, 67 8, 24)).toEqual(5, 109)
})
})

// // b) Create the function that makes the test pass.
//create the function that takes in a number as an argument
const lowestToHighest(nums1)=>{
 let lowestToHighest = nums1.sort((a, b) => a - b);
 return newArr
}

const lowestToHighest(nums2)=>{
 let lowestToHighest = nums2.sort((a, b) => a - b);
 return newArr
}
//
// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// // a) Create a test with an expect statement using the variables provided.
//
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

discribe("nonDuplicate",(testArray1,testArray2 )=>{
  test("take in two arrays as arguments and return one array with no duplicate values")
expect(nonDuplicate([3, 7, 10, 5, 4, 3, 3],[7, 8, 2, 3, 1, 5, 4] )).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
})
})

// // b) Create the function that makes the test pass.
// //create the function that takes in a number as an argument
//
const nonDuplicate(testArray1, testArray2)=> {
  for(let i=0;i<testArray1.length;i++){
  if(newArr.indexOf(testArray1[i]) == -1)
     newArr.push(testArray1[i])
     return newArr
}
for(let i=0;i<testArray2.length;i++){
  if(newArr.indexOf(testArray2[i]) == -1)
     newArr.push(testArray2[i])
return newArr
}
}
