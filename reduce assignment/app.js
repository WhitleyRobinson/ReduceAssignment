// extractValue

function extractValue(arr, key) {
    return arr.reduce(function(acc, next) {
        acc.push(next[key]);
        return acc;
    },[]);
}

//const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

//const result = extractValue(arr, 'name')
//console.log(result)

//vowelCount

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next) {
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1) {
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

//const result  = vowelCount('Elie')
//const result  = vowelCount('Tim')
//const result  = vowelCount('Matt')
//const result  = vowelCount('hmmm')
//const result  = vowelCount('I am awesome and so are you!')

//console.log(result)

// addKeyAndValue

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, arr);
}

//const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

//const result = addKeyAndValue(arr, 'title', 'Instructor')
//console.log(result)

// partition

function partition(arr, cb) {
    return arr.reduce(function(acc, next) {
        if(cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}

//function isEven(val) {
    //return val % 2 === 0;
//}

//const arr = [1,2,3,4,5,6,7,8];

//const result  = partition(arr, isEven)
//console.log(result)

function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

const result = partition(names, isLongerThanThreeCharacters)
console.log(result)