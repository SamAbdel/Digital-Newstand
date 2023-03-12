

var total = 0;


const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('checked-out');
});


function maketable(){
    
    let papers = JSON.parse(sessionStorage.getItem('papers'))
    let counter = JSON.parse(sessionStorage.getItem('counter'))
    let tbody = document.getElementById("tablebody")
    papers.forEach((paper) => {
        let row = document.createElement("tr")
        let td1 = document.createElement("img")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        var td4 = document.createElement("button")
        var td5 = document.createElement("input")
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

        td5.setAttribute("type", "number")
        td5.id = "in" 
        td5.value = "1"
        td5.style.width = "200px"

        

        row.appendChild(td1);
  row.appendChild(td2)
  row.appendChild(td3)
  row.appendChild(td4)
  row.appendChild(td5)


  tbody.appendChild(row)

       total += parseInt(paper.price)
    })
    total = total.toFixed(2);
    document.getElementById('subtotal').value = '$' + total
    document.getElementById('tax').value = '  $' + (total/10).toFixed(2)
    document.getElementById('ship').value = '$' + (total/5).toFixed(2)
    var final = +total + +(total/10) + +(total/5)
    document.getElementById('total').value = '     $' + (+final).toFixed(2)
    document.getElementById('total').style.fontWeight = "800"

    sessionStorage.setItem('papers', JSON.stringify(Papers))
    sessionStorage.setItem('counter', JSON.stringify(counter))

}

