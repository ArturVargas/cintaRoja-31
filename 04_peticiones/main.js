
const request = require('request');
const url = 'https://jsonplaceholder.typicode.com';
const swapi = 'https://swapi.co/api/';

// request(`${url}/users`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// console.log('===================================================');

// request(`${url}/posts`, (error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

// request(`${swapi}starships/9/`, (err, res, body) => {
//     console.log(err);
//     //console.log(res);
//     const json = JSON.parse(body)
//     console.log('Este es el bodi ',body);
//     console.log('Este es el JSON', json);
//     console.log(json.name);
//     console.log(JSON.stringify(json.name));
// });

// request.get(`${swapi}starships/9/`, (err, res, body) => {
//     console.log(err);
//     //console.log(res);
//     const json = JSON.parse(body)
//     console.log('Este es el bodi ',body);
//     console.log('Este es el JSON', json);
//     console.log(json.name);
//     console.log(JSON.stringify(json.name));
// });

const getSomething = (path, id) => {
    request.get(`${swapi}${path}/${id}/`, (err, res, body) => {
        console.log(err);
        //console.log(res);
        const json = JSON.parse(body)
        console.log('Este es el JSON', json);
        console.log(json.name);
    })
};

getSomething('people', '3');