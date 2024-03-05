// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let helloWorld = 'hello world'
// let loremIpsum = 'lorem ipsum'
// let javascriptIsCool = 'javascript is cool'
// console.log(helloWorld.length);
// console.log(loremIpsum.length);
// console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
//  'hello world', 'lorem ipsum', 'javascript is cool'

// let helloWorld = 'hello world'
// let loremIpsum = 'lorem ipsum'
// let javascriptIsCool = 'javascript is cool'
// console.log(helloWorld.toLocaleUpperCase());
// console.log(loremIpsum.toLocaleUpperCase());
// console.log(javascriptIsCool.toLocaleUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let helloWorld = 'HELLO WORLD'
// let loremIpsum = 'LOREM IPSUM'
// let javascriptIsCool = 'JAVASCRIPT IS COOL'
// console.log(helloWorld.toLowerCase());
// console.log(loremIpsum.toLowerCase());
// console.log(javascriptIsCool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні'
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(num => num.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let sortNums = (nums,direction) => {
//     if (direction==='ascending'){
//         return nums.sort((a,b) => a-b)
//     }else if( direction==='descending'){
//         return nums.sort((a,b) => b-a)
//     }
// }
// console.log(sortNums([11,21,3],'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5 ));

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// console.log(coursesAndDurationArray.map((item, index) =>{
//  return {
//     id: index+1,
//     title: item.title,
//     monthDuration: item.monthDuration
//  } 
// }
// ));

//  =========================
//  const deckOfCards = [
//     { cardSuit: 'Черви', value: 6, color: 'Червоний' },
//     { cardSuit: 'Черви', value: 7, color: 'Червоний' },
//     { cardSuit: 'Черви', value: 8, color: 'Червоний' },
//     { cardSuit: 'Черви', value: 9, color: 'Червоний' },
//     { cardSuit: 'Черви', value: 10, color: 'Червоний' },
//     { cardSuit: 'Черви', value: 'Валет', color: 'Червоний' },
//     { cardSuit: 'Черви', value: 'Дама', color: 'Червоний' },
//     { cardSuit: 'Черви', value: 'Король', color: 'Червоний' },
//     { cardSuit: 'Черви', value: 'Туз', color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 6, color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 7, color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 8, color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 9, color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 10, color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 'Валет', color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 'Дама', color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 'Король', color: 'Червоний' },
//     { cardSuit: 'Бубни', value: 'Туз', color: 'Червоний' },
//     { cardSuit: 'Піки', value: 6, color: 'Чорний' },
//     { cardSuit: 'Піки', value: 7, color: 'Чорний' },
//     { cardSuit: 'Піки', value: 8, color: 'Чорний' },
//     { cardSuit: 'Піки', value: 9, color: 'Чорний' },
//     { cardSuit: 'Піки', value: 10, color: 'Чорний' },
//     { cardSuit: 'Піки', value: 'Валет', color: 'Чорний' },
//     { cardSuit: 'Піки', value: 'Дама', color: 'Чорний' },
//     { cardSuit: 'Піки', value: 'Король', color: 'Чорний' },
//     { cardSuit: 'Піки', value: 'Туз', color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 6, color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 7, color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 8, color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 9, color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 10, color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 'Валет', color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 'Дама', color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 'Король', color: 'Чорний' },
//     { cardSuit: 'Трефи', value: 'Туз', color: 'Чорний' }
// ];
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз

// console.log (deckOfCards.filter((item) => { return item.cardSuit === 'Піки' && item.value ==='Туз'}));

//  - всі шістки

// console.log (deckOfCards.filter((item) => {return item.value === 6}));

//  - всі червоні карти

// console.log (deckOfCards.filter((item) => {return item.color === 'Червоний'}));

//  - всі буби

// console.log (deckOfCards.filter((item) => {return item.cardSuit === 'Бубни'}));

//  - всі трефи від 9 та більше

// console.log (deckOfCards.filter((item) => {return item.cardSuit === 'Трефи' && (item.value >8 || typeof item.value === 'string')}));


// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// console.log(deckOfCards.reduce((accumulator, item) => {
//     const suit = item.cardSuit;
//     if(suit==='Черви'){
//         accumulator[suit].push(item);
//     } else if(suit==='Бубни'){
//         accumulator[suit].push(item); 
//     }else if(suit==='Піки'){
//         accumulator[suit].push(item); 
//     }else if(suit==='Трефи'){
//         accumulator[suit].push(item); 
//     }
    
//     return accumulator;
// }, { Черви: [], Бубни: [], Піки: [], Трефи: [] }));


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// --написати пошук всіх об'єктів, в який в modules є sass

// console.log(coursesArray.reduce((accumulator,item) => {
// if (item.modules.includes('sass')){
//     accumulator.push(item)
// }
// return accumulator 
// }, []  ));

// --написати пошук всіх об'єктів, в який в modules є docker

// console.log(coursesArray.reduce((accumulator,item) => {
//     if (item.modules.includes('docker')){
//         accumulator.push(item)
//     }
//     return accumulator 
//     }, [] ));
