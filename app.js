let records = JSON.parse(localStorage.getItem("records")) || []

function save(){
localStorage.setItem("records",JSON.stringify(records))
}

function update(){

const list=document.getElementById("list")
list.innerHTML=""

let balance=0

records.forEach((r,i)=>{

const li=document.createElement("li")

li.className=r.type

li.innerHTML=`
${r.desc} - ${r.amount} 元
<button onclick="removeRecord(${i})">刪除</button>
`

list.appendChild(li)

if(r.type=="income")
balance+=r.amount
else
balance-=r.amount

})

document.getElementById("balance").innerText=balance

save()

}

function addRecord(){

const desc=document.getElementById("desc").value
const amount=parseInt(document.getElementById("amount").value)
const type=document.getElementById("type").value

if(!desc||!amount) return

records.push({
desc,
amount,
type
})

document.getElementById("desc").value=""
document.getElementById("amount").value=""

update()

}

function removeRecord(i){

records.splice(i,1)

update()

}

update()
