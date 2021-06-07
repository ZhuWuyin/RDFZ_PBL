var imgList=["url('../img/BG/img2.jpg')", "url('../img/BG/img3.jpg')", "url('../img/BG/img4.jpg')"]
var counter=0
function BG(){
    document.getElementById("mainPage").style.backgroundImage = imgList[counter]
    document.getElementById("mainPage").style.backgroundRepeat = "no-repeat"
    document.getElementById("mainPage").style.backgroundSize = "100%"
    counter++
    setTimeout("BG()", 3000)
    if (counter == 3){
        counter=0
    }
}
BG()