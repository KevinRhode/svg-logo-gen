// The application must include Triangle, Circle, and Square classes, 
//as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const {Shape,Triangle,Circle,Square} = require('../shapes.js');


describe('Shape', () => {
  // Test to verify that the Shape class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Shape class', () => {
        const shape = new Shape('','','','');
        expect(shape).toBeInstanceOf(Shape);
       });      
  });
 
  //Test to verify that text can be assigned.
  describe('Initialize prop width', () => {
    it('should set width properly', () => {
      const width = '300';
      const shape = new Shape(width, '200');  
      expect(shape.width).toBe(width);
    });
  });

  describe('Initialize prop height', () => {
    it('should set height properly', () => {
      const height = '300';
      const shape = new Shape('300', height);  
      expect(shape.height).toBe(height);
    });
  });

  describe('Initialize prop version', () => {
    it('should set version properly', () => {
      const version = '1.1';
      const shape = new Shape('','', version,'');  
      expect(shape.version).toBe(version);
    });
  });

  describe('Initialize prop xmlns', () => {
    it('should set xmlns properly', () => {
      const xmlns = 'http://www.w3.org/2000/svg';
      const shape = new Shape('300', '200', '',xmlns);  
      expect(shape.xmlns).toBe(xmlns);
    });
  });
  describe('Initialize Stroke',()=>{
    it('should set Stroke', () => {
      const stroke = 'black';
      const shape = new Shape('','','','','black');  
      expect(shape.stroke).toBe(stroke);
    });
  });
  describe('Initialize Fill',()=>{
    it('should set Fill', () => {
      const fill = 'transparent';
      const shape = new Shape('','','','','','transparent');  
      expect(shape.fill).toBe(fill);
    });
  });
  describe('Initialize StrokeWidth',()=>{
    it('should set StrokeWidth', () => {
      const strokeWidth = '5';
      const shape = new Shape('','','','','','','5');  
      expect(shape.strokeWidth).toBe(strokeWidth);
    });
  });

  // width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">




});

describe('Triangle',() => {
{/* <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" /> */}
  describe('Initialize Points',()=>{
    it('should set Points', () => {
      const points = '200,10 250,14 265,15';
      const triangle = new Triangle('','','','','','','',points);  
      expect(triangle.points).toBe(points);
    });
  });
  describe('Initialize Type',()=>{
    it('should set Type', () => {
      const type = 'polygon';
      const triangle = new Triangle('','','','','','','','');  
      expect(triangle.type).toBe(type);
    });
  });
  
  describe('Initialize AC Test',()=>{
    it('should pass Test', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      
    });
  });
  describe('Render to Screen',()=>{
    it('should com back as formated string',()=>{
      const triangle = new Triangle();
      const formatedString = `<${triangle.type} points="${triangle.points}" fill="${triangle.fill}" />`;
      expect(triangle.render()).toBe(formatedString);
    });

  });
  

});

describe('Circle',() => {
  //ref notes for Dev
  {/* <circle cx="25" cy="75" r="20" */}
    describe('Initialize cx',()=>{
      it('should set cx', () => {
        const cx = '35';
        const circle = new Circle('','','','','','','',cx);  
        expect(circle.cx).toBe(cx);
      });
    });
    describe('Initialize cy',()=>{
      it('should set cy', () => {
        const cy = '30';
        const circle = new Circle('','','','','','','','',cy);  
        expect(circle.cy).toBe(cy);
      });
    });
    describe('Initialize r',()=>{
      it('should set r', () => {
        const r = '20';
        const circle = new Circle('','','','','','','','','',r);  
        expect(circle.r).toBe(r);
      });
    });
    describe('Initialize Type',()=>{
      it('should set Type', () => {
        const type = 'circle';
        const circle = new Circle('','','','','','','','','','');  
        expect(circle.type).toBe(type);
      });
    });
    
  //
  describe('Render to Screen',()=>{
    it('should com back as formated string',()=>{
      const circle = new Circle();
      const formatedString = `<${circle.type} cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${circle.fill}" />`;
      expect(circle.render()).toBe(formatedString);
    });

  });

  
});

describe('Square',() => {
  {/* <circle cx="25" cy="75" r="20" */}
    describe('Initialize x',()=>{
      it('should set x', () => {
        const x = '35';
        const rect = new Square('','','','','','','',x);  
        expect(rect.x).toBe(x);
      });
    });
    describe('Initialize y but x',()=>{
      it('should set y', () => {
        const y = '35';
        const rect = new Square('','','','','','','',y);  
        expect(rect.y).toBe(y);
      });
    });      
    describe('Initialize Type',()=>{
      it('should set Type', () => {
        const type = 'rect';
        const rect = new Square('','','','','','','','');  
        expect(rect.type).toBe(type);
      });
    });
    describe('Render to Screen',()=>{
      it('should com back as formated string',()=>{
        const square = new Square();
        const formatedString = `<${square.type} x="${square.x}" y="${square.y}" fill="${square.fill}" />`;
        expect(square.render()).toBe(formatedString);
      });

    });
    
  //

  
});

  



