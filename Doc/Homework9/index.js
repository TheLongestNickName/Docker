

// let start = +prompt('Введите число')
//
// while (start > 0){
//     console.log(` hello from bot ${start}`);
//     start --;
// }

// let objDays = {
//     1 : "monday",
//     2 : "tuesday",
//     3 : "wednesday",
//     4 : "thursday",
//     5 : "friday",
//     6 : "saturday",
//     7 : "sunday",
//     8 : "monday",
//     9 : "tuesday",
//     10 : "wednesday",
//     11 : "thursday",
//     12 : "friday",
//     13 : "saturday",
//     14 : "sunday",
//     15 : "monday",
//     16 : "tuesday",
//     17 : "wednesday"
// }
//
// let monday = 0;
// let tuesday = 0;
// let wednesday = 0;
// let thursday = 0;
// let friday = 0;
// let saturday = 0;
// let sunday = 0;
//
// for (let key in objDays) {
//
//     switch (objDays[key]){
//         case "monday":
//             monday++;
//             break;
//         case "tuesday":
//             tuesday++;
//             break;
//         case "wednesday":
//             wednesday++;
//             break;
//         case "thursday":
//             thursday++;
//             break;
//         case "friday":
//             friday++;
//             break;
//         case "saturday":
//             saturday++;
//             break;
//         case "sunday":
//             sunday++;
//             break;
//     }
//
// }
// console.log('monday' + '' +monday)
// console.log('tuesday'+ '' + tuesday)
// console.log("wednesday"+ '' +wednesday)
// console.log('thursday' + '' + thursday)
// console.log('friday' + '' + friday)
// console.log('saturday' + '' + saturday)
// console.log('sunday' + '' + sunday)

// let arr = []
// let isContinue;
// let start = 5;
//
// while(start){
//     let value = prompt('Введите число 0 или 1');
//     let number = parseInt(value);
//     start--
//     if(isNaN(number) || !(number == 1 || number == 0)){
//         alert("вы ввели что-то не так, попробуйте снова")
//         continue;
//     }
//
//     arr.push(number)
//     isContinue = confirm('Добавить еще число?')
//     if (isContinue){
//         continue;
//     }
//     else{
//         alert('вы закончили!')
//         start = false;
//         alert(parseInt( arr.join(''),2))
//     }
//
// }