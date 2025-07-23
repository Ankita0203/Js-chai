//Dates

let myDate = new Date() //myDate is an object here..
//console.log(myDate.toString()); //toString isw a method
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let mycreatedDate =  new Date(2023 ,  0 , 23)
//letmycreatedDate=new Date(2023 , 0 ,23 , 5,3) 0 means january month in js
//console.log(mycreatedDate.toLocaleString());
let mycreatedDate =  new Date("01-14-2025")

let myTimeStamp=Date.now()//give todays date
//console.log(myTimeStamp);
//console.log(mycreatedDate.getTime()); it will give time in miliseconds
//console.log(Math.floor(Date.now()/1000));will not give time decimal point

newDate.toLocaleString('Default', {
    weekday:"long",
})