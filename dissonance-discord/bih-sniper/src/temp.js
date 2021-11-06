

// you can't catch static import errors
/*
import fetch from 'node-fetch';


const promise = fetch.fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(promise)

*/

function taskOne() {
    console.log("task 1");
};

function taskTwo() {
    console.log("task 2");
};

function taskThree() {
    console.log("task 3");
};

setTimeout(() => {
    console.log("task 1");
}, 2000);


taskTwo();
taskThree()
