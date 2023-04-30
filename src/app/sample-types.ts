let found: boolean = true;
let grade: number = 88.6
let firstName: string = "Asif"
let lastName: string = "Anam"


console.log(found)
console.log("The grade is "+ grade)
console.log("Hi "+ firstName + lastName)

// template String

console.log(`Hi ${firstName} ${lastName}`)

//---------------------Variables

//------for loops------

for(let i = 0; i<5 ; i++){
  console.log(i)
}
//----for loop- array of numbers-------
let reviews: number[] = [5,5,4.5, 1,3]
let total:number = 0
console.log("----------------------------")
for( let i = 0; i<reviews.length; i++){
  console.log(reviews[i])
  total+=reviews[i]
}
let  average = total/reviews.length

console.log(("Review average = "+ average))

//----------iterate arrays--------
let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"]
for(let i =0; i<sportsOne.length; i++){
  console.log(sportsOne[i])
}
//simplified one
for(let tempSport of sportsOne){
  if(tempSport == "Cricket"){
    console.log(tempSport + " My favorite!")
  }
  else {
    console.log(tempSport)
  }
}

//Growable Arrays

let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"]
sportsTwo.push("Baseball")
sportsTwo.push("Basketball")
sportsTwo.push("Football")

for(let tempSport of sportsTwo){
  console.log(tempSport)
}

