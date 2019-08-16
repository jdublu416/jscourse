/* DOM and the window object
window(browser) is the global environment. Node and chrome both use the V8 engine
    properties and methods: 
*/ 
//Alert
// alert('Hello world');

//Prompt
// const input = prompt();
// alert(input);

//Confirm
if(confirm('Are you sure')) {
    console.log('Yes');
}else {
    console.log('NO');

}

//can access the window object for animation or getting users browser info, history info etc

val = window.navigator;

console.log(val);