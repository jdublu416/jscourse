//Error Handling
    //try/catch is a syntax that allows you to catch an error without stopping your program.  

// myFunction();
// console.log('This will not run');

const user = {email: 'jsoe@gmail.com'}

try {
    //REference error
    // myFunction();

    //Type Error
    // null.myFunction();

    //Syntax error
    // eval("hello world");//views it as a variable
    
    //URI error
    // decodeURIComponent('%')
    if(!user.name){
        throw "User has no name"// throw keyword returns whatever if an error
    }

} catch (err) {
    console.log(err);
    console.error(err);

    // console.log(err.message);
    // console.log(err instanceof TypeError);
}finally{
    console.log('this runs in spite of result above');
}

console.log('This will still run even thought there is an error');