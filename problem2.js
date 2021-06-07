// I have tried to implement three methods for string reverse:

// 1. String reverse using recursion
const reverseStringRecursion = (str) => {
    if (str === "") return "";
    else return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}


// 2. String Reverse using foor loop
const reverseStringForLoop = (str) => {
    let newString = "";
    const stringLength = str.length - 1;
    for (let i = stringLength; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// 3. String Reverse using Array methods
const reverseStringUsingArrayMethod = (str) => {
    return str.split("").reverse().join("");
}

const reversedStringUsingRecursion = reverseStringRecursion("BanGlaDesh")
console.log("String reversed using recursion: ", reversedStringUsingRecursion);

const reversedStringForLoop = reverseStringForLoop("BanGlaDesh");
console.log("String reversed using for loop: ", reversedStringForLoop);

const reversedStringUsingArrayMethod = reverseStringUsingArrayMethod("BanGlaDesh");
console.log("Reverse string using array methods: ", reversedStringUsingArrayMethod);
