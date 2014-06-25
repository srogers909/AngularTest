/**
 * Created by Steven on 6/25/2014.
 */

myapp.service('calculator', function() {
    this.addition = function(a, b) {
        return a + b;
    };

    this.subtract = function(a, b) {
        return a - b;
    };

    this.multiply = function(a, b) {
        return a * b;
    };

    this.divide = function(a, b) {
        return a / b;
    };
});