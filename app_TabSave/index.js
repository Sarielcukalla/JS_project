let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBTN = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")


inputBTN.addEventListener("click", function () {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    renderLeads()
})
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='_blank' href= '" + myLeads[i] + "'> " + myLeads[i] + "</a></li>";

    }
    ulEL.innerHTML = listItems
}

// var arr=[1,1,2,2,2]
// var count = 0;
// var maxcount=0;
// for( let i=0 ; i< arr.length;i++){
//   if(arr[i]=== arr[i+1]){
//     count++;
//     maxcount=count;
//     console.log(arr[i])
//   }
  
// }
