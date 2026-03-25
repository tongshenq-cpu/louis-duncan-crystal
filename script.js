
let crystals=[]

fetch('data/crystals.json')
.then(r=>r.json())
.then(data=>{
crystals=data.crystals
display(crystals)
createChart()
})

function display(list){
const gallery=document.getElementById('gallery')
gallery.innerHTML=''

list.forEach(c=>{
gallery.innerHTML+=`
<div class="card">
<img src="${c.image}">
<h3>${c.name}</h3>
<p>${c.category}</p>
<p>${c.price}</p>
</div>
`
})
}

document.getElementById("search").addEventListener("input",function(){
let value=this.value.toLowerCase()
let filtered=crystals.filter(c=>c.name.toLowerCase().includes(value))
display(filtered)
})

function createChart(){
const ctx=document.getElementById('priceChart')
new Chart(ctx,{
type:'line',
data:{
labels:['Jan','Feb','Mar','Apr','May','Jun'],
datasets:[{
label:'Average Crystal Price (RM)',
data:[40,55,50,65,60,75]
}]
}
})
}
