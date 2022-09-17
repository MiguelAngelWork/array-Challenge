function alwaysHungry(arr) {
    let found=0
    for (var i=0; i<arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
            found++;
        }
    }
    if (found == 0){
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr,cutoff){
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
         if (arr[i] > cutoff ){
            filteredArr.push(arr[i]);
         }
    }

    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]"

function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum/arr.length+1
    var count = 0
    for (var i=0; i<arr.length; i++){
        if (arr[i]<avg){
            count++;
        }
    }

    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    newarr=[]; 

    for (var i=0; i<arr.length; i++) {
         newarr.push(arr[arr.length-i-1]);
    }
   newarr.push(arr[0])
    return newarr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    
    for (var i=0; i<n-2; i++){
    let lenVar = (fibArr.length)-1;
    let newNum=fibArr[lenVar]+fibArr[lenVar-1];
    fibArr.push(newNum);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 