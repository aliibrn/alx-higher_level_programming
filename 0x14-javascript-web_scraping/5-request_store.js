#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const file = process.argv[3];

request.get(URL, (err, res, data) =>{
                                        if(err)
                                             return console.error(err);
                                        else
                                            fs.writeFile(file, data, 'utf8', (err)=>{
                                                if(err)
                                                    return console.error(err);
                                            });
})