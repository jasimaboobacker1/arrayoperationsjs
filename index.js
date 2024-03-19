const students = [
    { name: 'Alice', age: 70, department: 'Computer Science', totalMarks: 85 },
    { name: 'Bob', age: 22, department: 'Mathematics', totalMarks: 78 },
    { name: 'Charlie', age: 21, department: 'Physics', totalMarks: 92 },
    { name: 'David', age: 23, department: 'Biology', totalMarks: 100 },
    { name: 'Eve', age: 24, department: 'Chemistry', totalMarks: 88 },
    { name: 'Frank', age: 25, department: 'Geology', totalMarks: 95 },
    { name: 'Grace', age: 26, department: 'History', totalMarks: 82 },
    { name: 'Helen', age: 27, department: 'Literature', totalMarks: 79 },
    { name: 'Ivan', age: 28, department: 'Music', totalMarks: 91 },
    { name: 'Jack', age: 29, department: 'Philosophy', totalMarks: 84 }
];

const tableBody = document.querySelector('#studentTable tbody');

function displayTable(students) {
    tableBody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        `;
        tableBody.appendChild(row);
    });
}

displayTable(students);



// sort
const sortField = document.getElementById('sortField');

sortField.addEventListener('change', function () {
    const sortBy = this.value; 
    const sortedStudents = students.slice().sort((a, b) => {
        if (sortBy === 'age' || sortBy === 'totalMarks') {
            return a[sortBy] - b[sortBy]; 
        } else {
            return a[sortBy].localeCompare(b[sortBy]); 
        }
    });
    displayTable(sortedStudents);
});

// search
const searchTermInput = document.getElementById('searchTerm');

searchTermInput.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.department.toLowerCase().includes(searchTerm)
    );
    displayTable(filteredStudents);
});

// filter
function filter() {
    const minMarksInput = document.getElementById('minMarks').value;
    const filteredStudents = students.filter(student => student.totalMarks >= minMarksInput);
    displayTable(filteredStudents);
}
