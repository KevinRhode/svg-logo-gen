class Shape {
    constructor(width='300',height='200',version = '1.1',xmlns='http://www.w3.org/2000/svg',stroke,fill,strokeWidth) {
        this.width = width;
        this.height = height;
        this.version = version;
        this.xmlns = xmlns;
        this.stroke = stroke;
        this.fill = fill;
        this.strokeWidth = strokeWidth;

    }

    setColor(setFill){
        this.fill = setFill;
    }    

}
class Triangle extends Shape {
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth,points='150, 18 244, 182 56, 182'){
        
        super(width=Shape.width,height=Shape.height,version=Shape.version,xmlns=Shape.xmlns,stroke,fill,strokeWidth);
        this.type = 'polygon';
        this.points = points;        
        
    }
    render(){
        return`<${this.type} points="${this.points}" fill="${this.fill}" />`;
        
    }

}
class Circle extends Shape {
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth,cx = "150",cy="100",r="80"){
        super(width=Shape.width,height=Shape.height,version=Shape.version,xmlns=Shape.xmlns,stroke,fill,strokeWidth);
        this.type = 'circle';
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        
    }
    render(){
        return`<${this.type} cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`
        // return`<${this.type} cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`
    }
}
class Square extends Shape{
    constructor(width,height,version,xmlns,stroke,fill,strokeWidth,x = "15"){
        super(width=Shape.width,height=Shape.height,version=Shape.version,xmlns=Shape.xmlns,stroke,fill,strokeWidth);
        this.type = 'rect';
        this.x = x;
        this.y = x; // =x because it is a square 
        
    }
    render(){
        return`<${this.type} x="${this.x}" y="${this.y}" fill="${this.fill}" />`
        // return `<${this.type} x="${this.x}" y="${this.y}" fill="${this.fill}" />`
    }
}
// `Triangle`, `Circle`, and `Square`
module.exports = {Shape,Triangle,Circle,Square};