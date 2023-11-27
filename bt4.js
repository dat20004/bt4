// 1. Tạo một mảng chứa danh sách các môn học yêu thích của bạn và in chúng ra.
// const favoriteArray = [
//     {
//         name : "Math",
//         favorite : 10,
//         description : "So hard",
//         advantage : "Make yourself inteligent",
//     },
//     {
//         name : "Music",
//         favorite : 9,
//         description : "So easy",
//         advantage : "Make yourself confident",
//     },
//     {
//         name : "physical",
//         favorite : 8,
//         description : "So hard",
//         advantage : "Make yourself cazy",
//     },
//     {
//         name : "IT",
//         favorite : 11,
//         description : "So hard",
//         advantage : "Make yourself much money",
//     }
// ]

// let facoriteMax = -Infinity
// let name = ""
// for(let i = 0 ; i < favoriteArray.length ; i++){
//     if(favoriteArray[i].favorite > facoriteMax){
//         facoriteMax = favoriteArray[i].favorite
//         name = favoriteArray[i].name
//     }
// }
// console.log(name)

// 3. Tạo một đối tượng person với các thuộc tính như tên, tuổi và địa chỉ, sau đó in ra chúng.

// const arrPerson = [
//     {
//         lastName : "Mạnh",
//         firstName : "Nguyễn",
//         midName : "Thế",
//         age : 24,
//         address : "Đông Anh",
//         girlFriendName : "Phượng",
//     },{
//         lastName : "Đạt",
//         firstName : "Nguyễn",
//         midName : "Thế",
//         age : 10,
//         address : "Long Biên",
//         girlFriendName : null,
//     },{
//         lastName : "Dũng",
//         firstName : "Nguyễn",
//         midName : "Thế",
//         age : 4,
//         address : "Cầu Giấy",
//         girlFriendName : null,
//     },{
//         lastName : "Duy",
//         firstName : "Nguyễn",
//         midName : "Thế",
//         age : 20,
//         address : "Phúc Thọ",
//         girlFriendName : null,
//     },{
//         lastName : "Tuấn",
//         firstName : "Nguyễn",
//         midName : "Thế",
//         age : 15,
//         address : "Ba Vì",
//         girlFriendName : null,
//     }
// ]
//     for(let i = 0;i<arrPerson.length;i++){
//         if(arrPerson[i].girlFriendName !== null){
//             console.log(arrPerson[i].firstName,arrPerson[i].midName,arrPerson[i].lastName)
//         }
//     }

//  10. Tạo một mảng chứa danh sách sản phẩm với mỗi sản phẩm có tên, giá và số lượng trong kho, sau đó tính tổng giá trị của các sản phẩm.

//     const arrproduct = [
//     {
//         name : "Bột giặt",
//         price : 10000,
//         count : 100,
//     },{
//         name : "Nước rửa chén",
//         price : 15000,
//         count : 100,
//     },{
//         name : "Thuốc diệt chuột",
//         price : 18000,
//         count : 100,
//     },{
//         name : "Giẻ lau",
//         price : 19000,
//         count : 100,
//     },{
//         name : "Phấn",
//         price : 18000,
//         count : 100,
//     }      
// ]
//     let USDollar = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//     });

//     let sum = 0
//     for(let i = 0 ; i < arrproduct.length ; i++){
//         let std = arrproduct[i].price * arrproduct[i].count
//         sum += std
//     }
//     console.log("Tổng tiền trong kho = ", USDollar.format(sum))

//     12. Tạo một đối tượng student với các thuộc tính như tên, điểm và địa chỉ, sau đó tính điểm trung bình của học sinh đó.

// const student = {
//    name : "Tuấn Anh",
//    scores : [
//     {
//         name : "Math",
//         score : 9,
//     },{
//         name : "Hoá",
//         score : 10,
//     },{
//         name : "Anh",
//         score : 6,
//     },{
//         name : "Văn",
//         score : 7,
//     },{
//         name : "Vật lý",
//         score : 10,
//     }],
//     adress : "Đông anh"
// }
// let sum = 0
// for(let i = 0; i < student.scores.length; i++){
//     sum+= student.scores[i].score
// }
// let     tb = sum/student.scores.length
// const checkScores = [{
//     minScoure : 9,
//     name : "Xuất sắc",
// },{
//     minScoure : 8,
//     name : "Giỏi",
// }
// ,{
//     minScoure : 6.5,
//     name : "Khá",
// },{
//     minScoure : 5,
//     name : "Trung bình",
// }]

// let max = -Infinity
// let hocLuc = "Yếu"
// for(let i = 0;i<checkScores.length;i++){
//     if(max<checkScores[i].minScoure && checkScores[i].minScoure<tb){
//         max = checkScores[i].minScoure
//         hocLuc = checkScores[i].name
//     }
// }
// console.log(hocLuc)

// 8. Tạo một đối tượng car với các thuộc tính như hãng xe, màu sắc và năm sản xuất, sau đó in ra chúng.

