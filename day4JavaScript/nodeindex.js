const games = ["football", "basketball", "pubg"]
const person1 ={
    name : "Binit",
    Rolno : 40,
    any : games,
    address: {
        district: "gandaki",
        city : "kathmandu",
        ward : 41,
    }
}
const person2 ={
    name : "Prasanna",
    Rolno : 10,
    any : games,
    address: {
        district: "kaski",
        city : "pokhara",
        ward : 11,
    }
}
const employee = [person1 , person2]
games.pop()
console.log(employee)