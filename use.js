import formatDate from "../DateFormator/DateJs"


let formatedDate = formatDate()
console.log(formatedDate);
document.getElementById("time").addEventListener("click",()=>{
    document.title = formatedDate
})
