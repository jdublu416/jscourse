class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class ="card card-body mb-5">
        <div class="row">
            <div class="col-lg-3">
                    <img class = "img-fluid mb-4" src="${user.avatar_url}" />
                    <a href="${
                    user.html_url}" target="_blank" class="btn btn-block btn-primary mb-4">View Profile</a>
            </div>

            <div class="col-lg-9">
                    <span class="badge badge-block badge-primary p-1"><small>Public Repos: ${
                    user.public_repos
                    }</small></span>
                    <span class="badge badge-block badge-secondary p-1"><small>Public Gists: ${
                    user.public_gists
                    }</small></span>
                    <span class="badge badge-block badge-success p-1"><small>Followers: ${
                    user.followers
                    }</small></span>
                    <span class="badge badge-block badge-info p-1" ><small>Following : ${
                    user.following
                    }</small></span>
                <br><br>
                <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Website/Blog : ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>
                        
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos){
    let output = '';
    repos.forEach((repo) =>{
        output += `
        <div class='card card-body mb-2'>
            <div class='row'>
            <div class='col-md-6'>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
             </div>
            <div class='col-md-6'>
            <span class="badge badge-block badge-primary p-1"><small>Stars: ${
                repo.stargazers_count
                }</small></span>
                <span class="badge badge-block badge-secondary p-1"><small>Watchers: ${
                repo.watchers_count
                }</small></span>
                <span class="badge badge-block badge-success p-1"><small>Forks: ${
                repo.forks_count
                }</small></span>
            </div>
            </div>
        </div>
        `;
    });
    //output repositories
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className){// to show alert message: create a div, add classname to the div, add text to div, get the parent of where you want to insert the alert, get search box, use insertBefore(what you want to insert, what you are inserting 'before')on parent(container)
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        //timeout after 3 sec
        setTimeout(()=> {
            this.clearAlert();
        }, 2000);
  }

  clearAlert(){
      const currentAlert = document.querySelector('.alert');
      if(currentAlert){
          currentAlert.remove();
      }
  }

  clearProfile(){
      this.profile.innerHTML = '';
  }
}
