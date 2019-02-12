const needle = require('needle');
const fs = require('fs-extra');

// needle('get', 'https://swapi.co/api/people/')
//     .then(function(response) {
//         return fs.writeFile('./SWpeople.json', JSON.stringify(response.body));
//     })
//     .then(() => {
//         console.log('Data written');
//     })
//     .catch(function(error) {
//         console.log(error);
// });

let urls = ['https://swapi.co/api/people/', 'https://swapi.co/api/planets/', 'https://swapi.co/api/films/', 'https://swapi.co/api/species/'];

for (let i = 0; i < urls.length; i++) {
    needle('get', urls[i])
    .then(function(response) {
        let filePath = `./newFile${i}.json`;
        return fs.writeFile(filePath, JSON.stringify(response.body));
    })
    .then(() => {
        console.log('Data written' + i);
    })
    .catch(function(error) {
        console.log(error);
});
}
