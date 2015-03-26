
describe('String Calculator', function() {

    var app;
    
    beforeEach(function() {
        app = new App();
    });
    
    it('has an add method', function() {
        expect(app.add).toBeDefined();
    });
    
    it('should return 0 if passed an empty string ', function(){
        expect(app.add('')).toBe(0);
    });

    it('should return 1 number', function(){
        expect(app.add('3')).toBe(3);
    });

    it('should add 2 numbers together', function(){
        expect(app.add('1,2')).toBe(3);
    });

    it('should treat empty strings as 0', function(){
        expect(app.add('2,')).toBe(2);
    });

    it('should add together more than two numbers', function(){
        expect(app.add('1,2,3,4')).toBe(10);
    });

    it('should handle new lines as well as commas', function(){
        expect(app.add('1\n2,3')).toBe(6);
    });

    it('should support the use of custom delimiters', function(){
        expect(app.add('//%\n1%2%3')).toBe(6);
    });

    it('should throw exception on negative values', function(){

        try{
            app.add(null, '1,2,-3');
        }catch(e){
            expect(e).toBeDefined();
        }

    })

});