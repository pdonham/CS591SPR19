function customError(name, code, message) {
    this.name = name;
    this.code = code;
    this.message = message;
    this.toString = function () {
        return `${name} - ${message} (${code})`;
    }
}


const maybeDelay = (milliseconds) => {
    return new Promise((resolve, reject) => {
        {
            setTimeout(
                () => {
                    console.log(`Done after ${milliseconds}`);
                    if (milliseconds === 42) {
                        reject (new customError('ERRFORTYTWO', 42, 'You entered 42'));

                    } else {
                        if (!(milliseconds % 2)) {
                            resolve('even');
                        } else {
                            reject('odd');
                        }
                    }
                },
                milliseconds);
        }
    })
}
maybeDelay(42)
    .then((value) => {
            console.log(value)
        },
        (err) => {
            console.log(err.toString());
        }
    )

console.log('Checkpoint')


