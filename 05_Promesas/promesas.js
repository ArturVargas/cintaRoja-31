
const request = require('request');

const newPost = (title, cuerpo, userId) => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    var json = JSON.stringify({
        title: title,
        body: cuerpo ,
        userId: userId
    });
      var options = {
          body: json,
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        };
        return new Promise( (resolve, reject) => {
        request.post(URL, options, (err, res, body) => {
            if (res.statusCode === 201){
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(res.statusCode);
                console.log(err);
            }
        });
    });
};

    newPost('Este es un Post', 'Este es el body de mi post', 1)
        .then(resp => console.log(resp))
        .catch(err => console.error(`Este es el Error ${err}`))