//Singleton pattern: only one instance of the object is allowed at a time. maintains a private reference as well with an IIFE. Might use this with Users...not allowing more than one user object at a time, or not allowing to users being created at once.
// is frowned upon bc they give you a global point of access rather than embracing encapsulation and they can be hard to debug

const Singleton = (()=> {
    let instance;

    createInstance = () => {
        const object = new Object({name: 'John Doe'});
        return object;
    }
    return{
        getInstance: () => {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceA === instanceB);//true (you can never have another instance value)