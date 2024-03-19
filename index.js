const students = [
    { name: 'Alice', age: 20, department: 'Computer Science', totalMarks: 85 },
    { name: 'Bob', age: 22, department: 'Mathematics', totalMarks: 78 },
    { name: 'Charlie', age: 21, department: 'Physics', totalMarks: 92 },
    { name: 'David', age: 23, department: 'Biology', totalMarks: 70 },
    { name: 'Eve', age: 24, department: 'Chemistry', totalMarks: 88 },
    { name: 'Frank', age: 25, department: 'Geology', totalMarks: 95 },
    { name: 'Grace', age: 26, department: 'History', totalMarks: 82 },
    { name: 'Helen', age: 27, department: 'Literature', totalMarks: 79 },
    { name: 'Ivan', age: 28, department: 'Music', totalMarks: 91 },
    { name: 'Jack', age: 29, department: 'Philosophy', totalMarks: 84 }
];

const tableBody = document.querySelector('#studentTable tbody');

function renderTable(students) {
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

renderTable(students);

const sortField = document.getElementById('sortField');

sortField.addEventListener('change', function () {
    const sortedStudents = students.slice().sort((a, b) => {
        if (a[this.value] < b[this.value]) return -1;
        if (a[this.value] > b[this.value]) return 1;
        return 0;
    });
    renderTable(sortedStudents);
});


const searchTermInput = document.getElementById('searchTerm');

searchTermInput.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.department.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredStudents);
});


const filterButton = document.getElementById('filterButton');
const minMarksInput = document.getElementById('minMarks');

filterButton.addEventListener('click', function () {
    const minMarks = parseInt(minMarksInput.value);
    if (!isNaN(minMarks)) {
        const filteredStudents = students.filter(student => student.totalMarks >= minMarks);
        renderTable(filteredStudents);
    } else {
        alert('Please enter a valid minimum marks value.');
    }
});