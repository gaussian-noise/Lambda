let data = JSON.parse(localStorage.getItem("courseGPA"));

for(i=0; i<data.length; i++){
  //if(data[i] != '&nbsp'){
    console.log(data[i])
    const div1 = document.createElement('div')
    div1.textContent = data[i].Course 
    const div2 = document.createElement('div')
    div2.textContent = data[i].Grade
    document.body.appendChild(div1)
    document.body.appendChild(div2)
  //}
}
