const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });
    result.shift();
    const lines = [];
    result.forEach((data) => lines.push([data[0], data[3]]));// name and field
    const fields = new Set();
    lines.forEach((row) => fields.add(row[1]));
    const final = {};
    fields.forEach((data) => { (final[data] = 0); });
    lines.forEach((data) => { (final[data[1]] += 1); });
    console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
    Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${lines.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;

// function countStudents(path) {
//   try {
//     // Read the CSV file synchronously
//     const data = fs.readFileSync(path, 'utf8');

//     // Split the file into lines and filter out empty lines
//     const lines = data.split('\n').filter((line) => line.trim() !== '');

//     // Extract the headers and the student data
//     const headers = lines[0].split(',');
//     const students = lines.slice(1);

//     // Check if there are any students in the file
//     if (students.length === 0) {
//       console.log('Number of students: 0');
//       return;
//     }

//     console.log(`Number of students: ${students.length}`);

//     // Count students in each field
//     const fieldCount = {};
//     const fieldList = {};

//     students.forEach((student) => {
//       const [firstname, lastname, age, field] = student.split(',');

//       if (!fieldCount[field]) {
//         fieldCount[field] = 0;
//         fieldList[field] = [];
//       }

//       fieldCount[field] += 1;
//       fieldList[field].push(firstname);
//     });

//     // Log the number of students in each field
//     for (const field in fieldCount) {
//       if (Object.hasOwn(fieldCount, field)) {
//         const count = fieldCount[field];
//         const list = fieldList[field].join(', ');
//         console.log(`Number of students in ${field}: ${count}. List: ${list}`);
//       }
//     }
//   } catch (error) {
//     // Throw an error if the file cannot be read
//     throw new Error('Cannot load the database');
//   }
// }

// module.exports = countStudents;