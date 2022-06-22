
class Animal {
    name:string;
    gender:string;
    height:string;
    age:number;
    vaccine:boolean;
    image:string; 
    

    constructor( name: string, gender: string, height: string, age: number, vaccine: boolean, image: string){ 
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
        animal.push(this);
        
        
    }
    displayInfo(){
        return `
        <div class="col-4 d-flex mb-3 mt-3 justify-content-center">
        <div class="card" style="width:250px">
            <img class="card-img-top img-cover cardimage" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name: ${this.name}</h4>
              <p class="card-text">Gender: ${this.gender}</p>
              <p class="card-text">height: ${this.height}</p>
              <p class="card-text">Age: ${this.age}</p>
              <hr>
              <button id="" onclick="vaccine()" class="btn-vaccine rounded" >Vaccine:${this.vaccine} </button>
            </div>
          </div> 
      </div>`
    }
}
let animal : Array<Animal> = [];
new Animal("Bounce", "female", "tall", 7, true, "../animal images/hirsch.jpg");
new Animal("Tod", "male", "small", 2, false, "../animal images/bird.jpg");
new Animal("Frank", "male", "tall", 5, false, "../animal images/tiger.jpg");

console.table(animal)


class Cat extends Animal{
    furcolor:string;
    urlbreed:string;
    breed:string;
    constructor(name: string, gender: string, height: string, age: number, vaccine: boolean, image:string, breed:string, furcolor:string, urlbreed: string){
        super(name, gender, height, age, vaccine, image)
        this.breed = breed; 
        this.furcolor = furcolor;
        this.urlbreed = urlbreed;
        cats.push(this);
        
    }
    displayInfo(){
        return `
        <div class="col-4 d-flex mb-3 mt-3 justify-content-center">
        <div class="card" style="width:250px">
            <img class="card-img-top" src=" ${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name: ${this.name}</h4>
              <p class="card-text">Gender: ${this.gender}</p>
              <p class="card-text">height: ${this.height}</p>
              <p class="card-text">Age: ${this.age}</p>
              <p class="card-text">Breed: ${this.breed}</p>
              <p class="card-text">Furcolor: ${this.furcolor}</p>
              <p class="card-text">Url: ${this.urlbreed}</p>
              <hr>
              <button id="btn" onclick="vaccine()" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
            </div>
          </div> 
      </div>`
    }
}
let cats : Array<Cat> = []
new Cat("Minki", "male", "medium", 2, true, "../animal images/cat1.jpg", "siamese", "Cookie", "https://en.wikipedia.org/wiki/Cat");
new Cat("Edward", "male", "medium", 3, false, "../animal images/coolcat.jpg", "Bengal", "Grey", "https://en.wikipedia.org/wiki/Cat");
new Cat("Heidi", "female", "small", 4, true, "../animal images/cat2.jpg", "Kapuziner", "Brightbrown", "https://en.wikipedia.org/wiki/Cat");
console.table(cats)
class Dog extends Animal {
    breed: string;
    training: string;
    
    
    
    constructor(name: string, gender: string, height: string, age: number, vaccine: boolean, image: string, breed: string, training: string){
        super(name, gender, height, age, vaccine, image)
        this.breed = breed;
        this.training = training;
        dogs.push(this);
        
    }
    displayInfo(){
        return `
        <div class="col-4 d-flex mb-3 mt-3 justify-content-center">
        <div class="card">
            <img class="card-img-top" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name:${this.name}</h4>
              <p class="card-text">Gender ${this.gender}</p>
              <p class="card-text">height ${this.height}</p>
              <p class="card-text">Age:${this.age}</p>
              <button id="" onclick="vaccine" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
              <p class="card-text">Breed:${this.breed}</p>
              <p class="card-text">Training:${this.training}</p>
            </div>
          </div> 
      </div>`
    }
}
let dogs : Array<Dog> = []
new Dog("Panther", "male", "medium", 3, true, "../animal images/dog1.jpg", "Terrier","Yes");
new Dog("Howdy", "male", "medium", 3, true, "../animal images/dog2.jpg", "Retriever", "Yes");
new Dog("Russel", "male", "small", 3, false, "../animal images/dog3.jpg", "Pug", "No");

console.table(dogs)

const vacBtn =document.getElementsByClassName("btn-vaccine");

function printCards(){
    (document.getElementById("animalcont") as HTMLElement).innerHTML = "";
    for(let each of animal){
            (document.getElementById("animalcont") as HTMLElement).innerHTML += each.displayInfo();
        }
}

printCards();

// for(let cat of Cats){
//     (document.getElementById("animalcont") as HTMLElement).innerHTML += cat.displayInfo()
// }




// for(let dog of dogs){
//     (document.getElementById("animalcont") as HTMLElement).innerHTML += dog.displayInfo()
// }

// new Dog(1, "Rowdy", "male","medium", 3, "<i class='bi bi-shield-fill-x'></i>", "dog1.jpg", "cooldog", false);
// new Dog(2, "Fred", "male","small", 1, "<i class='bi bi-shield-check'></i>", "dog2.jpg", "housedog", true);
// new Dog(3, "Jasmin", "female","large", 2, "<i class='bi bi-shield-fill-x'></i>", "dog3.jpg", "pug", false);

// constructor(id:number, name:string, gender:string, height:string, age:number, vaccine:string, image:string,){
//     this.id = id;
//     this.name = name;
//     this.gender = gender;
//     this.height = height;
//     this.age = age;
//     this.vaccine = vaccine;
//     this.image = image;
    
// }
// displayInfo(){
//     return `
//     <div class="card" style="width:250px">
//         <img class="card-img-top" src="${this.image}">
//         <div class="card-body">
//           <h4 class="card-title">Name:${this.name}</h4>
//           <p class="card-text">Gender ${this.gender}</p>
//           <p class="card-text">height ${this.height}</p>
//           <p class="card-text">Age:${this.age}</p>
//           <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
//         </div>
//       </div> 
//   </div>`
// }
