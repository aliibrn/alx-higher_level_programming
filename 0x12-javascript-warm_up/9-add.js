#!/usr/bin/node
if(process.argv.length != 4)
    console.log('NaN');
else
{
    let num1 = parseInt(process.argv[2]);
    let num2 = parseInt(process.argv[3]);
    if(Number.isInteger(num1) && Number.isInteger(num2))
    {   
        res = num1 + num2;
        console.log(res);
    }
    else
    {
        console.log('NaN')
    }
}