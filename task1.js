"use strict"

//Even number of zeroes and ones
let number=prompt("Enter the Number")

let len=number.length;

let count1=0;
let count2=0;

for(let x=0;x<len;x++){
    
    if(number[x]== '1')
    {
        count1++;
    }
    
    if(number[x]=='0')
    {
        count2++;
    }
}

if(count1%2==0&&count2%2==0)
document.write("Your string is correct")
else
document.write("Your string is incorrect")

