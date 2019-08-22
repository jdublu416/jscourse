//Shorthand Character classes

re = /\w/; // word character any letter or any number or _
re = /\w+/;// = = one or more (letter, number or _)
re = /\W+/;// will be one or more NONword characters(anything but a letter, number or _,  but yes ! or % or @)
re = /\d/;// match any digit
re = /\d=/;// match any digit 0 or more times (ex will match a full zip code)
re = /\s/;// match whitespace character
re = /\S/; //match any NON whitespace

re=/Hell\b/i; //Word Boundary so you dont find a word within a word (and !sand--it will skip the and in sand for the specific 'and')

//Assertions - like conditionals

re=/x(?=y)/; // will match x ONLY if it is followed by a y
re=/x(?!y)/; // will match x ONLY if it is NOT followed by a y

const str = 'khjhlljkgxly'
// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re}`);
    }else{
        console.log(`${str} does NOT match ${re.source}`);

    }
}