let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myLeads","www.examplelead.com")
// localStorage.getItem("myLeads")
// console.log( localStorage.getItem("myLeads") )

// localStorage.setItem("myName", "Narender Singh Pawar")
// localStorage.getItem("myName")
// console.log(localStorage.getItem("myName"))
// localStorage.clear();


// push the value from the inputEl into myLeads array 
// instead of the hardcoded "www.awesomeleads.com"


const leadFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadFromLocalStorage)


if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage
    renderLeads()
}


function renderLeads(){
    let listItems = ""
    for ( let i =0; i<myLeads.length; i++){
        // listItems += "<li> <a target='_blank' href='" + myLeads[i]+ "' >" + myLeads[i] + "</a> </li>"
        listItems += `
               <li>
                   <a href='${myLeads[i]}' target='blank'> ${myLeads[i]} </a>
               </li>
             `
    }
    ulEl.innerHTML = listItems;
}



tabBtn.addEventListener("click", function(){

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads()
    })

})


deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked")
    myLeads = []
    renderLeads()
})


inputBtn.addEventListener("click" ,function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
    renderLeads()
    // console.log( localStorage.getItem("myLeads") )

})


// log out the items in the myLeads array using for loop
// for ( let i=0; i<myLeads.length; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }
// console.log(ulEl)


// Another method for the above solution 
// for ( let i =0; i<myLeads.length; i++){

//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)   
// }


// Create a variable , listItems , to hold all the html for the listItems
// Assign it to an empty string to begin with
// Add the item to listItems variable insted of the ulEl.innerHTML
// Render the listItems insdie the unordered list using ulEl.innerHTML



