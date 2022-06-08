/* TITLE
Sorting: Bubble Sort

URL
https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

INSTRUCTIONS
Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
    
}
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
First Element: firstElement, where  is the first element in the sorted array.
Last Element: lastElement, where  is the last element in the sorted array.
Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

Example

swap    a       
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]
The steps of the bubble sort are shown above. It took  swaps to sort the array. Output is:

Array is sorted in 3 swaps.  
First Element: 1  
Last Element: 6  

*/

function countSwaps(a) {
    let isSorted = false
        let count = 0
        while(!isSorted){
            isSorted = true
        for(let i = 0; i < a.length-1; i++){
            if(a[i] > a[i+1]){
                let temp = a[i+1]
                a[i+1] = a[i]
                a[i] = temp
                count++
                isSorted = false
            }
            
        }}
        console.log(`Array is sorted in ${count} swaps.`)
        console.log(`First Element: ${a[0]}`)
        console.log(`Last Element: ${a[a.length-1]}`)
    
    }

    //further optimized

    function countSwaps(a) {
        let isSorted = false
        let lastUnsorted = a.length-1
            let count = 0
            while(!isSorted){
                isSorted = true
            for(let i = 0; i < lastUnsorted; i++){
                if(a[i] > a[i+1]){
                    let temp = a[i+1]
                    a[i+1] = a[i]
                    a[i] = temp
                    count++
                    isSorted = false
                }
                
            } lastUnsorted--
            }
            console.log(`Array is sorted in ${count} swaps.`)
            console.log(`First Element: ${a[0]}`)
            console.log(`Last Element: ${a[a.length-1]}`)
        
        }