/* TITLE
2D Array - DS

URL
https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
INSTRUCTIONS
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example

	Submissions	Leaderboard	Discussions	Editorial
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

Example


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :

0 4 3
  1
8 6 6

*/
function hourglassSum(arr) {
    let max = -63
 for(let step1 = 0; step1 < 4; step1++){
     for(let step2 = 0; step2 < 4; step2++){
         let sum = arr[step1][step2] + arr[step1][step2+1] + arr[step1][step2+2] + arr[step1+1][step2+1] +arr[step1+2][step2] + arr[step1+2][step2+1] + arr[step1+2][step2+2]
         
       max = Math.max(max,sum)
     } 
     } return max
     
     
//  } return max
}