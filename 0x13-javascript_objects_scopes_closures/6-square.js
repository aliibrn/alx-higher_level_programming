const Rectangle = require('./4-rectangle');

class Square extends Rectangle{
    constructor(size){
        super(size, size);
    }
    charPrint(c){
        if(c !== undefined)
            this.char = c;
        this.print();
    }
}
module.exports = Square; 