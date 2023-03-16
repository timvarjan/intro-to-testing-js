// helloWorld function 
const helloWorld = function() {
    return ("Hello, World!");
}

const sayHello = function(x) {
    return "Hello, " + x + "!";
}
const isFive = function(x) {
    if (x === 5) {
        return true;
    } else if (x === "5") {
        return true;
    } else {
        return false;
    }
}