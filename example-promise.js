// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Philadelphia', function(error, temp) {
//     if(error) {
//         console.log('error', error);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 2000);
//     });
// }

// getTempPromise('Philadelphia').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

function addPromise(a, b) {
    return new Promise(function(s, e) {
        if((a && typeof a === 'number') && (b && typeof b === 'number')) {
            s(a + b);
        } else {
            e('Enter another parameters');
        }
    });
}

addPromise(5, 3).then(function(data) {
    console.log('Result is ', data);
}, function(error) {
    console.log(error);
});

addPromise(1).then(function(data) {
    console.log('Result is ', data);
}, function(error) {
    console.log(error); 
});