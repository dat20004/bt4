// const bienObject = {
//     firstName : "Nguyễn",
//     lastName : "Huynh",
//     age : 24,
//     job : "IT",
//     isTeacher : true,
//     skills : {
//         tenis : true,
//         football : false ,
//     }
// }
// console.log(Object.keys(bienObject))
// console.log(Object.values(bienObject))


// // // // Object sử dụng từ khoá {}
// // // // sử dụng từ khoá new Object()
// // // // sử dụng phương thức Static.= Object.create({})

// // // const dog = {}
// // // const cat = new Object()
// // // const lion = Object.create({})

// // // biến => có thể sử dụng String,[]

// // function person (nameProps,ageProps){
// //     this.name = nameProps
// //     this.age = ageProps
// //     this.changeName = function(nameFunc){
// //     this.name = nameFunc;
// //     }
// // }
// // let p = {
// //     name :"Huynh",
// //     age : 24,
// // }
// // p.name = "Dũng"
// // // console.log(p)

const favoriteArray = [
    {
        name : "Math",
        favorite : 10,
        description : "So hard",
        advantage : "Make yourself inteligent",
    },
    {
        name : "Music",
        favorite : 9,
        description : "So easy",
        advantage : "Make yourself confident",
    },
    {
        name : "physical",
        favorite : 8,
        description : "So hard",
        advantage : "Make yourself cazy",
    },
    {
        name : "IT",
        favorite : 11,
        description : "So hard",
        advantage : "Make yourself much money",
    }
]
//console.log(favoriteArray[3].favorite)

let facoriteMax = -Infinity
let name = ""
for(let i = 0 ; i < favoriteArray.length ; i++){
    if(favoriteArray[i].favorite > facoriteMax){
        facoriteMax = favoriteArray[i].favorite
        name = favoriteArray[i].name
    }
}
console.log(name)


