/*

const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500) ;
};

setTimeout(() => { 
    // Callback function - will executed in future, call back later
    console.log('Async: Timer is Done');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

// Immediately go to the next line, exec sync code and then come back
console.log('Sync: Hello');

*/

////////////////////////////////////////////////////////////////
// Promises
////////////////////////////////////////////////////////////////

const fetchDataPromises = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Async: Timer is Done');
    fetchDataPromises()
    .then(text => {
        console.log(text);
        return fetchDataPromises();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);




