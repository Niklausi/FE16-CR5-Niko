var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, gender, height, age, vaccine) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.age = age;
        this.vaccine = vaccine;
    }
    Animal.prototype.displayInfo = function () {
        return "".concat(this.name, ", ").concat(this.gender, ", ").concat(this.height, ", ").concat(this.age, ", ").concat(this.vaccine);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, gender, height, age, vaccine, breed, furcolor, urlbreed) {
        var _this = _super.call(this, name, gender, height, age, vaccine) || this;
        _this.breed = breed;
        _this.furcolor = furcolor;
        _this.urlbreed = _this.urlbreed;
        return _this;
    }
    Cat.prototype.displayInfo = function () {
        return "".concat(this.name, ", ").concat(this.gender, ", ").concat(this.height, ", ").concat(this.age, ", ").concat(this.vaccine, ", ").concat(this.breed, ", ").concat(this.furcolor, ", ").concat(this.urlbreed);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, gender, height, age, vaccine, breed, training) {
        var _this = _super.call(this, name, gender, height, age, vaccine) || this;
        _this.breed = breed;
        _this.training = training;
        return _this;
    }
    Dog.prototype.displayInfo = function () {
        return "".concat(this.name, ", ").concat(this.gender, ", ").concat(this.height, ", ").concat(this.age, ", ").concat(this.vaccine, ", ").concat(this.breed, ", ").concat(this.training);
    };
    return Dog;
}(Animal));
