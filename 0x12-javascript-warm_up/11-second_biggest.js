#!/usr/bin/node
if (!process.argv[2] || process.argv.length < 4)
    console.log(0);
else {
    let arr = [];
    for (let i = 2; i < process.argv.length; i++) {
        arr.push(parseInt(process.argv[i]));
    }
    // search
    let big = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > big)
            big = arr[i];
    }
    let second = 0
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > second && arr[i] < big)
            second = arr[i];
    }
    console.log(second);
}