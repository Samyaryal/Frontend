
const xyz = [{name: "Samikshya", age: 24}, {name: "sujan", age: 18}, {school: "abc", age: 22}]

let age1 = xyz.map((item) => {
if ( item.age < 25 ) {
  return item.age + 2
}
  return item.age
})
console.log(age1);




// let names = xyz.find( (item) =>  {
//   return item.name==="Samikshya"
// } )
  
// console.log(names)

// let filter1 = xyz.filter((item) => item.age > 20 )
// console.log(filter1)


// let index1 = xyz.findIndex((item) => item.name ==="sujan")

// console.log(index1);

// let bio1 = {
//   name: "poks",
//   gender: "male"
// }

// xyz.unshift(bio1)
// console.log(xyz)



