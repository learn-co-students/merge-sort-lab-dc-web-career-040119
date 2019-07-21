const findMinAndRemoveSorted = (arr) => {
    return arr.shift()
}

const merge = (left, right) => {
    const sorted = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...right, ...left]
}

const mergeSort = (arr) => {
    const left = arr.slice(0, arr.length/2)
    const right = arr.slice(arr.length/2)

    if (arr.length > 1) {
        return merge(mergeSort(left), mergeSort(right))
    } else {
        return arr
    }
}

mergeSort([4,5,7,1,4,3])