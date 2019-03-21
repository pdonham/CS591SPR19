const delay = (milliseconds) => {
    return new Promise(function (resolve, reject) {
        setTimeout(
            () => {
                console.log('In delay');
                resolve();
            },
            milliseconds
        );
    });
};

const asyncFunction = (milliseconds) => {
    return new Promise(function (resolve, reject) {
        console.log(`Calling delay`);
        delay(milliseconds)
            .then(() => {
                console.log(`Back from delay`);
                resolve(milliseconds * 2);

            });
    });
};

asyncFunction(2000)
    .then((value) => {
        console.log(`Value is ${value}`);
    });

