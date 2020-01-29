


const tbody = document.querySelector("tbody")
const members = data.results[0].members
/*
members.forEach(member => {
    let row = tbody.insertRow (-1)
    row.innerHTML =`
    <td> <a href="${member.url}">${member.first_name} ${member.middle_name || ""} ${member.last_name} </a></td>
    <td> ${member.party} </td>
    <td> ${member.state} </td>
    <td> ${member.seniority} </td>
    <td> ${member.votes_with_party_pct} </td>`
})
*/
function filtrar(){
    tbody.innerHTML=""
    let check = document.getElementsByClassName("congress")
    
    for(let i=0;i<check.length;i++){
        
        if(check[i].checked){
            
            members.filter(e => e.party == check[i].value).forEach(member => {
                
    let row = tbody.insertRow (-1)
    row.innerHTML =`
    <td> <a href="${member.url}">${member.first_name} ${member.middle_name || ""} ${member.last_name} </a></td>
    <td> ${member.party} </td>
    <td> ${member.state} </td>
    <td> ${member.seniority} </td>
    <td> ${member.votes_with_party_pct} </td>`
})
        }
    }
}
document.getElementById("rep").addEventListener("click", filtrar)
document.getElementById("dem").addEventListener("click", filtrar)
document.getElementById("ind").addEventListener("click", filtrar)