class rectangle{
    constructor(w, h){
        if(w <= 0 || h <= 0 || w === undefined || h === undefined)
            return null;
        this.width = w;
        this.height = h;
    }
}
module.exports = rectangle;