chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.txt === "start") {
        let courses = document.getElementsByClassName('hierarchyLi dataLi tab_body_bg');

        var arr = [];

        function trim(courseElement) {
            courseElement = courseElement.replace(/(?:^[\s\u00a0]+)|(?:[\s\u00a0]+$)/g, ''); //essentially a trim()
            return courseElement;
        }

        for (i = 0; i < courses.length; i++) {

            if (courses[i].children[7] != undefined) {
                //var CourseGrade = courses[i].children[7].innerText;
                //CourseGrade = CourseGrade.replace(/(?:^[\s\u00a0]+)|(?:[\s\u00a0]+$)/g, ''); //essentially a trim()

                CourseCode = trim((courses[i].children[0]).innerText);
                CourseName = trim((courses[i].children[1]).innerText);
                CourseCredits = trim((courses[i].children[2]).innerText);
                CourseType = trim((courses[i].children[4]).innerText);
                CourseGrade = trim((courses[i].children[7]).innerText);


                if (CourseGrade != '') {

                    console.log(courses[i].children[1].innerText);
                    console.log(CourseGrade);

                    arr.push({
                        Code: CourseCode,
                        Course: CourseName,
                        Credits: CourseCredits,
                        Type: CourseType,
                        Grade: CourseGrade
                    });
                }
            }
        }

        chrome.runtime.sendMessage({
            info: arr
        });
    }
})