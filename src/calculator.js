function add(numbers) { 
    if(numbers == '') {
        return 0;
    }

    if(numbers.includes(',') || numbers.includes('\n')) {
        var numbersArray = numbers.split(/[\n,]+/);
        var delimiter = '&';

        //if the string has a custom delimiter
        if(numbers.includes('//')) {
            delimiter = numbers[2];
            var substr = numbers.substring(4);
            numbersArray = substr.split(/[\n,]+/);
        }

        return multipleNumbers(numbersArray, delimiter);

    }
    else {
        return singleNumber(numbers);
    }
}



function multipleNumbers(numbersArray, delimiter) {
    //test for negative numbers then call sum
    try { 
        testForNegative(numbersArray) 
    }
    catch(err) {
        return 'Negatives not allowed: ' + err;
    }

    return sum(numbersArray, delimiter);
}
function singleNumber(number) {
    //test for negative numbers then return number
    if(parseInt(number) > 1000) {
        return '';
    }
    try { 
        testForNegative(number) 
    }
    catch(err) {
        return 'Negatives not allowed: ' + err;
    }

    return parseInt(number);
}





function sum(numbersArray, delimiter) {
    var total = 0;
    var tmpArray = [];

    //add the numbers to total
    //subloop if index includes the custom delimiter
    for(var i=0; i < numbersArray.length; i++) {
        if(numbersArray[i].includes(delimiter)) {
            tmpArray = numbersArray[i].split(delimiter);
            for(var k=0; k < tmpArray.length; k++) {
                if(parseInt(tmpArray[k]) <= 1000) {
                    total += parseInt(tmpArray[k]);
                }
            }
        }
        else {
            if(parseInt(numbersArray[i]) <= 1000) {
                total += parseInt(numbersArray[i]);
            }
        }
    }
    return total;
}

function testForNegative(numbersArray) {
    //if only a single number
    if(!numbersArray.includes(',')) {
        if(parseInt(numbersArray) < 0) {
            throw numbersArray;
        }
    }

    //if there are multiple numbers
    var includesNegative = false;
    var negativeArray = [];

    for(var i=0; i < numbersArray.length; i++) {
        if(parseInt(numbersArray[i]) < 0) {
            includesNegative = true;
            negativeArray.push(parseInt(numbersArray[i]));
        }
    }
    if(includesNegative) {
        throw negativeArray;
    }
}


module.exports = add;