//The exchange of data between the server and the browser can only be text: 
    //JSON is a text that can convert to a JSobj and back to JSON to be sent to a server, this eliminates complicated parsing and translations


//if you have data stored in a JSobj you convert :
    //so in order for the server to read and use your js obj data it will need to be formatted to JSON(see line 15 output)

let myObj = {
    name: 'John',
    age: 31,
    city: 'New York'
}

let myJSON = JSON.stringify(myObj); 
console.log(myJSON); // {"name":"John","age":31,"city":"New York"} now it is a JSON object

// to reverse from JSON to jsobj use:

myObj = JSON.parse(myJSON);
console.log(myObj); // {name: "John", age: 31, city: "New York"}

//Store data in local storage:

myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieve data from localStorage:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj.name); // John

//So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.
