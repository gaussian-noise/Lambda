 chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if(request.txt === "hello"){
    console.log("hey")
    //let array = document.getElementsByClassName('col8 col');
    let courses = document.getElementsByClassName('hierarchyLi dataLi tab_body_bg')

    //var grades = new Array();
    var arr = [];
    
    for(i=0; i<courses.length; i++){
      //grades[i] = array[i].innerText; 
      if(courses[i].children[7] != undefined){
        console.log(courses[i].children[1].innerText)
        console.log(courses[i].children[7].innerText);
        arr.push({
          Course: courses[i].children[1].innerText,
          Grade: courses[i].children[7].innerText
      });
      }
      //console.log(grades[i])
    }

    chrome.runtime.sendMessage({
      info: arr 
    });
  }
 })