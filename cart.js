

function maketable(){

    let papers = JSON.parse(sessionStorage.getItem('papers'))
    let tbody = document.getElementById("tablebody")
    papers.forEach((paper) => {
        let row = document.createElement("tr")
        let td1 = document.createElement("img")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        var td4 = document.createElement("button")
        td4.innerHTML = "Remove"
       
       td4.onclick = function(){
           td4.closest("tr").remove()
           paper.splice()
       }

        td1.src =  paper.img 
        td1.width = "200"
        td1.height = "200"
    
        td2.innerHTML = paper.nme
        td3.innerHTML = paper.price

        row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  tbody.appendChild(row);
    })
}