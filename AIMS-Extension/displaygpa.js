let data = JSON.parse(localStorage.getItem("courseGPA"));

var completed_courses = document.getElementsByClassName("courses")[0];

//inserting rows into the completed courses table
var totalCredits = 0,
    sumGrades = 0;

for (i = 0; i < data.length; i++) {

    if (data[i].NumberGrade != 'S') {
        console.log(sumGrades);
        console.log(totalCredits);
        totalCredits = totalCredits + data[i].Credits;
        sumGrades += (data[i].NumberGrade) * (data[i].Credits);
    }

    var row = document.createElement("tr");
    row.innerHTML = `<td>${data[i].Code}</td>
                    <td>${data[i].Course}</td>
                    <td>${data[i].Type}</td>
                    <td class="credit">${data[i].Credits}</td>
                    <td class="grade">${data[i].Grade}</td>`

    completed_courses.appendChild(row);
}

var CGPA = sumGrades / totalCredits;

document.getElementsByClassName("cgpa")[0].innerText = CGPA;