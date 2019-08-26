// Observer Pattern
// Observer Pattern-- this is used to subscribe un subscribe from events. angular js relies heavily on this pattern 

class  EventObserver {

    constructor(){
        this.observers = [];

    }
    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`)
    }
    unsubscribe(fn){
        this.observers = this.observers.filter(item => {
            if(item !== fn) {
                return item
            } 
        })
        console.log(`You are now unsubscribed to ${fn.name}`);
    }
    fire() {
        this.observers.forEach(function(item){
            item.call();
        });
    }
    
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});
document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

//click handler
function getCurMilliseconds() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
function getCurSeconds() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}