function add(numbers) { 
    if(numbers == '') {
        return 0;
    }

    if(numbers.includes(',') || numbers.includes('\n')) {
        var numbersArray = numbers.split(',');
        return multipleNumbers(numbersArray);

    }
    else {
        return singleNumber(numbers);
    }
}


function multipleNumbers(numbersArray) {
    //test for negative numbers then call sum
    try { 
        testForNegative(numbersArray) 
    }
    catch(err) {
        return 'Negatives not allowed: ' + err;
    }

    return sum(numbersArray);
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




function sum(numbersArray) {
    var total = 0;
    var tmpArray = [];

    //add the numbers to total, subloop if index includes \n
    for(var i=0; i < numbersArray.length; i++) {
        if(numbersArray[i].includes('\n')) {
            tmpArray = numbersArray[i].split('\n');
            for(var j=0; j < tmpArray.length; j++) {
                if(parseInt(numbersArray[j]) <= 1000) {
                    total += parseInt(tmpArray[j]);
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
    //if only a sigle number
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
            negativeArray.push(numbersArray[i]);
        }
    }
    if(includesNegative) {
        throw negativeArray;
    }
}


module.exports = add;