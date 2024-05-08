// function Odds(n) {
//     var result = [];
//     var Number = 1;
    
//     for (var i = 0; i < n; i++) {
//       result.push(Number);
//       Number += 2;
//     }
//     return result;
//   }
//   console.log(Odds(5)); 
  



  // function Reverse(arr) {
  //   var Numbers = [];
  
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       Numbers.push(arr[i]);
  //     }
  //   }
  //   Numbers.reverse();
  
  //   return Numbers;
  // }
  
  // var arr = [4, 5, 7, 8, 6, 9];
  // console.log(Reverse(arr)); 


  
  // function pushArray(arr) {
  //   var pushArray = [];
  //   var n = arr.length;
  
  //   for (var i = 0; i < n; i++) {

  //     if (i % 2 === 0) {
  //       pushArray.push(arr[i / 2]);
  //     } else {
  //       pushArray.push(arr[n - Math.floor(i / 2) - 1]);
  //     }
  //   }
  //   return pushArray;
  // }
  
  // var arr = [4, 5, 7, 8, 6, 9];
  // console.log(pushArray(arr)); 


  
  // function Sum(arr, K, L) {
  //   var sum = 0;
    
  //   for (var i = K; i <= L; i++) {
  //     sum += arr[i];
  //   }
    
  //   return sum;
  // }
  
  // var arr = [1, 6, 9, 5, 8, 10, 15];
  // console.log(Sum(arr, 2, 5)); 

  
  // function getSingleArr(arr) {
  //   var singleArr = [];
  //   var frequencyMap = {};
  
  //   for (var i = 0; i < arr.length; i++) {
  //     var num = arr[i];
  //     if (frequencyMap[num]) {
  //       frequencyMap[num]++;
  //     } else {
  //       frequencyMap[num] = 1;
  //     }
  //   }
  
  //   for (var key in frequencyMap) {
  //     if (frequencyMap[key] === 1) {
  //       singleArr.push(parseInt(key));
  //     }
  //   }
  
  //   return singleArr;
  // }
  
  // var arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
  // console.log(getSingleArr(arr)); 
  

//   function separateTruthyFalsy(inputArray) {
//     const truthyArray = [];
//     const falsyArray = [];

//     inputArray.forEach(item => {
//         if (item) {
//             truthyArray.push(item);
//         } else {
//             falsyArray.push(item);
//         }
//     });

//     return {
//         truthy: truthyArray,
//         falsy: falsyArray
//     };
// }

// const inputArray = [10, false, "", "Abdulaziz", null];
// const result = separateTruthyFalsy(inputArray);

// console.log("Truthy:", result.truthy);
// console.log("Falsy:", result.falsy);


// function MaxIndex(arr) {
//   if (arr.length < 3) {
//       return "Not enough elements to find a local maximum";
//   }

//   for (let i = arr.length - 2; i >= 0; i--) {
//       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//           return i;
//       }
//   }

//   return "No local maximum found";
// }

// const arr = [1, 3, 5, 4, 2];
// console.log(MaxIndex(arr));