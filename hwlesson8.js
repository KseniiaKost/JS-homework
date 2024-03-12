// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let arr = []
// for(let i=0; i<10; i++){
//     let anUser = new User(
//         (Math.random()*100).toFixed()+i,
//         'Anna'+(i+1),
//         'Surname'+(i+1),
//         'Anna'+(i+1)+'@gmail.com',
//         (Math.random()*10000000).toFixed()
//     )
//     arr.push(anUser)
// }



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(arr.filter((user) => user.id%2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arr.sort((a,b) => a.id-b.id ));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order 
//(поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname , email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let arr1 = []
// for(let i=0; i<10; i++){
//     let orderArray = []
//     let count = Math.floor(Math.random() * 10);
//     for (let j = 0; j < count; j++) {
//         orderArray.push('apple');
//     }
//     let aClient = new Client(
//         (Math.random()*100).toFixed()+i,
//         'Anna'+(i+1),
//         'Surname'+(i+1),
//         'Anna'+(i+1)+'@gmail.com',
//         (Math.random()*10000000).toFixed(),
//         orderArray, 
//     )
//     arr1.push(aClient)
// }
// console.log(arr1);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі 
//order по зростанню. (sort)

// console.log(arr1.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, 
//рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars (model, vendor, year, maxSpeed, engine ) {
//     this.model = model
//     this.vendor = vendor
//     this.year = year
//     this.maxSpeed = maxSpeed 
//     this.engine = engine

//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function() {
//         console.log(`
//     model = ${this.model},
//     vendor = ${this.vendor}, 
//     year = ${this.year}, 
//     maxSpeed = ${this.maxSpeed}, 
//     engine = ${this.engine},`)
//         },
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed +=newSpeed;
//     }
//     this.changeYear = function(newValue){
//         this.year = newValue;
//     }

//     this.addDriver = function(driver){
//         this.driver = {
//             name: driver.name,
//             age: driver.age,
//             phoneNumber: driver.phoneNumber
//     }
// }
// }


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars{ 
//  constructor (model, vendor, year, maxSpeed, engine ){
//     this.model = model
//     this.vendor = vendor
//     this.year = year
//     this.maxSpeed = maxSpeed 
//     this.engine = engine

//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function() {
//         console.log(`
//     model = ${this.model},
//     vendor = ${this.vendor}, 
//     year = ${this.year}, 
//     maxSpeed = ${this.maxSpeed}, 
//     engine = ${this.engine},`)
//         },
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed +=newSpeed;
//     }
//     this.changeYear = function(newValue){
//         this.year = newValue;
//     }

//     this.addDriver = function(driver){
//         this.driver = {
//             name: driver.name,
//             age: driver.age,
//             phoneNumber: driver.phoneNumber
//     }
// }
// }
// }



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor( name, age, size ){
//         this.name = name
//         this.age = age
//         this.size = size
//     }
// }

// let cinderellas = []
// for(let i = 0; i<10; i++){
//     let aCinderella = new Cinderella(
//         'Anna'+i,
//          18+i,
//          35+i
//     )
//     cinderellas.push(aCinderella)
// }


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(name, age, foundShoeSize){
//         this.name = name
//         this.age = age
//         this.foundShoeSize = foundShoeSize
//     }
// }
// let aPrince = new Prince(
//         'Roberto',
//          35,
//          44
//     )
    


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let i=0; i<cinderellas.length; i++){
//     if(cinderellas[i].size === aPrince.foundShoeSize){
//         console.log(`${cinderellas[i].name} should be with ${aPrince.name}`);
//     }
// }

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// console.log(cinderellas.find(cinderella =>  cinderella.size === aPrince.foundShoeSize ));
