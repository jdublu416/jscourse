class Storage {
    constructor(){
        this.city;
        this.state;
        this.defaultCity = 'Miami';
        this.defaultState = 'FL'

    }

    getLocationData(){
        if(localStorage.getItem('city', null)){
        this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }
        if(localStorage.getItem('state', null)){
        this.city = this.defaultState;
        }else{
            this.city = localStorage.getItem('state');
        }
        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);

    }
}

//this is the code you would use to store and get stored data in the localStorage.