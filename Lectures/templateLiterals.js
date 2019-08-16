// Template Literals

const name = 'John'
const age = 32
const job = 'Web Developer'
const city = 'Miami'


// without template strings ES5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// if you wanted to have it one each line you'd have to concat each line (this is old way of formatting so it looked as close to HTML as possible)
html = '<ul>' +
         '<li>Name:'  + name + '</li>'  +
         '<li>Age: ' + age + '</li>' + 
         '<li>Job: ' + job + '</li>' +
         '<li>City: ' + city + '</li>' +
         '</ul>';

function hello(){
    return 'Hello is returned from a function'
}

// Template literal ES6
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Evaluate expressions: ${2+2}</li>
    <li>Call functions: ${hello()}</li>
    <li>Conditionals: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    
</ul>
`

document.body.innerHTML = html;