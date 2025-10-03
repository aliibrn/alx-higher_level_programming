#!/usr/bin/node
const request = require('request');
const URL = process.argv[2];

request({url: URL, json: true}, (err, res, data) =>{
                                                        if(err){
                                                            console.error(err);
                                                        }
                                                        else
                                                        {
                                                            let count = 0;
                                                            const films = data.results;
                                                            films.forEach(films => {
                                                                if(films.characters.includes("https://swapi-api.alx-tools.com/api/people/18/"))
                                                                    count += 1;
                                                            })
                                                            console.log(count);
                                                        }
} )