new Set([1,1,2,2,3,4]) // returns [1,2,3,4]

// [...new Set("referee")].join("")

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 
// {[1,2,3], true}, {[1,2,3], false}


function hasDuplicate(arr){
    const arrSet = new Set(arr)

    if (arrSet.size != arr.length){
        return false
    }

    return true
};

function isVowel(char){
    return "aeiou".includes(char);
}
  
function vowelCount(str){
    const vowelMap = new Map();

    for(let char of str){
        let lowerCaseChar = char.toLowerCase();

        if(isVowel(lowerCaseChar)){

            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } 
            else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}