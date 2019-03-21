
const delay = (seconds, callback) => {
    setTimeout(
        () => {
            console.log(`Done after ${seconds}`);
            callback();
        },
        seconds);
};

const getNumber = () => {
    delay(5000,
        () =>  { return 42; }
        )
}

console.log(getNumber());

