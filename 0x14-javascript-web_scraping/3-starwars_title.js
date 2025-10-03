#!/usr/bin/node
const request = require('request');

const id = process.argv[2];
const URL = "https://swapi-api.alx-tools.com/api/films/" + id
console.log(URL)

request.get(URL, (err, res, data) =>{
    if(err)
    {
        console.log('error: ${res.status}');
    }
    else
    {
        const json_file = JSON.parse(data)
        console.log(json_file.title) 
    }
})