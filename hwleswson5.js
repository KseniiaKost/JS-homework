// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let foo = (a,b) => a*b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let foo = (r) => 3.14*(r*r);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let foo = (h,r) => 2*3.14*h*r;

// - створити функцію яка приймає масив та виводить кожен його елемент

// let foo = (arr) => {
//     for(let ar of arr){
//     console.log(ar);
// }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let foo = (text) =>{
//     document.write(`<p>${text}</p>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  let foo = (text) =>{
//     return(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`)
// }


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
        //  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

        // let foo = (text,num) =>{
        //     let ul = '<ul>'
        //         for(let i=0; i<num;i++){
        //             ul+=`<li>${text}</li>`
        //         }
        //         ul+= '</ul>'
        //         return ul
        //     }
            
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let foo = (arr) => {
//     let ul = '<ul>'
//     for (let ar of arr){
//         ul += `<li>${ar}</li>`
//     }
//     ul+= '</ul>'
//     return ul
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
//Для кожного об'єкту окремий блок.

// let foo = (arr) => {
//     let result = '<div>'
//         for (let i=0; i<arr.length; i++){
        
//            let obj = arr[i]
//             result += `<p> id:${obj.id},name:${obj.name},id:${obj.age} </p>`
//         }
//         result += '</div>'
//         return result 
// }

// - створити функцію яка повертає найменьше число з масиву

// let foo = (arr) => {
//     let result = arr[i];
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] < result){
//             result = arr[i]
//         }
//     }
//     return result
// }


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. 
//Приклад sum([1,2,10]) //->13
// let sum = (arr) =>{
//     let result=0;
//     for (let ar of arr){
//         result += ar;
//         console.log(ar);
//     }
//     return result
// }

 
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr,index1,index2) => {
//     let temp = arr[index2];
//     arr[index2] = arr[index1];
//     arr[index1] = temp;
//     return arr
// }

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     let result;
//      if (exchangeCurrency === currencyValues[0].currency){
//        result = sumUAH/currencyValues[0].value
//      }else if (exchangeCurrency === currencyValues[1].currency){
//          result = sumUAH/currencyValues[1].value
//      }
//      return result
// }


