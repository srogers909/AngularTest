describe('Calculator Tests', function() {
    var _calculator;

    beforeEach(angular.mock.module('myapp'));

    beforeEach(inject(['calculator', function(calculator) {
        _calculator = calculator;
    }]));

    it('The Addition method should return the correct result', function() {
        expect(_calculator.addition(3, 1)).toBe(4);
    });

    it('The Subtraction method should return the correct result', function() {
        expect(_calculator.subtract(3, 9)).toBe(-6);
    });

    it('The Multiplication method should return the correct result', function() {
        expect(_calculator.multiply(4, 2)).toBe(8);
    });

    it('The Division method should return the correct result', function() {
        expect(_calculator.divide(4, 2)).toBe(2);
    });
});


describe('Testing the Controller', function() {

    beforeEach(module("myapp"));

    it('should return a 200 status code', inject(function($httpBackend) {
        $httpBackend.expect('POST', 'https://api.mydomain.com/login')
            .respond(200, "[{ success : 'true', id : 123 }]");
    }));

});

