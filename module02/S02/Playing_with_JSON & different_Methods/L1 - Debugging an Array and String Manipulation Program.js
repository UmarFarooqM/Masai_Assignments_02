function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");
    students.splice(0,  1, "umar", "farooq")
    // students.splice(0,,"farooq")
    students.splice(0, 2, "Alice")
    
    // Check if "Eve" is in the list
    console.log(students.includes("Eve"));  // Should return false
    console.log(students.includes("umar"));
    console.log(students.includes("farooq"))
    // Convert the array to a string with names separated by commas
    console.log(students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}

manageStudents();

