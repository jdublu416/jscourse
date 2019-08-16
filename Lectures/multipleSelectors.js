//Multiple selectors returns a collection or a node list which are similar to arrays 
// but they are not and need to be converted to array

// const items = document.getElementsByClassName('collection-item')

// console.log(items);
// console.log(items[0]); // you can do a very limited things with this collection and can access just like an array

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
// console.log(listItems);

// document.getElementsByTagName
// let items = document.getElementsByTagName('li')

// console.log(items);
// console.log(items[0]); // you can do a very limited things with this collection and can access just like an array

// const listItems = document.querySelector('ul').items
// console.log(listItems);

// //convert html collection into an array


// items = Array.from(items);
// console.log(items);
// items.forEach(item => {
//     console.log(item.className);
// })


// QUERYSELECTORALL 

const items = document.querySelectorAll('ul.collection li.collection-item')

items.forEach((item, index)=> {
        console.log(item.className);
        item.textContent = `${index} : Hello`
    })

    const liOdd = document.querySelectorAll('li:nth-child(odd)')
    const liEven = document.querySelectorAll('li:nth-child(even)')

    liOdd.forEach((li, index) => {
        li.style.background = '#ccc'
    }) //this will focus on odd list items and the for loop below to evens

    for(let i = 0; i < liEven.length; i++ ){
        liEven[i].style.background = '#f4f4f4'
    }
console.log(items);

