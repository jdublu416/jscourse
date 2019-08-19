const posts = [
    { title: 'post 1', body: 'this is the body of post1' },
    { title: 'post 2', body: 'this is the body of post2' }
  ];
  
  function createPost(post) {
    // need to instantiate the promise with the new keyword--it takes in a callback fuction with 2 parameters: resolve and reject. 
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        //mimic an error by changing to false...this is only for demo to see how error works!
        const error = false; //change value to false for the post to work/ true to trigger error
        if (!error) {
          posts.push(post);
          resolve();//returns the promise once it's resolved
        } else {
          reject('Something went wrong');
        }
        resolve();//the conditional requires either a resolve or a reject of the promise and once that is done, resolve is called again 
      }, 2000);
    });
  }
  
  function getPosts() {
    setTimeout(function() {
      let output = '';
      posts.forEach(post => {
        output += `
        <li>${post.title}</li>
        `;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  createPost({ title: 'post 3', body: 'this is the body of post3' })
    .then(getPosts)
    .catch(function(err) {
      console.log(err);
    });
  