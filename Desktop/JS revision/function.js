

// named function
// anonymous function
// expressional function
// arrow function
// anonymous arrow function
// expressional arrow function
// function constructor
// function expression
// function declaration
// immediately invoked functional expression
// function expression with arguments



// function definition
// function calling
// function declaration or prototype of the function

// prototype ==> function name and its properties like how many arguments are been taken by the function


function abc(){
    console.log("Hello")
}

abc()


// function sum(a,b){
//     let s=a+b
//     console.log(`The sum of ${a} and ${b} is ${s}`)
// }

// sum(3,5)

// const sum=function (a,b){
//     let s=a+b
//     console.log(`The sum of ${a} and ${b} is ${s}`)
// }

// sum(3,5)


// const sum=function (a,...nums){
//     console.log(nums)

// }

// sum(3,4,5,6,7,8,9)



// Arrow function
const sum= (a,...nums) => {
    console.log(nums)

}

sum(3,4,5,6,7,8,9)