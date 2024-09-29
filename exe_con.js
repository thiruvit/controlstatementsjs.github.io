var globalVar = "I am a global variable"; // Global Execution Context

console.log("Global Context:", globalVar);  // Accessing GEC

function outerFunction() {    // Function Execution Context for outerFunction
    
    var outerVar = "I am a variable in outerFunction";

    console.log("Outer Function Context:", outerVar); // Accessing outerVar

    function innerFunction() {    // Function Execution Context for innerFunction
       
        var innerVar = "I am a variable in innerFunction";
        
        // Accessing outerVar and innerVar in innerFunction
        console.log("Inner Function Context (Access outerVar):", outerVar); // Lexical Environment of outerFunction
        console.log("Inner Function Context (Access innerVar):", innerVar); // Lexical Environment of innerFunction
    }
    
    // Call innerFunction to create a new Function Execution Context
    innerFunction();
}

// Call outerFunction to create its execution context
outerFunction();

console.log("Global Context (Access outerVar):", typeof outerVar);  // outerVar is not accessible here
