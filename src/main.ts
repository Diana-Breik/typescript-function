const arrayOfNumbers: number[] = [1,2,3,4,5]

const newArrayAfterMapFunction = arrayOfNumbers.map((number)=>
{return  number*2})
console.log(arrayOfNumbers)
console.log(newArrayAfterMapFunction)

const arrayOfWords: string[]= ["Hello","Hallo","Merhaba","Bonjour"]
const filteredArray = arrayOfWords.filter((word): boolean =>{return  word.length > 5})
console.log(arrayOfWords)
console.log(filteredArray)


const arrayOfNumbers2: number[] = [1,4,5]
const sum = arrayOfNumbers2.reduce((accumulator,currentValue)=>{return accumulator + currentValue},0)
console.log(sum)

console.log("--------")

const arrayOfNumbers3: number[] = [1,2,13]
const result = arrayOfNumbers3.some((number)  =>{return number > 10})
if (result) {
    console.log("Mindestens eine Zahl im Array ist größer als 10.")
} else {
    console.log("Keine Zahl im Array ist größer als 10.")
}