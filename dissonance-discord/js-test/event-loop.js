let test1 = () => {// L1
console.log('🥪 Synchronous 1');

// L2
setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// L3
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
console.log('🥪 Synchronous 4');
// L1 > L4 > L3 > L2
}


let test2 = () => { 
    import fetch from 'node-fetch';
    const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(promise)
}







// MAIN DRIVER
test1();
test2();