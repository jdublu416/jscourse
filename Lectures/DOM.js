// DOM document object model  
    //tree of nodes/elements created by the browser- onject oriented Representation
    //the browser gives us a window object that contains the document object
    //the root element is the HTML with the body and the head being children of the root
    //you can manipulate the object with vanilla javascript (and jquery)
    // document is a property of the window object
    //you can use selectors to access it

    let val;

    val = document;
    val = document.all;
    val = document.all[0];
    val = document.all[1];
    val = document.all[2];
    val = document.all.length;
    val = document.head;
    val = document.body;
    val = document.doctype;
    val = document.domain;
    val = document.URL;

    val = document.forms[0]
    val = document.links[0].className;

    val = document.images;
    val = document.scripts;
    val = document.scripts[2].getAttribute('src');

    //turning an html collection into an array
    let scripts = document.scripts;
    let scriptArr = Array.from(scripts);

    scriptArr.forEach(script => {
        console.log(script);
    })



    console.log(val);
    