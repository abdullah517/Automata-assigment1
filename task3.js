"use strict"


let number=prompt("Enter the String")

if(number[0]=='a'||number[0]=='b'){
    if(number[1]=='a'||number[1]=='b'||number[1]=='c'){
    document.write("Your string is incorrect")
    }
    else{
        document.write("Your string is correct")
    }
}



else if(number[0] == 'c')
{
    
    if(number[1] == 'b' || number[1] == 'c')
    {
        if(number[1] == 'a' || number[1] == 'b' || number[1] =='c'){
            document.write("Your string is incorrect")
        }
        else{
            document.write("Your string is correct") 
        }
    
    }
}

else{
    document.write("Your string is incorrect")
}