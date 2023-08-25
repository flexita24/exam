//task_1:switch\ case

//     weeks();
// function weeks() {
//     let a = 4;
//     switch (a) {
//         case 1:
//             console.log("Dushanba");
//             break;
//         case 2:
//             console.log("Seshanba");
//             break;
//         case 3:
//             console.log("Chorshanba");
//             break;
//         case 4:
//             console.log("Payshanba");
//             break;
//         case 5:
//             console.log("Juma");
//             break;
//         case 6:
//             console.log("Shanba");
//             break;
//         case 7:
//             console.log("Yakshanba");
//             break;
//         default:
//             console.log("Hafta kuni mavjud emas");
//     }
// }

// task_2:
// let a=5; 
// switch (a) {
//             case 1:
//                 console.log("yomon");
//                 break;
//             case 2:
//                 console.log("qoniqarsiz");
//                 break;
//             case 3:
//                 console.log("qoniqarli");
//                 break;
//             case 4:
//                 console.log("yaxshi");
//                 break;
//             case 5:
//                 console.log("a'lo");
//                 break;
//             default:
//                 console.log("xato");
//         }
//task_3:
/*let a=5;
switch(a){
    case 1:
        console.log("qish");
        break;
    case 2:
        console.log("qish");
        break;
    case 3:
        console.log("bahor");
        break;
    case 4:
        console.log("bahor");
        break;
    case 5:
        console.log("bahor");
        break;
    case 6:
        console.log("yoz");
        break;
    case 7:
        console.log("yoz");
        break;
    case 8:
        console.log("yoz");
        break;
    case 9:
        console.log("kuz");
        break;
    case 10:
        console.log("kuz");
        break;
    case 11:
        console.log("kuz");
        break;
    case 12:
        console.log("qish");
        break;
    default:
        console.log("qish");
    } */
// task_4:
/*let a=5;
switch(a){
    case 1:
        console.log("31");
        break;
    case 2:
        console.log("29");
        break;
    case 3:
        console.log("31");
        break;
    case 4:
        console.log("30");
        break;
    case 5:
        console.log("31");
        break;
    case 6:
        console.log("30");
        break;
    case 7:
        console.log("31");
        break;
    case 8:
        console.log("30");
        break;
    case 9:
        console.log("30");
        break;
    case 10:
        console.log("31");
        break;
    case 11:
        console.log("30");
        break;
    case 12:
        console.log("30");
        break;
    default:
        console.log("qish");
}*/


                            //task_5: type conversion vs type coersion

// type coersion - bilmagan holda parda ortida kompyuterni o'zi ma'lumot o'zgartiradi.
// type conversion - biz o'zimiz qo'limiz bilan o'zgartirgan ma'lumotda aytiladi


// //task_6: maksimum sonni topish
//     maxNum();
// function maxNum() {
//     let N = parseInt(prompt("Istalgan sonni kiriting: "));
//     let ones = N % 10;
//     let tens = Math.floor((N / 10) % 10);
//     let hundreds = Math.floor(N / 100);
//     let maxNum = ones * 100 + tens * 10 + hundreds;
//     console.log(Berilgan sonning maksimumi: ${maxNum} );
// }


//task_7: n butun sondagi raqamlar soni aniqlansin. 
// let n = parseInt(prompt("Istalgan sonni kiriting: "));
// let count = 0;
// while (n > 0) {
//   let digit = n % 10;
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(Ushbu sonning raqamlari soni: ${count});

//task_5: Function deb nimaga aytiladi va uning yaratilish qoidalari?

//Funksiya  - ma'lum bir vazifa bajarishga mo'ljallangan bo'lib, dastur kodining
//bir qismi hisoblanib uni qayta foydalanish imkoniyati bo'lib, kod bo'lagidir.
//Funsiyaning 3 xil turi bor:
                            // function expression
// const calcAge=function calcAge(birthYear,name){
//     const age=2023-birthYear;
//     return age;
//     const response=`My name is ${name} amd my age is ${birthYear}`
// }
// console.log(calcAge(2007,"Mehriniso"));
// console.log(calcAge(2008,"Mehriniso"));
// console.log(calcAge(2009,"Mehriniso"));

                            // function declaration
// function fruitProcessor(apples,oranges){
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }
// console.log(fruitProcessor(45,12));

                            // arrow function
// const findPrime=(n)=>{
//     for(let i=2;i<n;i++){
//         for(let j=2;j<=Math.sqrt(i);j++){
//             if(i%j!==0){
//                 return false;
//             }
//         }
//     }
//     console.log(findPrime(i));
//  }


                // Calling function
// const PieceFruit=function(fruit){
//     return fruit*4;
// }
// const fruitProcessor=function(apples,oranges){
//     const applePieces=PieceFruit(apples);
//     const orangePieces=PieceFruit(oranges);
//     const juice=`Juice with ${applePieces} and ${orangePieces} oranges`;
//     return juice;
// }
// console.log(fruitProcessor(5,6));

                // review function
// const calcAge=function(birthYear){
//     return 2023-birthYear;
// }
// const yearsUntilRetirement=function(birthYear){
//     const age=2023-birthYear;
//     const retirement=60-age;
//     return `You are ${age} yeas old and you have ${retirement} years until retirement`
// }
// console.log(yearsUntilRetirement(2007));

// Oddiygina funksiya 'function' kalit so'zi, undan keyin funksiyaga berilgan nom,
// qavs (), va qiyshiq qavs {} dan tashkil topadi. Qavs ichiga funksiyada ishlatidagidan
// parameter lar yoziladi (pastroqda parameter lar haqida), qiyshiq qavs {} ichi esa
// funksiyaning asosiy qismi hisoblanadi, va bajarilishi kerak bo'lgan buyruqlar shuning ichida yoziladi.