//    const car = {
//     branch : "BMW",
//     birthDate : 2023,
//     Objectcar :[
//         {
//             color : "red",
//             price : 3000,
//             count : 89,
//         },{
//             color : "black",
//             price : 2500,
//             count : 80,
//         },{
//             color : "gree",
//             price : 2600,
//             count : 82,
//         },{
//             color : "yellow",
//             price : 9000,
//             count : 20,
//         },{
//             color : "gray",
//             price : 2500,
//             count : 80,
//         }]
//    }

//    let Carname1 = ""

//    let Carname2 = ""

//    let carOver = ""
//    while (Carname2 === ""){
//     let car123 = ""
//     let Carname1Inwhite = ""
//     let max = -Infinity
//     let max2 = -Infinity
//     let maxPriceCar = 0
//     for(let i = 0 ; i < car.Objectcar.length;i++){
//         if(max<car.Objectcar[i].price&&car.Objectcar[i].color !== carOver){
//             maxPriceCar = car.Objectcar[i].price   
//             max = car.Objectcar[i].price
//             Carname1 = car.Objectcar[i].color   
//             Carname1Inwhite = car.Objectcar[i].color
//         }
//     }
//     let tienThua = 6100 - maxPriceCar
//     for(let i = 0 ; i<car.Objectcar.length;i++){
//         if(max2<car.Objectcar[i].price && car.Objectcar[i].price <= tienThua){
//             max2 = car.Objectcar[i].price
//             Carname2 = car.Objectcar[i].color
//             car123 = car.Objectcar[i].color
//         }
//     }
//     if(car123 === ""){
//         carOver = Carname1Inwhite
//     }
//    }
//    console.log(Carname1)
//    console.log(Carname2)

//5. Tạo một mảng chứa danh sách tên của bạn bè và in ra tên của bạn bè có độ dài dài hơn 5 ký tự.

// const Namefriend = [
//     { 
//         name : "Tuấn Anh",
//         age : 40,
//     },{
//         name : "Đạt",
//         age : 30,
//     }
//     ,{
//         name : "Dũng",
//         age : 30,
//     }
//     ,{
//         name : "Hà Anh",
//         age : 30,
//     },{
//         name : "Kiên",
//         age : 30,
//     },{
//         name : "Minh",
//         age : 30,
//     },{
//         name : "Khoa",
//         age : 30,
//     },{
//         name : "Mạnh",
//         age : 30,
//     }
// ]
// for(let i = 0 ; i < Namefriend.length ; i++){
//     if(Namefriend[i].name.length > 5){
//         console.log(Namefriend[i].name)
//     }
// }

//6. Tạo một mảng số nguyên và sắp xếp nó theo thứ tự tăng dần, sau đó in ra kết quả.
// const arrinteger = [4, 3, 2, 5, 7, 6, 8, 9]
// let trunggian = 0
// for (let i = 0; i < arrinteger.length; i++) {
//   for(let j = i + 1 ; j < arrinteger.length; j++) {
//     if (arrinteger[i] > arrinteger[j]) {
//       trunggian = arrinteger[i]
//       arrinteger[i]=arrinteger[j]
//       arrinteger[j]=trunggian 
//     }
//   }
// }
// console.log(arrinteger)

//14. Tạo một mảng số nguyên và loại bỏ các số lẻ khỏi mảng, sau đó in ra kết quả.

// const arrinteger1 = [
//     {
//         number : 2,
//     },{
//         number : 8,
//     },{
//         number : 5,
//     },{
//         number : 6,
//     },{
//         number : 3,
//     },{
//         number : 9,
//     },{
//         number : 10,
//     },{
//         number : 13,
//     },{
//         number : 4,
//     },{
//         number : 20,
//     },{
//         number : 98,
//     },{
//         number : 30,
//     },{
//         number : 78,
//     }
// ]
// let newNumberchan = []
// for(let i = 0;i<arrinteger1.length;i++){
//     if(arrinteger1[i].number % 2 === 0){
//         newNumberchan.push(arrinteger1[i].number)
//     }
// }
// console.log(newNumberchan)

//15. Viết chương trình JavaScript để tạo một danh sách danh bạ (address book) bằng cách sử dụng đối tượng, mỗi người có tên, số điện thoại và địa chỉ, sau đó in ra danh bạ.
// const adressbook = [
//     {
//         Name : "Nguyễn Văn Đạt",
//         Phone : 0892611541,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Thế Mạnh",
//         Phone : 0892613241,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Tuấn Anh",
//         Phone : 0956215151,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Đăng Dũng",
//         Phone : 0258894565,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Hà Anh",
//         Phone : 0581615181,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Thế Khoa",
//         Phone : 01581554514,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Mạnh Quang",
//         Phone : 0256895151,
//         Address : "Hà Nội",
//     },{
//         Name : "Nguyễn Tùng Anh",
//         Phone : 0662564562,
//         Address : "Hà Nội",
//     }
// ]
// console.log(adressbook)

// 4. Viết một hàm JavaScript để tìm số lớn nhất trong một mảng số nguyên và trả về giá trị đó.

// function max(arr){
// let n = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > n){
//         n = arr[i] 
//     }
// }
// return n
// }
// console.log(max([1,4,6,2,5,8]))


