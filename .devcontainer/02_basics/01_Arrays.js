const myArr = [0,1,2,3,4,5]
const myHeroes = ["padman" , "batman"]

const myArr2 =new Array(1,2,3,4)
console.log(myArr[1]);

//myArr.push(6)
//myArr.pop()
//myArr.unshift(9)
//myArr.shift()
//console.log(myArr);

const newArr=myArr.join()//makes our type string and binds thev array
console.log(myArr);
console.log(typeof newArr);

//slice,splice
console.log("A", myArr);
const myn1=myArr.slice(1,3) //not include 3 
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3) //include 3
console.log("c", myArr);
console.log(myn2);

