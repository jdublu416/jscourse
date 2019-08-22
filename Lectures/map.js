//ES6 maps -- an object that holds key/value pairs and ANY value can be used as a key or a value. what makes it different is you can use an object as a key

const map1 = new Map();

// set keys
const key1 = 'some string';
const key2 = {};
const key3= function(){};

//set map values by key
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Value of key3')

//get values by key
console.log(map1.get(key1),map1.get(key2),map1.get(key3));//Value of key1 Value of key2 Value of key3

//count values
console.log(map1.size);//3

//iterating through maps-- loop using for...of to get keys and values

for(let [key, value] of map1){
    console.log(`${key}: ${value}`);
}
//********************* */some string: Value of key1
                        //[object Object]: Value of key2
                        //function(){}: Value of key3

//just key value
for(let key of map1.keys()){
    console.log(key);
} 
//*************** some string 
                    //{} 
                    //ƒ (){} you can get the values with the same syntax just sub in values

//Can use a forEach as well:
map1.forEach((value, key) => {
    console.log(`${key}: ${value}`)
}); //same results as for...of loop

//CONVERT map to array
const keyvalArr = Array.from(map1);
console.log(keyvalArr);

    //with values only
    const valArr = Array.from(map1.values());
    console.log(valArr); //can do same thing with keys with the same syntax and sub in keys

 



