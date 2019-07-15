function GetLeastNumbers_Solution(input, k)
{
    // write code here
    input.sort(function(a,b){
        return a-b
    })
    return input.splice(0,k)
}
console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],10))

