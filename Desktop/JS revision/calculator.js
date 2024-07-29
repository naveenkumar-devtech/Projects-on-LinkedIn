function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}


function calc(a,b,oper){
    return oper(a,b)
}

console.log(calc(30,5,sum))
console.log(calc(30,5,sub))
console.log(calc(30,5,mul))
console.log(calc(30,5,div))
