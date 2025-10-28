// Method 1 
// brute force method 

// function twoSum(N, target, arr){
//     var N = 4;
//     var taregt = 9;
//     var arr = [2, 7, 11, 15];
//     var sum = 0;
//     var isFound = false;
//     for(var i=0; i<N; i++){
//         for(var j=i+1; j<N; j++){
//             sum = arr[i]+arr[j];
//             if(sum==target)
//             {
//                 isFound = true;
//                 return console.log(i,j);
//             }
//             else
//             {
//                 isFound = false;
//             }
//         }
//     }
//     console.log(-1,-1);
// } 

//  var N = 4;
// var taregt = 9;
// var arr = [2, 7, 11, 15];

// twoSum(N, target, arr); 

//  function maxSum(N, k, arr){
//     var sum = 0;
//     var max = arr[0];
//     for(var i=0; i<N; i++){
//         for(var j=i+1; j<k; j++){
//             var num = arr[i]+arr[j];
//             sum+=num;
//             console.log(num , arr[i],arr[j]);
//             if(sum>max)
//             {
//                 max = sum;
//             }
//         }
//     }
//     console.log(max);
// } 




function dayOfWeeks(day, n) {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // let days = []
    let weeks = {};
    for(let i=0; i<week.length; i++){
        let x = week[i];
        if(week == undefined) week[x] = i;
        else week[x] += 1;
        for(k in week){
            let ans = (week[k]+n)%7; 
            }
            if(k === day){
            if(ans > 7) ans % 7;
            console.log(ans)
        }
    }
    
}


let day = "sunday";
let n = 5
console.log(dayOfWeeks(day, n))


// use of map filter reduce

const users = [
   { name: "Ram", age: 23},
   {name: "Mohan", age: 33},
   {name: "Jagat", age: 23},
   {name: "Priya", age: 33},
   {name: "Meena", age: 56},
   {name: "Seema", age: 21},
]
    
const countAge = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] == ++acc[curr.age]
    }else{
        acc[curr.age] = 1;
    }
    return acc
},{})


// const FindName =users.filter((el) => {
//     if(el.age < 30) return el.name
// }).map((i) => i.name)
// console.log(FindName)

// const UserName = users.reduce((acc, curr) => {
//     if(curr.age < 30){
//         acc.push(curr.name);
//     }
//     return acc
// }, [])

// console.log(UserName)

let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

const UserName = student.reduce((acc, curr) => {
    acc+=curr.marks;
    return acc
}, 0)


const calMarks = student.reduce((acc, curr) => {
    
    if(curr.marks > 60) acc += curr.marks
    else if(curr.marks < 60){
        console.log(acc, curr.marks, "before")
        acc+= curr.marks+20
        console.log(acc, curr.marks)
    }
    return acc
    
}, 0)
console.log(calMarks)

const totalMarks=student.map((stu)=>{
    if(stu.marks<60){
        stu.marks+=20;
    }
    return stu;
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0);
console.log(totalMarks);
