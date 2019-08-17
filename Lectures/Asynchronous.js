//Synchronous code:
posts = loadPostsSync();
// ...wait til posts are fetched
//...do something with the posts "Blocking code"

doTheNextThing();

//Asynchronous Code

loadPostsAsync(function() {
  // ...wait til posts are fetched
  //...do something with the posts "Blocking code"
});

doTheNextThing(); // Doesnt have to wait until posts load

// Most Async code you work with will be part of an API or library:

// *XMLHttpRequest & fetch
// *jquery Ajax, Axios, other HTTP libraries
// *Node.js fs(filesystem) module

// You can work with async code using callbacks, promises, async/await
