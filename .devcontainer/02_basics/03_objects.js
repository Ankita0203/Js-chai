const mySym =Symbol("key1")
const JsUser={
    name:"Ankita",
    "full name": "Ankita Marik",
    [mySym]:"mykey1",
    age: 22,
    location:Bbsr,
    email:"ankita@googkle.com",
    isloggedIn :false,
    lastloginDays:["Monday","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
//console.log("JsUser["full name"])
// console.log(JsUser[mySym])


// JsUser.email="Ankitya@chatgpt.com"
// object.freeze(JsUser)
// JsUser.email="Ankita@microsoft.com"
// console.log(JsUser);