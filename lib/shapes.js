class Shape {
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth) {
        this.width = width;
        this.height = height;
        this.version = version;
        this.xmlns = xmlns;
        this.stroke = stroke;
        this.fill = fill;
        this.strokeWidth = strokeWidth;
    }
}
class Triangle extends Shape {
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth,points){
        super(width,height,version,xmlns,stroke,fill,strokeWidth);
        this.type = 'polygon';
        this.points = points;
        
    }
    render(){
    }
}
class Circle extends Shape {
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth,cx,cy,r){
        super(width,height,version,xmlns,stroke,fill,strokeWidth);
        this.type = 'circle';
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        
    }
    render(){
    }
}
class Square extends Shape{
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth,x){
        super(width,height,version,xmlns,stroke,fill,strokeWidth);
        this.type = 'rect';
        this.x = x;
        this.y = x; // =x because it is a square 

        
    }
    render(){
    }
}
// `Triangle`, `Circle`, and `Square`
module.exports = {Shape,Triangle,Circle,Square};