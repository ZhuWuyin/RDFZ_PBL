var imgList=["url('../img/BG/img1.JPG')", "url('../img/BG/img2.JPG')", "url('../img/BG/img3.JPG')",
             "url('../img/BG/img4.JPG')", "url('../img/BG/img5.jpeg')", "url('../img/BG/img6.jpeg')"]
var counter=0
function BG(){
    document.getElementById("mainPage").style.backgroundImage = imgList[counter]
    document.getElementById("mainPage").style.backgroundRepeat = "repeat-y"
    document.getElementById("mainPage").style.backgroundSize = "100%"
    counter++
    setTimeout("BG()", 3000)
    if (counter == 6){
        counter=0
    }
}