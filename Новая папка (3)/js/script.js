// let inp = document.querySelector('input');
let btn = document.querySelector('button');
let p = document.querySelector('p');

const arr1 = [1, 1, 21, 2, 2, 4, 1, 5, 1, 5, 1, 2, 6, 22, 5, 1, 5, 6, 7, 2, 4, 5 ,5];

// 1 задача

// const newArr = Array.from(new Set(arr1));
// console.log(newArr);


// const deleteDouble = (arr) => {
//     const newArr = [];
//     arr.forEach(num => {
//         if(newArr.indexOf(num) == -1){
//             newArr.push(num);
//         }
//         // console.log(newArr.indexOf(num));
//     })
//     console.log(newArr);
// }

// deleteDouble(arr1);


// 2 задача

// const deleteDoubleThree = (arr) => {
//     const newArr = [];
//     arr.forEach(num => {
//         let i = 0;
//         for(let k = 0; k < newArr.length; k++){
//             if(num == newArr[k]){
//                 i++;
//             }
//         }
//         if(i < 3){
//             newArr.push(num);
//         }
        
//     })
//     console.log(newArr)
// }
// deleteDoubleThree(arr1);



// 3 задача

// const deleteNear = (arr) => {
//     for(let i = 0; i < arr1.length - 1; i++){
//         if(arr[i] == arr[i + 1]){
//             arr.splice(i,2)
//         }
//     }
//     console.log(arr)
// }

// deleteNear(arr1);