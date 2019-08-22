//Regular expressions - used to describe a pattern of characters, pattern matching, pattern searching. Used to validate and pulling stuff out of a body of characters... 
let re;

// this is a very basic re, it will be looked at each character at face value...a pattern
re = /hello/; 
re2 = /hello/i; 

// console.log(re); // /hello/
// console.log(re.source);// hello

//exec() - Return the result in an array if there is a match, null if no match

// const result = re.exec('hello world');
// console.log(result); 
            // ["hello", index: 0, input: "hello world", groups: undefined]
            // 0: "hello"
            // groups: undefined
            // index: 0
            // input: "hello world"
            // length: 1
            // __proto__: Array(0)
    //the index tells where it starts--it has to be hello to have a match!

// console.log(result.index);//make the calls to get info 

//test() -- returns true or false if there is a match

// const results = re.test('Hello');

// console.log(results);// this will return a false value bc it is case sensitive
    //you can add the i flag to the re and change the search for any combo of uppercase and lowercase ex: /hello/i(results=true)

    //Other flags:
        // g- global search

//match() -- will return a result array or null;

// const str = 'Hello There';
// const resultStr = str.match(re);
// console.log(resultStr); // returns null, have to put the i flag for an array

// search() -- returns the index of the first match, if not found it will return a -1
// result = str.search(re);//returns -1
// result = str.search(re2);//returns 0
// console.log(result);

// replace() -- return a new string with some or all matches of a pattern. Takes 2 parameters: the regular expression you are searching for and then what goes in its place

const str = 'Hello There';
const newStr = str.replace(re2, 'Hi'); 
console.log(newStr); // Hi There


