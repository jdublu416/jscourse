let val;

const list = document.querySelector('ul.collection')
const listItem= document.querySelector('li.collection-item:first-child')


val = listItem;
val = list;

// Get child nodes of the ul

val= list.childNodes //returns ALL nodes including line breaks (text)
val= list.childNodes[0].nodeName //returns a line breaks (#text)

val = list.childNodes[1].nodeType //you can make a call for the type of node but it will return a number:

/* 
    1- Element
    2- Attribute
    3- Text Node
    8- Comment
    9- Document itself
    10- Doctype 
*/

// Get children element nodes...will only return elements and not extraneous stuff

val= list.children //returns an html collection of elements





console.log(val);