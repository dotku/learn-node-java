var java = require("java");
java.classpath.push('./');
// var javaLangSystem = java.import('java.lang.System');
// javaLangSystem.out.printlnSync('Hello World from Node');

// let helloWorld = java.newInstanceSync('Hello.HelloWorld');
// console.log(helloWorld.sayHelloWorldSync());

// let helloWorldTest = java.newInstanceSync('Hello.HelloTest');
// console.log(helloWorldTest;

let hw = java.import('Hello.HelloWorld');
console.log(hw);
console.log(hw.mainSync());
// console.log(hw.main());
// console.log(hw.sayHelloWorldSync());