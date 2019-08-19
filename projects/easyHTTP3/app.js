const http = new EasyHTTP;

//Get Users
//   http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
  name: 'Brad Traversy',
  username: 'btraversy12',
  email : 'btrav@gmail.com'
}

// POST a User
  // http.post('https://jsonplaceholder.typicode.com/users', data)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));

  // PUT update a User
  // http.put('https://jsonplaceholder.typicode.com/users/2', data)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));

  // DELETE a User
  http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data
      ))
    .catch(err => console.log(err));
