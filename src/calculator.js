function add(numbers) { 
    if(numbers == '') {
        return 0;
    }

    if(numbers.includes(',')) {

        var numbersArray = numbers.split(',');
        return parseInt(numbersArray[0]) + parseInt(numbersArray[1])


    }
    else {
        return parseInt(numbers);
    }
}


module.exports = add;