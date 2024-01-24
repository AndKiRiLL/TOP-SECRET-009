// Created by Andriyanov Kirill 
// Циклы

// (state && console.log('yes'))
// let i = 0;
// while (i < 6){
//     console.log(++i);
// }

// let i = 0;
// while (i<6) console.log(i++);

// do {
//     console.log(i--);
// } while (i>0);


// let i = 0;
// for (; i < 10;){
//     console.log(i)
//     i++
// }
// console.log(i)

// for (let i=0; i<10; i++){
//     console.log(i)
// }

// let array = [45, 12, 45, 78, 36]
// let array = {
//     'name': 'Vasya',
//     'age': 18,
//     'email': 'dfgr@dfhg.ru'
// }

// for (let i in array){
//     console.log(i, array[i])
//     if (i=='age'){
//         break;
//     }
// }

// for (let i in array){

//     if (i=='age'){
//         continue;
//     }
//     console.log(i, array[i])
// }

// first: for (let i=0; i<=5; i++){
//     for(let j=0; j<=5; j++){
//         console.log(i, j);
//         if (i==3){
//             break first;
//         }
//     }
// }

// Функции // Created by Andriyanov Kirill 

// console.log(summ(2, 3))

// function summ(a=0, b=0){
//     let one, two;

//     function first(x){
//         one = x
//     }
    
//     function second(x){
//         two = x
//     }

//     first(a);
//     second(b);
//     rez = one+two
//     return one+two
// }
// console.log(rez)


//////// HOMEWORK //////// // Created by Andriyanov Kirill 

// Циклы while и for

// 1
/*
let i = 1;
while (i <= 100) {
    console.log(i++)
}
*/

// 2
/*
let i = 11;
while (i <= 33){
    console.log(i++)
}
*/

// 3
/*
let i = 0;
while (i <= 100){
    if (i % 2 == 0){
        console.log(i)
    }
    i++
}
*/

// 4
/*
let i = 1, sum = 0;
while(i <= 100){
    sum += i++
}

console.log(sum)
*/

//// Работа с for для массивов //// // Created by Andriyanov Kirill 

// 1
/*
let array = [1,2,3,4,5]
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}
*/

// 2
/*
let array = [1,2,3,4,5], result = 0;
for (let i = 0; i < array.length; i++){
    result += array[i]
}

console.log(result)
*/

//// Работа с for-in //// // Created by Andriyanov Kirill 

// 1
/*
var obj = {green: 'зелёный', red: 'красный', blue: 'голубой'}
for (let i in obj){
    console.log(`${i}: ${obj[i]}`)
}
*/

// 2
/*
var obj = {'Коля': '200', 'Вася': '300', 'Петя': '400'}
for (let i in obj){
    console.log(`${i} - зарплата ${obj[i]} долларов.`)
}
*/

//////// Задачи //////// // Created by Andriyanov Kirill 

// 1
/*
let array = [2,5,9,15,0,4];
for (let i = 0; i < array.length; i++){
    if (array[i] > 3 && array[i] < 10){
        console.log(array[i])
    } 
}
*/

// 2
/*
let array = [-2,-1,0,1,2,3], sum = 0;
for (let i = 0; i < array.length; i++){
    if (array[i] > 0){
        sum += array[i]
    }
}

console.log(sum)
*/

// 3
/*
let array = [1,2,5,9,4,13,4,10];
for (let i = 0; i < array.length; i++){
    if (array[i] === 4){
        console.log('Да')
        break;
    }
}
*/

// 4
/*
let array = [10, 20, 30, 50, 235, 3000]
for (let i = 0; i < array.length; i++){
    let str = String(array[i])
    if (str[0] == 1 || str[0] == 2 || str[0] == 5){
        console.log(Number(str))
    }
}
*/

// 5
/*
let array = [1,2,3,4,5,6,7,8,9], str = '';
for(let i = 0; i < array.length; i++){
    str += String(-array[i])
}

console.log(str + '-')
*/

// 6
/*
let day = ['пн','вт','ср','чт','пт','сб','вс'];
for (let i = 0; i < day.length; i++){
    if (day[i] == 'сб' || day[i] == 'вс'){
        document.write('<b>' + day[i] + '</b>' + ' ')
    } else {
        document.write(day[i] + ' ')
    }
}
*/

// 7
/*
let week = ['пн','вт','ср','чт','пт','сб','вс'], day = new Date(); 
for (let i = 0; i < week.length; i++){
    if (week[i] == week[day.getDay()]){
        document.write('<i>',week[day.getDay()], '</i>' + ' ')
    } else {
        document.write(week[i] + ' ')
    }
}
*/

// 8
/*
let n = 1000, num = 0;
while (n > 50){
    n /= 2
    num++
}

console.log(n)
console.log(`Итерации: ${num}`)
*/

// Created by Andriyanov Kirill 