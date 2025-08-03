#!/usr/bin/node
let first;
let second;
if (!process.argv[2])
    first = 'undefined';
else
    first = process.argv[2];
if (!process.argv[3])
    second = 'undefined'
else
    second =  process.argv[3];
console.log(first + " is " + second);