//CAllback Functions
//a function that is passed in to a function as a parameter and ran inside the scope of the function.

const posts = [
    { title: 'post 1', body: 'this is the body of post1' },
    { title: 'post 2', body: 'this is the body of post2' }
  ];
  
  // function createPost(post) {
  //   setTimeout(function() {
  //     posts.push(post);
  //   }, 2000);
  // }
  
  // function getPosts() {
  //   setTimeout(function() {
  //     let output = '';
  //     posts.forEach(post => {
  //       output += `
  //     <li>${post.title}</li>
  //     `;
  //     });
  //     document.body.innerHTML = output;
  //   }, 1000);
  // }
  
  // createPost({ title: 'post 3', body: 'this is the body of post3' });
  // getPosts();
  function createPost(post, callback) {
      setTimeout(function() {
        posts.push(post);
        callback()
      }, 2000);
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
    
    createPost({ title: 'post 3', body: 'this is the body of post3' }, getPosts);
  
  