//Task N1
function theYoungestUser(users){
    users = [{name: "Temo", age: 25}, {name: "Lasha", age: 21}, {name: "Ana", age: 28}];
    let min = 30;
    let ans = "";
    for(let i = 0; i < users.length; i++){
        if(users[i].age < min){
           min = users[i].age;
           ans = users[i].name;
        }
    }

    return ans;
}

//Task N2
function newObject(user){
    let newUser = {};
    for(const fieldName in user){
        newUser[fieldName] = user[fieldName];
    }

    return newUser;
}

const users = [{name: "Temo", age: 25}, {name: "Lasha", age: 21}, {name: "Ana", age: 28}];
console.log(theYoungestUser(users));

const Object = {
    name: "Keso",
    age: 19,
    gender: "female"
}

console.log(newObject(Object));

//Task 3
let a = parseInt(Math.random()*10) + 1;
let b = parseInt(Math.random()*10) + 1;

while(a != 3 && b != 3){
    a = parseInt(Math.random()*10) + 1;
    b = parseInt(Math.random()*10) + 1;
    console.log(a, b);
}

if(a == 3 && b == 3)
  console.log("TIE");
else if(a == 3)
  console.log("a is the WINNER!");
else if(b == 3)
  console.log("b is the WINNER!");
