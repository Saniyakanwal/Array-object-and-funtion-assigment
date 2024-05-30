/*Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure.
Task: Create a program that manages a simple friend list.
. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list.*/
type Friend = {
    firstName: string;
    lastName: string;
    id: number;
}
let people: {friends : Friend[]} = {
    friends: []
}

// Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
let friend1 = {
    firstName: "Fatima",
    lastName: "Khalid",
    id: 1
    }
    let friend2 = {
        firstName: "Aqsa",
        lastName: "Noor",
        id: 2
        }
        let friend3 = {
            firstName: "Muniza",
            lastName: "Ahmed",
            id: 3
          }

// Add these friend objects to the friends array within the people object.
people.friends.push(friend1,friend2,friend3)

// Output the entire people object to the console, displaying your information and your friend list
console.log(people)

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
let scrambledArray = ["student","of",123,true,"I","GIAIC","am"]
for(let i = 0; i < scrambledArray.length; i++){
    if (typeof scrambledArray[i] !== "string"){
    scrambledArray[i] = scrambledArray[i].toString()
    }
}

scrambledArray.splice(0,4)
console.log(scrambledArray)
scrambledArray.pop()
console.log(scrambledArray)
scrambledArray.splice(1,1)
console.log(scrambledArray)
scrambledArray.push("am")
scrambledArray.push("student")
scrambledArray.push("of")
scrambledArray.push("GIAIC")
console.log(scrambledArray)
//---------------------------------------------------------------------------------

/*Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
type Product = {
    name: string;
    model: number;
    cost: number;
    quantity: number
}
let inventory: Product[] = []
let product1: Product = {
    name: "Tshirt",
    model: 2024, 
    cost: 400,
    quantity: 10
}
let product2: Product = {
    name: "product",
    model: 2022,
    cost:1000,
    quantity: 25
}
let product3: Product = {
    name: "product3",
    model: 2023,
    cost: 500,
    quantity: 15
}
inventory.push(product1)
inventory.push(product2)
inventory.push(product3)
console.log(inventory[0].name)
console.log(inventory[1].cost)
console.log(inventory[2].quantity)
console.log(inventory[0].model)
//----------------------------------------------------------------------------

/*Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/
interface Student {
    name: string,
    senior: boolean,
    assignments: boolean
}
let students: Student[] = [
        {name: "uzma", senior: true, assignments: true},
        {name: "niba", senior: false, assignments: true},
        {name: "yusra", senior: true, assignments: false},
]
console.log(students[0].name)

// Find Senior Students with Assignments (Optional):
function findseniorstudentwithAssigment (students: Student[]):Student[]{
return students.filter((student) => student.senior && student.assignments)
};
console.log(findseniorstudentwithAssigment(students))

// Class List Update:
function removeStudent(students: Student[], student: Student): Student[]{
    return students.filter((student) => student.assignments)
    }
    console.log(removeStudent(students, students[2]))
