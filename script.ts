class Animal {
    name:string;
    gender:Boolean;
    height:number;
    age:number;
    vaccine:Boolean; 
       
    constructor(name:string, gender:boolean, height:number, age:number, vaccine:boolean){
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.age = age;
        this.vaccine = vaccine;
    }
    displayInfo(){
        return `${this.name}, ${this.gender}, ${this.height}, ${this.age}, ${this.vaccine}`
    }
}
class Cat extends Animal {
    breed:string;
    furcolor:string;
    urlbreed:string;

    constructor(name:string, gender:boolean, height: number, age:number, vaccine:boolean, breed:string, furcolor:string, urlbreed:string){
        super(name, gender, height, age, vaccine)
        this.breed = breed;
        this.furcolor = furcolor;
        this.urlbreed = this.urlbreed;
    }
    displayInfo(){
        return `${this.name}, ${this.gender}, ${this.height}, ${this.age}, ${this.vaccine}, ${this.breed}, ${this.furcolor}, ${this.urlbreed}`
    }
}
class Dog extends Animal {
    breed:string;
    training:boolean;

    constructor(name:string, gender:boolean, height: number, age:number, vaccine:boolean, breed:string, training:boolean){
        super(name, gender, height, age, vaccine)
        this.breed = breed;
        this.training = training;
    }
    displayInfo(){
        return `${this.name}, ${this.gender}, ${this.height}, ${this.age}, ${this.vaccine}, ${this.breed}, ${this.training}`
    }
}