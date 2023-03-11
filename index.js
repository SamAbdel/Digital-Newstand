class paper{
    constructor(img, nme, price){
        this.img = img;
        this.nme = nme;
        this.price = price;
    }
}
var Papers = []
var counter = 0
function check(paper){
    return paper.nme == this.nme
}
function addp1(){
   
    let USAToday = new paper("rsc/Paper1.png", "USA Today", "4.99")
    if(!Papers.some(check, USAToday)){
        Papers.push(USAToday) 
        alert('USA Today has been added to your cart')
        store() 
    } 
    else{
        alert('USA Today is already in your cart. You can order more copies from the Cart page')
    }
    
}
function addp2(){
    let NYTimes = new paper("rsc/NYTimes.png", "NY Times", "3.99")
    if(!Papers.some(check, NYTimes)){
        Papers.push(NYTimes) 
        alert('NY Times has been added to your cart')
        store() 
    } 
    else{
        alert('NY Times is already in your cart. You can order more copies from the Cart page')
    }
}
function addp3(){
    let SFChronicle = new paper("rsc/SF.png", "SF Chronicle", "2.99")
    if(!Papers.some(check, SFChronicle)){
        Papers.push(SFChronicle) 
        alert('SF Chronicle has been added to your cart')
        store() 
    } 
    else{
        alert('SF Chronicle is already in your cart. You can order more copies from the Cart page')
    }
}
function addp4(){
    let LATimes = new paper("rsc/LA.jpg", "LA Times", "5.99")
    if(!Papers.some(check, LATimes)){
        Papers.push(LATimes) 
        alert('LA Times has been added to your cart')
        store() 
    } 
    else{
        alert('LA Times is already in your cart. You can order more copies from the Cart page')
    }
}
function addp5(){
    let WSJ = new paper("rsc/WSJ.jpg", "Wall Street Journal", "6.99")
    if(!Papers.some(check, WSJ)){
        Papers.push(WSJ) 
        alert('Wall Street Journal has been added to your cart')
        store() 
    } 
    else{
        alert('Wall Street Journal is already in your cart. You can order more copies from the Cart page')
    }
}
function addp6(){
    let CHI = new paper("rsc/CHI.png", "Chicago Tribune", "3.99")
    if(!Papers.some(check, CHI)){
        Papers.push(CHI) 
        alert('Chicago Tribune has been added to your cart')
        store() 
    } 
    else{
        alert('Chicago Tribune is already in your cart. You can order more copies from the Cart page')
    }

}

function store(){
    counter++
    document.getElementById('counter').value = counter;
    sessionStorage.setItem('papers', JSON.stringify(Papers))
}

