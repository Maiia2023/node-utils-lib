# getDifference

## Function description:

The function returns the result of an operation __subtraction__ on two natural numeric arguments which are __> 0__.  

It checks if the arguments match the __number__ type.  
In case they are, function returns a __number__, otherwise returns __undefined__.  

The result can be either a __positive integer__ or __undefined__.

*Also included a check that minuend number is greater than the number being subtracted*.  

__Data for tests:__

``````
console.log(getDifference('5', 5)); // undefined
console.log(getDifference(5, true)); // undefined
console.log(getDifference(-5, 5)); // undefined
console.log(getDifference(5, -5)); // undefined
console.log(getDifference(3, 5)); // undefined
console.log(getDifference(5, 3)); // 2
console.log(getDifference(5, 5)); // 0
```
