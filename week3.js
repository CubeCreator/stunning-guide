//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
ages = [3, 9, 23, 64, 2, 8, 28, 93]
    //1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
        //•	Do not use numbers to reference the last element, find it programmatically, 
        //•	ages[7] – ages[0] is not allowed!
        console.log(ages[ages.length - 1] - ages[0])
    //1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
        ages.push(19)
        ages.push(56)
        console.log(ages[ages.length - 1] - ages[0])
    //1c.	Use a loop to iterate through the array and calculate the average age. 
        let totalamount = 0
        for (i = 0; i < ages.length - 1; i++)
            totalamount += ages[i]
        averageAge = totalamount / ages.length - 1
        console.log("The average age is " + averageAge)


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    //2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
    let totalLetters = 0
    for (i = 0; i < names.length - 1; i++) {
        totalLetters += names[i].length
    }
    averageLetters = totalLetters / names.length - 1
    console.log("The average letters per name is " + averageLetters)
    //2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
    let CombinedNames = ""
    for (i = 0; i < names.length; i++) {
        CombinedNames += names[i] + " "
    }
    console.log(CombinedNames)
//3.	How do you access the last element of any array?
console.log(names[names.length - 1])
//4.	How do you access the first element of any array?
console.log(names[0])
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    //For example:
    //namesArray = ["Kelly", "Sam", "Kate"] //given this array
    //nameLengths = [5, 3, 4] //create this new array
    nameLengths = []
    for (i = 0; i < names.length; i++) {
        nameLengths[i] = names[i].length
    }
    console.log(nameLengths)
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
    let totalLength = 0
    for (i = 0; i < names.length; i++) {
        totalLength += names[i].length
    }
    console.log(totalLength)
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
var words = 'Hello'
var n = 3
    function repeatWords (words, n) {
        console.log(words.repeat(n))
        return words.repeat(n)
    }
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
    //•	The full name should be the first and the last name separated by a space.
var firstName = "Simon"
var lastName = "Lucas"
    function fullNaming (firstName, lastName) {
        console.log(firstName + " " + lastName)
        return firstName + " " + lastName
    }
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var array1 = [24, 8, 17, 44, 12, 1]   
    function numberSum (array1) {
        let numberAmount = 0
        for (i = 0; i < array1.length - 1; i++) {
            numberAmount += array1[i]
        }
        console.log(numberAmount)
        if (numberAmount > 100) {
            console.log(true)
            return true
        }
        else {
            console.log(false)
            return false
        }
    }
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
var array2 = [49, 30, 11, 56, 22, 98, 5, 74]   
    function arrayAverage (array2) {
        let numberAmount = 0
        for (i = 0; i < array2.length - 1; i++){
            numberAmount += array2[i]
        }
        numberAmount = numberAmount / array2.length - 1
        console.log(numberAmount)
    }
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    function twoArrayCompare (array3, array4) {
        let firstArrayCounter = 0
        let secondArrayCounter = 0
        for (i = 0; i < array3.length; i++) {
            firstArrayCounter += array3[i]
        }
        for (i = 0; i < array4.length; i++) {
            secondArrayCounter += array4[i]
        }
        console.log(firstArrayCounter)
        console.log(secondArrayCounter)
        if (firstArrayCounter / array3.length - 1 > secondArrayCounter / array4.length - 1)
            console.log(true)
            return true
        console.log(false)
        return false
        
    }
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
    function willBuyDrink (isHotOutside, moneyInPocket) {
        if (isHotOutside = true && moneyInPocket > 10.50){
            console.log(true)
            return true
        }
        else {
            console.log(false)
            return false
        }

    }
//13.	Create a function of your own that solves a problem. 
    //•	In comments, write what the function does and why you created it.
    
    //Goal: Subtract the value of an array element by another array element and make it part of another array
    function subtractionMethod (array3, array4) {
        //declaring the new array and setting it to empty
        let array5 = []
        //loop to subtract the array elements NOTE: This may not work that well if the arrays are different lengths
        for (i = 0; i < array3.length - 1 && i < array4.length - 1; i++) {
            array5[i] = array3[i] - array4[i]
        }
        console.log(array5)
        return array5
    }
