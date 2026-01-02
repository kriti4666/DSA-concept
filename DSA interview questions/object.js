const input1 = {a:12,b:10,d:10,r:23};
const input2 = {d:10,b:1,a:12};
// output >> {a:12,d:10}

function findMatch(obj1,obj2){
    const output = {};
    for(let key in obj1){
        if(obj1[key] == obj2[key]){
            output[key] = obj1[key];
        }
    }
    return output
}

console.log(findMatch(input1,input2));


