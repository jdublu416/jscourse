//Search input
const github = new Github;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=> {
    const userText = e.target.value;
    if(userText !== ''){
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert that user is not there
                } else {
                    //show profile
                }
            })     
    }else{
        // clear profile
    }
})