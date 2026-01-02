const input1 = "And then I will make a while loop condition. So I have basically checked here if the values of ith index and jth index will sum up to the target, then"
const bannedWord = "will"

function findRepeatedChar(str, bannedWord){
    let words = str.replace(",", "").toLowerCase().split(" ");
    const obj = {};
    let res = {};
    for(let i=0; i<words.length; i++){
        obj[words[i]] == undefined ? obj[words[i]] = 1: obj[words[i]]+=1 
    }
    for(let key in obj){
        if(obj[key] > 1 && key !== bannedWord){
            res[key] = obj[key]
        }
    }
    return res
}

console.log(findRepeatedChar(input1, bannedWord))


//  Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"s.
let str = "apple 1231111";

function maxChar(str) {
    let obj = {};
    let max = -Infinity;
    let maxChar = ""
    let words = str.replace(" ", "").toLowerCase().split("");
    for(let i=0; i<words.length; i++){
        obj[words[i]] == undefined?  obj[words[i]]=1: obj[words[i]]+=1
    } 
    for(let key in obj){
        if(obj[key] > max){
            maxChar = key;
            max = obj[key]
        }
    }
    return maxChar
}
console.log(maxChar,":", max);

// Solution: 1

function capitalize(str){
  let letters = str.toLowerCase().split(" ");
  const res = []
  for(let letter of letters){
    let char = letter[0].toUpperCase();
    res.push(letter.replace(letter[0], char))
  }
  console.log(res.join(" "));
}
capitalize('a short sentence')

// Solution: 1
vowels('Hi There!') 
vowels('Why do you ask?') 
// --> 4
vowels('Why?') 
// --> 0

function vowels(str){
    let vowel = ["a","e","i", "o", "u"];
    let word = str.toLowerCase().split(" ").join("")
    let count = 0;
    for(let ele of word){
        if(vowel.includes(ele)) count++
    }
    console.log(word,count)
}