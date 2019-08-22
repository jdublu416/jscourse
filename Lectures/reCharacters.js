// Character Sets

//Brackets -character sets
re= /gr[ae]y/i; //you can use brackets to put in the potential matches; it can be either or, but not neither
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F (the opposite of line 5) : xray will pass
re = /^[GF]ray/; // Must start with a G or an F; do not get these confused
re = /[A-Z]ray/; // Any uppercase letter
re = /[a-z]ray/; // Any lowercase letter
re = /[A-za-z]ray/; // Any case letter
re = /[0-9]ray/; // Number range, will match any number 0-9

//Braces - quantifiers
re = /hel{2}o/i; //you put the curly braces after the letter you want counted  exactly twice
re = /hel{2,4}o/i; // has to have at least 2 but up to 4 l's
re = /hel{2,}o/i; // has to occur at least 2 times and as many l's that there are >2, 1 l will not work

// parentheses -- grouping

re= /[0-9]x{3}/ // this looks at the 'x' three times 
re= /([0-9]x){3}/ // this will give you the 'any#x' three times
re= /^[0-9]x{3}$/ //this will give you same as above but no more than 3 times





const str = '3x4x5x'
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