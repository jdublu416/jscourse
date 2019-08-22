// Meta Characters
let re;
//literal characters:
re = /hello/;

//Metacharacter symbols
re= /^h/i;      // "^" must start with
re= /d$/i;      // "$" must end with -- can use more than one character
re= /^hello$/  //has to end and start with hello
re= /h.llo/  // "." this is like a wildcard that only pertains to one character that can be anything
re= /h*llo/  // "." this is a wildcard that only pertains to any character any number of times even 0 times, hjdlkgjaskllo would pass as a match
re= /gre?a?y/i //optional character (for spelling issues)
re= /gre?a?y\?/i //escape character will match with 'gray?' bc the ? is literal
re= /gr+/ // one or more characters



//String to match
const str = 'gray?'

//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str)