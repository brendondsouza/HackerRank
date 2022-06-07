/* TITLE
Two strings

URL
https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

INSTRUCTIONS
Given two strings, determine if they share a common substring. A substring may be as small as one character.

Example


These share the common substring .

These do not share a substring.

Function Description

Complete the function twoStrings in the editor below.

twoStrings has the following parameter(s):

string s1: a string
string s2: another string
Returns

string: either YES or NO
Input Format

The first line contains a single integer , the number of test cases.

The following  pairs of lines are as follows:

The first line contains string .
The second line contains string .


*/
function twoStrings(s1, s2) {
  let  map  = {}
  for(let i = 0; i < s1.length;i++){
      map[s1[i]] = true
  }
  for(let j = 0; j < s2.length; j++){
       if(map[s2[j]] === true) return 'YES'  
      }
      return "NO" 
}