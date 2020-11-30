//Function that takes an integer and returns whether it’s a repeated one or not print true if it’s repeated else print false
var y="434";
var z;
if(y.length==2)
{
    if(y[0]==y[1])
    {
        z="true";
    }
    else
    {
        z="false";
    }
    alert(z);
}
else
{
    for(var i=y.length-2;i<y.length-1;i++)
    {
        if(y[i]==y[i+1])
        {
            z="true";
        }
        else
        {
            z="false";
        }
    }
    alert(z);
}

//Function that takes an array of numbers and returns the second largest number
var array = [23, 21, 40, 34, 67, 10];
var tempArray = […new Set(arr)].slice(0); 
var secondLargestValue = tempArray.sort()[tempArray.length - 2];
var indexOfLargestValue = array.indexOf(secondLargestValue);
console.log(secondLargestValue);

//Function that squares every digit of a number
function squareDigits(num){
    return Number(('' + num).split('').map(function(val) { return val*val;}).join(''));
}
squareDigits(4444)
