//Callbacks are the most-often used approach to manage
//asynchronous calls, but they introduce new problems,
//especially inversion of control


const delay = (seconds, callback) => {
    setTimeout(
        () => {
            console.log(`Done after ${seconds}`);
            callback(42);
        },
        seconds);
};

const getNumber = () => {
    delay(5000,
        (value) =>  { console.log(`In callback, got ${value}`); }
        )
}

getNumber();
console.log('Done');
