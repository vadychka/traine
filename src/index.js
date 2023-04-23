

function flutten (arrs) {
const res = []

function recursionArr (arr){

    for(let j = 0; j < arr.length; j++){
        if(typeof(arr[j]) === 'object'){
            return recursionArr(arr[j])
        }
        if(typeof(arr[j]) === 'number'){
            res.push(arr[j])
        }
    }
}

for(let i = 0; i < arrs.length; i++){
    if(typeof(arrs[i]) === 'object'){
        recursionArr(arrs[i])
    }
}

return res
}

console.log(flutten([[1],[[2,3]], [[[4]]]]))