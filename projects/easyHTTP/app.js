const http = new easyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//POST
const data = {
  title: 'Custom Post',
  body: 'this is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if (err) {
//             console.log(err);
//           } else {
//             console.log(post);
//           }
// })
//PUT

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
