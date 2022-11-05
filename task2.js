"use strict"

//if start with zero have must another zero and if start with one have must another one
let number=prompt("Enter the Number")

let len=number.length;
let append1=false;
let append2=false;

if(number[0]=='0'){
    append1=true;
    for(let x=1;x<len;x++){
        if(number[x]=='0'){
            document.write("Your string is correct");
            append2=true;
        }
    }
    if(append2==false){
        document.write("Your string is incorrect");
    }
}


if(append1==false){
    if(number[0]=='1'){
        append1=true;
        for(let x=1;x<len;x++){
            if(number[x]=='1'){
                document.write("Your string is correct");
                append2=true;
            }
        }
        if(append2==false){
            document.write("Your string is incorrect");
        }
    }
}


if(append1==false)
document.write("Your string is incorrect");