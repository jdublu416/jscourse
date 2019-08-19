// Async/await

//**With Promise */
    // async function myfuncError() {
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Hello'), 1500);
    //     });
    //     const error = true;
    //     if(!error){
    //         const res = await promise;
    //         return res;

    //     }else{
    //         await Promise.reject(new Error('Something went wrong'))
    //     }
    
    // }

    // //This function is original myfunc: the above function simulates an error
    //     async function myfunc() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => resolve('Hello'), 1500);
    //         });
        
    //         const res = await promise;
    //         return res;
    //     }

    // myfunc()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));

    // myfuncError()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));

//** With fetch */

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data
}

getUsers().then(users => console.log(users))
