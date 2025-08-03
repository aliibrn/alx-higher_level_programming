#!/usr/bin/node
if(!process.argv[2])
    console.log('Not a number');
else
{
    let num = parseInt(process.argv[2]);
    if(Number.isInteger(num))
    {
        console.log('My number: ' + num)
    }
    else
    {
        console.log('Not a number')
    }
}