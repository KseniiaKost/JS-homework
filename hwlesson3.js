// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// *******************solution*********************
// let output = 0;
// for (let index = 0; index < 10; index++) {
//     output++
//     document.write(`<div>${output}</div>`)
    
    
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// *******************solution*********************
// let output = 0;
// for (let index = 1; index < 11; index++) {
//     output++
//     document.write(`<div>${index} -  ${output}</div>`)
        
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// *******************solution*********************
// let count = 0;
// while(count < 20){
//     document.write(`<h1>text</h1>`)
//     count ++
//     console.log(count);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// *******************solution*********************

// let count = 0;
// while(count < 21){
//     document.write(`<h1>index ${count} - text</h1>`)
//     count ++
//     console.log(count);
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


// *******************solution*********************

// for(let i=0; i<listOfItems.length; i++){
//     document.write(`<ul><li>${listOfItems[i]}</li></ul>`)
// }



// -----------------------------------------------

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

			// let products = [
			// 	{
			// 		title: 'milk',
			// 		price: 22,
			// 		image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
			// 	},
			// 	{
			// 		title: 'juice',
			// 		price: 27,
			// 		image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
			// 	},
			// 	{
			// 		title: 'tomato',
			// 		price: 47,
			// 		image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
			// 	},
			// 	{
			// 		title: 'tea',
			// 		price: 15,
			// 		image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
			// 	},
			// ];

// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


// *******************solution*********************

// for(product of products){
//     document.write(`
//     <div class="product-card">
//     <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//     <img src= ${product.image} alt="" class="product-image">
// </div>
//     `)
// }



// --------------------
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

// *******************solution*********************

// for (user of users){
//     if(user.status == true){
//     document.write(`<p>${user.name} - ${user.status}</p>`)
//     }
// }

// for (user of users){
//     if(user.status == false){
//     document.write(`<p>${user.name} - ${user.status}</p>`)
//     }
// }

// for (user of users){
//     if(user.age > 30){
//         console.log(user.age);
//         document.write(`<p>${user.name} - ${user.age}</p>`);
//     }
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

// *******************solution*********************

// let usersWithCities = []
// for (let i = 0; i < citiesWithId.length; i++) {
//     for (let x = 0; x < citiesWithId.length; x++) {
//         if (usersWithId[i].id == citiesWithId[x].user_id) {
//             usersWithId[i].address = citiesWithId[x]
            
//             }
         
//             };
//             usersWithCities.push(usersWithId[i])
//          }
//         console.log(usersWithCities);
  

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// *******************solution*********************
// let letters = [ 'a', 'b', 'c'];
// let word = "";
// for(let i = 0; i<letters.length; i++){
//     word+=letters[i]
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// *******************solution*********************
// let letters = [ 'a', 'b', 'c'];
// let word = "";
// let i = 0;
// while (word.length <3){
//     word+=letters[i]
//     i++
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// *******************solution*********************
// let letters = [ 'a', 'b', 'c'];
// let word = "";
// for(letter of letters){
//     word+=letter
// }
// console.log(word);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// *******************solution*********************

// let arr = [1,45,489,32,56,87,25,1,25,14,17,36,95,7,8,9,6]

// for(let i=0; i < arr.length; i++){
//     if (arr[i+1]%2==0){
//         console.log(`${arr[i]} сусід справа ${arr[i+1]}`);
//     }
// }



