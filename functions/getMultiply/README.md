# function getMultiply

## Function description:

The function returns the result of the mathematical
multiplication operations on two natural numeric arguments that are > 0.

It checks its arguments against type number and
if the types match, then return a __number__. 

If at least one type does not match, then
return __undefined__.

The result can be either a positive __integer__ or __undefined__.

### Examples:

```
console.log(getMultiply('5', 5)) // undefined
console.log(getMultiply(5, true)) // undefined
console.log(getMultiply(-5, 5)) // undefined
console.log(getMultiply(5, -5)) // undefined
console.log(getMultiply(5, 0)) // undefined
console.log(getMultiply(0, 5)) // undefined
console.log(getMultiply(5, 5)) // 25
```