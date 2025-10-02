class rectangle{
    constructor(w, h){
        if(w <= 0 || h <= 0 || w === undefined || h === undefined)
            return null;
        this.width = w;
        this.height = h;
    }
    print() {
        for(let i = 0; i < this.height; i++){
            for(let j = 0; j < this.width; j++){
                process.stdout.write('X')
            }
            process.stdout.write('\n');
        }
    }
}
module.exports = rectangle;