# Function getSpliting

## function description

The function returns the result of performing a mathematical division operation on two __positive integer arguments__.

The function checks if its arguments are type of __number__, and
if yes it returns the __number__, otherwise it returns undefined.

The result can be either a __positive integer__ or __undefined__.

There is a check that the divisible number
greater than the divisor.

### Examples:

```

сonsole.log(getSpliting('5', 5)) // undefined
console.log(getSpliting(5, true)) // undefined
console.log(getSpliting(-5, 5)) // undefined
console.log(getSpliting(5, -5)) // undefined
console.log(getSpliting(5, 0)) // undefined
console.log(getSpliting(0, 5)) // undefined
console.log(getSpliting(5, 3)) // undefined
console.log(getSpliting(5, 5)) // 1
console.log(getSpliting(15, 5)) // 3
```
