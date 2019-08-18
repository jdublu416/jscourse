//REST APIs and HTTP requests

// API- application program interface
    //contract provided by one piece of software to another with a structured request and response- give me a piece of data formatted in a specific way

    //REST representational state transfer -- its a architectural style for designing network application that relies on stateless, client-server protocol (almost always HTTP). treats server objects as resources that can be created or destroyed and used by virtually any programming language. Each api has own rules and structure usually stored in a db...API is the messenger and REST uses http to format that message. example: GET(retrieve data), POST(submit data),PUT(update),DELETE(remove)

    //Other requests are HEAD(same as get but doesnt return a body), OPTIONS(returns the supported HTTP methods), PATCH(Update partial resources)

    //ENDPOINTS: urls you access to do certain things (CRUD), they can vary in syntax
        //GET-https://someurl.com/api/users         //get all users
        //GET-https://someurl.com/api/users/1       //get single user
        //POST-https://someurl.com/api/users        //Add user
        //PUT-https://someurl.com/api/users/1       //Update user
        //DELETE-https://someurl.com/api/users/1    //Delete user

        //POST PUT AND DELETE sends data (so you need headers)