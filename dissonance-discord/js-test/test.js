(function() {
    console.log('Anonymous Function')
})();


let add = function(a, b) {
    console.log('add exec')
    return a + b;
};

// arrow function
let sub = () => a - b ;


setTimeout(() => console.log('Yeah you just watched a timeout'),1000)
add();
sub();
