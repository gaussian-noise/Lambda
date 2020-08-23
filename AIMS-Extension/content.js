chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.txt === "start") {
        let courses = document.getElementsByClassName('hierarchyLi dataLi tab_body_bg');

        var arr = [];

        for (i = 0; i < courses.length; i++) {

            if (courses[i].children[7] != undefined) {
                var currentCourseGrade = courses[i].children[7].innerText;
                currentCourseGrade = currentCourseGrade.replace(/(?:^[\s\u00a0]+)|(?:[\s\u00a0]+$)/g, ''); //essentially a trim()

                if (currentCourseGrade != '') {

                    console.log(courses[i].children[1].innerText);
                    console.log(currentCourseGrade);

                    arr.push({
                        Course: courses[i].children[1].innerText,
                        Grade: currentCourseGrade
                    });
                }
            }
        }

        chrome.runtime.sendMessage({
            info: arr
        });
    }
})