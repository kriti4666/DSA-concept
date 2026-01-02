function moveZeroes(arr) {
    let i = 0; 
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            i++;
        }
    }
    return arr;
}

// Example:
console.log(moveZeroes([0, 1, 0, 3, 12])); 
// Output: [1, 3, 12, 0, 0]


function TwoSum(arr, target){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j] == target){
            return true;
        }else if(arr[i]+arr[j] > target){
            j--; }else i++;
            }
    return false;
}

console.log(TwoSum(arr, 6))

function SecondLargest(arr){
    if(arr.length < 2) return arr[i]
    let max = -Infinity;
    let secMax = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            secMax = max;
            max = arr[i];
        }
        else if(arr[i] > secMax && arr[i] != max){
            secMax = arr[i];
        }
    }
    return secMax;
    
}

console.log(SecondLargest(arr))


// Find the index of 1st Second Largest Element

// let arr = [10, 5, 18, 20, 2, 18]
// Output: 18

function firstSecondLargest(arr){
    if(arr.length < 2) return null;
    let max = 0;
    let secMax = 0;
    let secIndex = -1
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            secMax = max;
            max = arr[i];
            secIndex = arr.indexOf(secMax)
        }
        else if(arr[i] > secMax && arr[i] != max){
            secMax = arr[i];
            secIndex = i
        }
    }
    return secIndex == -1? null: secIndex;
    
}

console.log(firstSecondLargest(arr))

// Check if Two Arrays are Equal

// let arr1 = [1, 2, 3]
// let arr2 = [3, 8, 1]
// Output: 18

function TwoArr(arr1, arr2){
    let i = 0;
    for(let j=arr2.length-1; j>=0; j--){
        if(arr1[i] == arr2[j]){
            i++
        }
        else{
            return false
        }
    }
    return true
}

console.log(TwoArr(arr1, arr2))


// chunk([1, 8, 3, 4], 2) 
// --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2)
// --> [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// --> [[1, 2, 3], [4, 5, 6], [7, 8]]

function chunk(arr, size) {
    const result  = [];
    let index  = 0;

    while(index < arr.length){
    console.log("1st....",result, index)
        
        result.push(arr.slice(index,index+size));
        index += size;
    console.log("2nd.....",result, index)
    }
    console.log(result)
}

chunk([1, 2, 3, 4], 2)

