//--------------------Some Every Exercise--------------------//

//hasOddNumber//
function hasOddNumber(array){
    array.some(function(value){
        return value % 2 !==0;
    });
}

//hasAZero//
function hasAZero(number){
    return number.toString().split("").some(function(value){
        return value === "0";
    });
}

//hasOnlyOddNumbers//
function hasOnlyOddNumbers(array){
    return array.every(function(value){
        return value % 2 !== 0;
    });
}

//hasNoDuplicates//
function hasNoDuplicates(array){
  return array.every(function(value){
    return array.indexOf(value) === array.lastIndexOf(value);
  });
}

//hasCartainKey//
function hasCertainKey(array, key){
  return array.every(function(value){
    return key in value;
  });
}

//hasCertainValue
function hasCertainValue(array, key, lookedForValue){
  return array.every(function(value){
    return value[key] === lookedForValue;
  });
}