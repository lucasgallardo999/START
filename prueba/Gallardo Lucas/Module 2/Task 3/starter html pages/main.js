let members = data.results[0].members.filter(e=> e.total_votes != 0)
const tbody = document.querySelector("tbody")
let auxdem= 0
let auxrep= 0
let auxind= 0
let totalaux= 0
let stats = {
    democratas: [],
    republicanos: [],
    independientes: [],
    d_votes_wp: [],
    r_votes_wp: [],
    i_votes_wp: [],
    t_votes_wp: [],
    least: [],
    most: [],
}
stats.democratas = members.filter(member => member.party=="D")
stats.republicanos = members.filter(member => member.party=="R")
stats.independientes = members.filter(member => member.party=="I")

for (let i=0;i<stats.democratas.length; i++){
    auxdem+= stats.democratas[i].votes_with_party_pct
}
for (let i=0;i<stats.republicanos.length; i++){
    auxrep+= stats.republicanos[i].votes_with_party_pct
}
for (let i=0;i<stats.independientes.length; i++){
    auxind+= stats.independientes[i].votes_with_party_pct
}
for (let i=0;i<members.length; i++){
    totalaux+=members[i].votes_with_party_pct
}
stats.d_votes_wp= (auxdem/stats.democratas.length)
stats.r_votes_wp= (auxrep/stats.republicanos.length)
stats.i_votes_wp= stats.independientes.length == 0 ? 0 : (auxind/stats.independientes.length)
stats.t_votes_wp= stats.i_votes_wp == 0 ? ((stats.d_votes_wp+stats.r_votes_wp)/2).toFixed(2) + "%" : ((stats.d_votes_wp+stats.r_votes_wp+stats.i_votes_wp)/3).toFixed(2) + "%"

for(let i=0; i<4; i++){
    if(i==0){
        document.querySelector("#table1").innerHTML += `<tr><td>Democrats</td><td>${stats.democratas.length}</td><td> ${stats.d_votes_wp.toFixed(2)}% </td</tr>`
    }
    if(i==1){
        document.querySelector("#table1").innerHTML += `<tr><td>Republics</td><td>${stats.republicanos.length}</td><td> ${stats.r_votes_wp.toFixed(2)}% </td</tr>`
    }
    if(i==2){
        document.querySelector("#table1").innerHTML += `<tr><td>Independents</td><td>${stats.independientes.length}</td><td> ${stats.i_votes_wp.toFixed(2)}% </td</tr>`
    }
    if(i==3){
        document.querySelector("#table1").innerHTML += `<tr><td>Total</td><td>${members.length}</td><td> ${stats.t_votes_wp} </td</tr>`
    }
}
