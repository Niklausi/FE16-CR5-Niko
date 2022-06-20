"use strict";
class Animal {
    id:number;
    name:string;
    gender:string;
    height:string;
    age:number;
    vaccine:string;
    image:string;
     
       
    constructor(id:number, name:string, gender:string, height:string, age:number, vaccine:string, image:string,){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
        animalsArray.push(this);
    }
    printCards(){
        return `
        <div class="card" style="width:250px">
            <img class="card-img-top" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name:${this.name}</h4>
              <p class="card-text">Gender ${this.gender}</p>
              <p class="card-text">height ${this.height}</p>
              <p class="card-text">Age:${this.age}</p>
              <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
            </div>
          </div> 
      </div>`
    }
}
let animalsArray = [];
class Cat extends Animal {
    breed:string;
    furcolor:string;
    urlbreed:string;

    constructor(id:number, name:string, gender:string, height:string, age:number, vaccine:string, image:string, breed:string, furcolor:string, urlbreed:string){
        super(id, name, gender, height, age, vaccine, image)
        this.breed = breed;
        this.furcolor = furcolor;
        this.urlbreed = urlbreed;
    }
    printCards(){
        return `
        <div class="card" style="width:250px">
            <img class="card-img-top" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name:${this.name}</h4>
              <p class="card-text">Gender ${this.gender}</p>
              <p class="card-text">height ${this.height}</p>
              <p class="card-text">Age:${this.age}</p>
              <p class="card-text">Age:${this.breed}</p>
              <p class="card-text">Age:${this.furcolor}</p>
              <p class="card-text">Age:${this.urlbreed}</p>
              <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
            </div>
          </div> 
      </div>`
    }
}
class Dog extends Animal {
    breed:string;
    training:boolean;

    constructor(id:number, name:string, gender:string, height:string, age:number, vaccine:string, image:string,  breed:string, training:boolean){
        super(id, name, gender, height, age, vaccine, image)
        this.breed = breed;
        this.training = training;
    }
    printCards(){
        return `
        <div class="card" style="width:250px">
            <img class="card-img-top" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name:${this.name}</h4>
              <p class="card-text">Gender ${this.gender}</p>
              <p class="card-text">height ${this.height}</p>
              <p class="card-text">Age:${this.age}</p>
              <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
              <p class="card-text">Age:${this.breed}</p>
              <p class="card-text">Age:${this.training}</p>
            </div>
          </div> 
      </div>`
    }
}
new Cat(1, "Minki", "female","small", 1, "<i class='bi bi-shield-check'></i>", "cat1.jpg", "housecat", "whiteblack", "https://en.wikipedia.org/wiki/Cat");
new Cat(2, "Mark", "male","medium", 4, "<i class='bi bi-shield-check'></i>", "cat2.jpg", "wiskascat", "grey", "https://en.wikipedia.org/wiki/Cat");
new Cat(3, "josh", "male","large", 3, "<i class='bi bi-shield-fill-x'></i>", "coolcat.jpg", "coolcat", "darkgrey", "https://en.wikipedia.org/wiki/Cat");
new Dog(1, "Rowdy", "male","medium", 3, "<i class='bi bi-shield-fill-x'></i>", "dog1.jpg", "cooldog", false);
new Dog(2, "Fred", "male","small", 1, "<i class='bi bi-shield-check'></i>", "dog2.jpg", "housedog", true);
new Dog(3, "Jasmin", "female","large", 2, "<i class='bi bi-shield-fill-x'></i>", "dog3.jpg", "pug", false);

let animalcont = document.getElementById("animalcont");
