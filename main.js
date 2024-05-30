var people = {
    friends: []
};
// Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
var friend1 = {
    firstName: "Fatima",
    lastName: "Khalid",
    id: 1
};
var friend2 = {
    firstName: "Aqsa",
    lastName: "Noor",
    id: 2
};
var friend3 = {
    firstName: "Muniza",
    lastName: "Ahmed",
    id: 3
};
// Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
// Output the entire people object to the console, displaying your information and your friend list
console.log(people);
//--------------------------------------------------------------------------------------------------------
/*Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).

• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/
var scrambledArray = ["student", "of", 123, true, "I", "GIAIC", "am"];
for (var i = 0; i < scrambledArray.length; i++) {
    if (typeof scrambledArray[i] !== "string") {
        scrambledArray[i] = scrambledArray[i].toString();
    }
}
scrambledArray.splice(0, 4);
console.log(scrambledArray);
scrambledArray.pop();
console.log(scrambledArray);
scrambledArray.splice(1, 1);
console.log(scrambledArray);
scrambledArray.push("am");
scrambledArray.push("student");
scrambledArray.push("of");
scrambledArray.push("GIAIC");
console.log(scrambledArray);
var inventory = [];
var product1 = {
    name: "Tshirt",
    model: 2024,
    cost: 400,
    quantity: 10
};
var product2 = {
    name: "product",
    model: 2022,
    cost: 1000,
    quantity: 25
};
var product3 = {
    name: "product3",
    model: 2023,
    cost: 500,
    quantity: 15
};
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
console.log(inventory[0].name);
console.log(inventory[1].cost);
console.log(inventory[2].quantity);
console.log(inventory[0].model);
var students = [
    { name: "uzma", senior: true, assignments: true },
    { name: "niba", senior: false, assignments: true },
    { name: "yusra", senior: true, assignments: false },
];
console.log(students[0].name);
// Find Senior Students with Assignments (Optional):
function findseniorstudentwithAssigment(students) {
    return students.filter(function (student) { return student.senior && student.assignments; });
}
;
console.log(findseniorstudentwithAssigment(students));
// Class List Update:
function removeStudent(students, student) {
    return students.filter(function (student) { return student.assignments; });
}
console.log(removeStudent(students, students[2]));
