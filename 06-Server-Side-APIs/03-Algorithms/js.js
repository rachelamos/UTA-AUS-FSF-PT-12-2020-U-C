// let grades = [80, 77, 88, 95, 68];

// let average = (grades) => grades.reduce((a, b) => a + b) / grades.length;
// console.log(average([1,2,3,4,5]));

var getAvg = function (numArr){
    var sum = 0;
    for (var i=0; i <numArr.length; i++) {
        sum += numArr[i];
    }
    var avg = sum / numArr.length;
    return avg;
};

console.log(getAvg([1, 4, 7]));