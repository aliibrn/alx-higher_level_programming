#!/usr/bin/node
const https = require('https')
https.get(process.argv[2], (res) => { console.log(`code: ${res.statusCode}`);}
                      ).on('error', (err) => {console.error("code:", err.message);  
                      }
);