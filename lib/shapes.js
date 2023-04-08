class Shape {
    constructor(width,height,version,xmlns) {
        this.width = width;
        this.height = height;
        this.version = version;
        this.xmlns = xmlns;
    }
}
class Triangle extends Shape {
    constructor(width,height,version,xmlns,points,stroke,fill,strokeWidth){
        super(width,height,version,xmlns);
        this.type = 'polygon';
        this.points = points;
        this.stroke = stroke;
        this.fill = fill;
        this.strokeWidth = strokeWidth;
    }
    render(){
    }
}
// class Circle extends Shape {

// }
// `Triangle`, `Circle`, and `Square`
module.exports = {Shape,Triangle};