
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
        <div class="col-12 col-md-6 col-lg-4 d-flex mb-3 mt-3 justify-content-center">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top img-cover cardimage" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name: ${this.name}</h4>
              <p class="card-text">Gender: ${this.gender}</p>
              <p class="card-text">height: ${this.height}</p>
              <p class="card-text">Age: ${this.age}</p>
              <hr>
              <div class="divbtn"><button id="" class="btnVaccine" >Vaccine: ${this.vaccine}</button>
              </div>
            </div>
          </div> 
      </div>`
    }
}
let animal : Array<Animal> = [];
new Animal("Bounce", "female", "tall", 7, true, "./animalimages/hirsch.jpg");
new Animal("Tod", "male", "small", 2, false, "./animalimages/bird.jpg");
new Animal("Frank", "male", "tall", 5, false, "./animalimages/tiger.jpg");

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
        <div class="col-12 col-md-6 col-lg-4 d-flex mb-3 mt-3 justify-content-center">
        <div class="card" style="width: 18rem";>
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
              <div class="divbtn"><button id="" class="btnVaccine" > ${this.vaccine}</button></div>
            </div>
          </div> 
      </div>`
    }
}
let cats : Array<Cat> = []
new Cat("Minki", "male", "medium", 2, true, "./animalimages/cat1.jpg", "siamese", "Cookie", "https://en.wikipedia.org/wiki/Cat");
new Cat("Edward", "male", "medium", 3, false, "./animalimages/coolcat.jpg", "Bengal", "Grey", "https://en.wikipedia.org/wiki/Cat");
new Cat("Heidi", "female", "small", 4, true, "./animalimages/cat2.jpg", "Kapuziner", "Brightbrown", "https://en.wikipedia.org/wiki/Cat");
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
        <div class="col-12 col-md-6 col-lg-4 d-flex mb-3 mt-3 justify-content-center">
        <div class="card" style="width: 18rem";>
            <img class="card-img-top" src="${this.image}">
            <div class="card-body">
              <h4 class="card-title">Name:${this.name}</h4>
              <p class="card-text">Gender ${this.gender}</p>
              <p class="card-text">height ${this.height}</p>
              <p class="card-text">Age:${this.age}</p>
              <div class="divbtn"><button class="btnVaccine" >Vaccine: ${this.vaccine}</button></div>
              <p class="card-text">Breed:${this.breed}</p>
              <p class="card-text">Training:${this.training}</p>
            </div>
          </div> 
      </div>`
    }
}
let dogs : Array<Dog> = []
new Dog("Panther", "male", "medium", 3, true, "./animalimages/dog1.jpg", "Terrier","Yes");
new Dog("Howdy", "male", "medium", 3, true, "./animalimages/dog2.jpg", "Retriever", "Yes");
new Dog("Russel", "male", "small", 3, false, "./animalimages/dog3.jpg", "Pug", "No");

console.table(dogs)

const vacBtn =document.getElementsByClassName("btnVaccine");
function printCards(){
    (document.getElementById("animalcont") as HTMLElement).innerHTML = "";
    for(let each of animal){
            (document.getElementById("animalcont") as HTMLElement).innerHTML += each.displayInfo();
        }
};

printCards();
function VaccineBtn(){
    for(let i = 0; i < vacBtn.length; i++){
        if(animal[i].vaccine == true){
            (document.getElementsByClassName("divbtn")[i] as HTMLElement).innerHTML =
            `<button type="button"class="btn w-100 rounded-5 btnVaccine btn-success" >Vaccine: <i class="bi bi-clipboard-check-fill"></i></button>`
        } else if(animal[i].vaccine == false){
            (document.getElementsByClassName("divbtn")[i] as HTMLElement).innerHTML =
            `<button type="button" class="btn w-100 rounded-5 btnVaccine btn-danger" >Vaccine: <i class="bi bi-exclamation-octagon"></i></button>`
        };
    };
    vacChan();
};

VaccineBtn();
function vacChan(){
    for (let i = 0; i < vacBtn.length; i++){
        vacBtn[i].addEventListener("click", function () {
        animal[i].vaccine = !animal[i].vaccine;
        VaccineBtn();
    });
    }
};




// for(let dogs of dogs){
//     (document.getElementById("animalcont") as HTMLElement).innerHTML += dog.displayInfo()
// }

