
const {Question} = require('../../index.js');
// const inquirer = require('inquirer')
  describe('Question',()=>{
    describe('Instantiate', () => {
        it('should be an instance of Question class', () => {            
            const question = new Question();
            expect(question).toBeInstanceOf(Question);
       });      
    });
    describe('Set name,type,message,choices', () => {
        it('should be the values given', () => {            
            const question = new Question('testN','testT','testM','testC');
            expect(question).toEqual({"name":"testN","type":"testT","message":"testM","choices":"testC"});
       });      
    });
  });
  // describe('UserInput',()=>{ 

  //   describe('test user input', () => {          
  //     it('should equal test', async () => {
  //       expect.assertions(1);
  //       jest.mock('inquirer');
  //       inquirer.prompt = jest.fn().mockResolvedValue({ text: 'svg' });
  //       expect(questions()).resolves.toEqual({ text: 'svg' });
  //     });
  //   });
  // });

  // describe('User Input',()=>{
  //   describe('First Question', () => {
  //       it('should ask for up to 3 characters and accept no more ', () => {            
  //           const question = new Question();
  //           expect(question).toBeInstanceOf(Question);
  //      });      
  //   });

  //   describe('Set name,type,message,choices', () => {
  //       it('should be the values given', () => {            
  //           const question = new Question('testN','testT','testM','testC');
  //           expect(question).toEqual({"name":"testN","type":"testT","message":"testM","choices":"testC"});
  //      });      
  //   });

  // });
