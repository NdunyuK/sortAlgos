function bubble(arr){
    let swapped = true

    do{
        swapped = false
        for(let i=0; i<arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr

}

console.log(bubble([8, 20, -2, 4, -6]))
console.log(bubble([20, 8, 4, -2, -6]))

//Big-O - O(n^2)


function insertion(arr){
    for(let i=1; i < arr.length; i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]
            j = j-1

        }
        arr[j+1] = numberToInsert

        
    }
    return arr
}

console.log(insertion([20, 8, -2, 4, -6]))
console.log(insertion([ -6, -2, 4, 8, 20 ]))
console.log(insertion([ 20, 8, 4, -2, -6 ]))

//Big-O - O(n^2)


function quick(arr) {
    if(arr.length<2){
        return arr
    }
    console.log(arr.length - 1)
    let pivot = arr[arr.length - 1]
    let leftArr =[]
    let rightArr = []
    for (let i=0; i< arr.length - 1; i++){
        if (arr[i] < pivot){
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return [...quick(leftArr), pivot, ...quick(rightArr)]

}

console.log(quick([20, 8, -2, 4, -6]))

// Worst case - O(n^2)
// Avg case - O(nlogn)


function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    let midpoint = Math.floor(arr.length/2)
    let left = arr.slice(0, midpoint)
    let right = arr.slice(midpoint)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    const sortedArr = []
    while(left.length && right.length) {
        if(left[0] <= right[0]){
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]

}

console.log(mergeSort([20, 8, -2, 4, -6]))

//Big-O - O(nlogn)