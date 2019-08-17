// Asynchronous JavaScript and XML --AJAX older technology

// JSON has replaced XML

//allows us to run things asnchronously where the whole web page does not need to reloaded.
// a small portion of the web page can be loaded.

//CORS allows cross domain communication, some need authentication (oauth)

//XmlHTTPRequest (XHR) object is an API in the form of an object, provided by the browsers JS environment whose methods
//   transfer data between client and server.  Can be used with other protocols than HTTP and other data other than XML (JSON, plain text)

// Other libraries to use-- Fetch API (internal js library), Axios, Superagent, jQuery, and Node HTTP, prototype

//create an event listener for button

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create an XHR obj by instantiating it (the same as any other obj)
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    //When you get to this point your ready state is 4
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
    //This was how you used to have to do it before the 'onload' method
    // xhr.onreadystatechange = function() {
    //   console.log('READYSTATE', xhr.readyState);
    //   if(this.status === 200 && this.readyState === 4){
    //     console.log(this.responseText);
    //   }
    // }
  };
//should include a catch...
  xhr.onerror = function() {
    console.log('Request error...');
  }
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
