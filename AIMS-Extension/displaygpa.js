let studentData = JSON.parse(localStorage.getItem("student"));
let courseData = JSON.parse(localStorage.getItem("courseGPA"));

var completed_courses = document.getElementsByClassName("courses")[0];

//sending student info to displaygpa.html
document.getElementsByClassName("stuName")[0].innerText = studentData.Name;
document.getElementsByClassName("stuRollno")[0].innerText = studentData.RollNo;
document.getElementsByClassName("stuBranch")[0].innerText = studentData.Branch;
document.getElementsByClassName("stuType")[0].innerText = studentData.StudentType;

//inserting rows into the completed courses table
var totalCredits = 0.00,
    sumGrades = 0.00;

var excludedCourses = [
    'Minor core',
    'Honors core',
    'Honours project',
    'Honours coursework',
    'FCC',
    'Additional'
];

for (i = 0; i < courseData.length; i++) {

    //-1 is for the S and I grade
    if (excludedCourses.indexOf(courseData[i].Type) != -1 && courseData[i].NumberGrade != -1) {
        totalCredits = totalCredits + parseFloat(courseData[i].Credits);
        sumGrades += parseFloat(courseData[i].NumberGrade) * parseFloat(courseData[i].Credits);
    }

    var row = document.createElement("tr");
    row.innerHTML = `<td>${courseData[i].Code}</td>
                    <td>${courseData[i].Course}</td>
                    <td>${courseData[i].Type}</td>
                    <td class="credit">${courseData[i].Credits}</td>
                    <td class="grade">${courseData[i].Grade}</td>`

    completed_courses.appendChild(row);
}

var CGPA = sumGrades / totalCredits;


document.getElementsByClassName("cgpa")[0].innerText = CGPA;