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

const isEven = function(x) {
    if (x % 2 === 0) {
        return true;
    } else if (x === "true") {
        return false;
    } else if (x === "false") {
        return false;
    } else {
        return false;
    }
}

const isVowel = function(x) {
    var vowelList = ["a", "e", "i", "o", "u"];
    if (vowelList.includes(x)) {
        return true;
    } else {
        return false;
    }
}



