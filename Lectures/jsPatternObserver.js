// Observer Pattern
// Observer Pattern-- this is used to subscribe un subscribe from events. angular js relies heavily on this pattern 

//********Will need to add to the html for the code to run */
{/* <button class="sub-ms">Subscribe to milliseconds</button>
<button class="unsub-ms">UnSubscribe from milliseconds</button>
<button class="sub-s">Subscribe to seconds</button>
<button class="unsub-s">UnSubscribe from seconds</button>
<br><br>
<button class="fire">Fire</button> */}

function EventObserver(){
    this.observers = [];
    
}
EventObserver.prototype ={
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`)
    },
    unsubscribe: function(fn) {
        //Filter out from the list whatever matches the callback function. if there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(item => {
            if(item !== fn) {
                return item
            } 
        })
        console.log(`You are now unsubscribed to ${fn.name}`);
    },
    fire: function(){
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