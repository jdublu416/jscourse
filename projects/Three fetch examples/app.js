document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getAPIData);

function getText() {
  //This is how you get a text file with fetch. you call the file, "then" you callback the response with the text(), and "then" you take that data and do something with it
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => {
      console.log(err);
    });
}

function getJson() {
  //This is how you get a json file with fetch. you call the file, "then" you callback the response with the json(), and "then" you take that data and do something with it
  fetch('posts.json')
    .then(function(res) {
      return res.json();
    })
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>Title : ${post.title} </li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}

function getAPIData(){
  // an example of the github api, it takes in a URL, then the response is formatted to json
  fetch('https://api.github.com/users')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>User : ${user.login} </li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    })
}
