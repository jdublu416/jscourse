const posts = [
    { title: 'post 1', body: 'this is the body of post1' },
    { title: 'post 2', body: 'this is the body of post2' }
  ];
  
  function createPost(post) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        //mimic an error by changing to false...this is only for demo to see how error works!
        const error = false; //change value to false for the post to work/ true to trigger error
        if (!error) {
          posts.push(post);
          resolve();
        } else {
          reject('Something went wrong');
        }
  
        resolve();
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
  