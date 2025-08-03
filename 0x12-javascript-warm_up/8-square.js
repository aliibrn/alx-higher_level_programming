#!/usr/bin/node
if(!process.argv[2])
    console.log('Missing size');
else
{
    let num = parseInt(process.argv[2]);
    if(Number.isInteger(num))
    {   
        let output;
        for(let i = 0; i < num; i++){
            output = ""
            for(let i = 0; i < num; i++){
                output += 'X';
            }
            console.log(output);
        }
    }
    else
    {
        console.log('Missing size')
    }
}