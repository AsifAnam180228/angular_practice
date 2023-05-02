var found = true;
var grade = 88.6;
var firstName = "Asif";
var lastName = "Anam";
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + lastName);
// template String
console.log("Hi ".concat(firstName, " ").concat(lastName));
//---------------------Variables
//------for loops------
for (var i = 0; i < 5; i++) {
    console.log(i);
}
//----for loop- array of numbers-------
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
console.log("----------------------------");
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log(("Review average = " + average));
//----------iterate arrays--------
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//simplified one
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " My favorite!");
    }
    else {
        console.log(tempSport);
    }
}
//Growable Arrays
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Basketball");
sportsTwo.push("Football");
for (var _a = 0, sportsTwo_1 = sportsTwo; _a < sportsTwo_1.length; _a++) {
    var tempSport = sportsTwo_1[_a];
    console.log(tempSport);
}
