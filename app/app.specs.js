describe('Calculator Tests', function() {

    beforeEach(angular.mock.module('myapp'));

    it('The Addition method should return the correct result', inject['calculator', function(calculator) {
        expect(calculator.add(3, 1)).toEqual(2);
    }]);

    it('The Subtraction method should return the correct result', inject['calculator', function(calculator) {
        expect(calculator.subtract(3, 9)).toEqual(-6);
    }]);

    it('The Multiplication method should return the correct result', inject['calculator', function(calculator) {
        expect(calculator.multiply(3, 3)).toEqual(9);
    }]);

    it('The Division method should return the correct result', inject['calculator', function(calculator) {
        expect(calculator.divide(4, 2)).toEqual(2);
    }]);
});