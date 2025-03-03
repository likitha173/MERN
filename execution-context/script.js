// 1. whenever a js is created, Global exc

// CEP runs after MCP and role of CEP is to execute the code 

function sam(){

}

sam();
console.log(sam());

// by default -> undefined

function sum(){
    let a = 10;
    let b = 30;
    return a+b;
}

console.log(sum());

function sum2(a, b){    //parameters
    return a + b;
}         

console.log(sum2(10, 30));  //arguments
console.log(sum2(0, 3));  //arguments

function sum3(a, b){
    return a + b;
}

console.log(sum3(10));

function sum4(a, b=4){
    return a + b;
}

console.log(sum4(10));
console.log(sum4(10, 3));



var x = 10;
console.log(x);

function f1(){
    console.log("Hello!");
}

f1();




var a = 10;         //MCP -> a:undefine -> CEP -> a: 10       //CEP -> clg(a)
console.log(a);

 //MCP -> maverick(){.....}
function maverick(){           
    var b = 20;     //MCP -> b: undefine -> CEP -> b: 20
    console.log(b);     //CEP -> clg(b)
    function sam(){     //MCP: sam(){....}
        var c = 30;     //MCP -> c:undefine -> CEP -> c: 30 
        console.log(c);     //CEP -> clg(c)
    }
    sam();
    console.log(b);     //CEP -> clg(b)
}

console.log(a);     //MCP -> clg(a)
maverick();
console.log(a);     //MCP -> clg(a)

// callstack

// sam -->
// maverick -->
// GEC  -->


console.log("----- Hoisting -------")
// General Hoisting -> var
// DTZ (Dead Temporal Zone) -> let, cont

console.log(q);
s();

var q = 10;
function s(){
    console.log("hi i am sam");
}