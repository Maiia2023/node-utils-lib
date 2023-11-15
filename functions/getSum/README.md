# getSum

## Function description:

The function returns the result of an operation of __addition__ on two natural numeric arguments which are __> 0__.  

The function checks if the arguments match the __number__ type.  
In case they are, function returns a __number__, otherwise returns __undefined__.  

The result can be either a __positive integer__ or __undefined__.  

__Data for tests:__  

```
console.log(getSum('5', 5)) // undefined
console.log(getSum(5, true)) // undefined
console.log(getSum(-5, 5)) // undefined
console.log(getSum(5, -5)) // undefined
console.log(getSum(5, 0)) // undefined
console.log(getSum(5, 1.5)) // undefined
console.log(getSum(5, 5)) // 10
```
