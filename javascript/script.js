"use strict";
class Animal {
    constructor(name, gender, height, age, vaccine) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.age = age;
        this.vaccine = vaccine;
    }
    displayInfo() {
        return `${this.name}, ${this.gender}, ${this.height}, ${this.age}, ${this.vaccine}`;
    }
}
class Cat extends Animal {
    constructor(name, gender, height, age, vaccine, breed, furcolor, urlbreed) {
        super(name, gender, height, age, vaccine);
        this.breed = breed;
        this.furcolor = furcolor;
        this.urlbreed = this.urlbreed;
    }
    displayInfo() {
        return `${this.name}, ${this.gender}, ${this.height}, ${this.age}, ${this.vaccine}, ${this.breed}, ${this.furcolor}, ${this.urlbreed}`;
    }
}
class Dog extends Animal {
    constructor(name, gender, height, age, vaccine, breed, training) {
        super(name, gender, height, age, vaccine);
        this.breed = breed;
        this.training = training;
    }
    displayInfo() {
        return `${this.name}, ${this.gender}, ${this.height}, ${this.age}, ${this.vaccine}, ${this.breed}, ${this.training}`;
    }
}
