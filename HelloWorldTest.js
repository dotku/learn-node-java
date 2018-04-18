var java = require("java");
java.classpath.push('./');
var javaLangSystem = java.import('java.lang.System');
javaLangSystem.out.printlnSync('Hello World from Node');

java.newInstanceSync('HelloWorld').sayHelloWorld();