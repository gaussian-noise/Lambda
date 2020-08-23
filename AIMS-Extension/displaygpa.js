let data = JSON.parse(localStorage.getItem("courseGPA"));

var completed_courses = document.getElementsByClassName("courses")[0];

//inserting rows into the completed courses table
for (i = 0; i < data.length; i++) {

    var row = document.createElement("tr");
    row.innerHTML = `<td>${data[i].Code}</td>
                    <td>${data[i].Course}</td>
                    <td>${data[i].Type}</td>
                    <td class="grade">${data[i].Credits}</td>
                    <td class="grade">${data[i].Grade}</td>`

    completed_courses.appendChild(row);

}