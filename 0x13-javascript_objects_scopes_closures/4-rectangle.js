class rectangle{
    constructor(w, h){
        if(w <= 0 || h <= 0 || w === undefined || h === undefined)
            return null;
        this.width = w;
        this.height = h;
        this.char = 'X';
    }
    print() {
        for(let i = 0; i < this.height; i++){
            for(let j = 0; j < this.width; j++){
                process.stdout.write(this.char);
            }
            process.stdout.write('\n');
        }
    }
    rotate(){
        let tmp = this.height;
        this.height = this.width;
        this.width = tmp;
    }
    double(){
        this.height = this.height * 2;
        this.width = this.width * 2;
    }
}
module.exports = rectangle;