var front=0;
var back=180;

var front1=0;
var back1=180;

var front2=0;
var back2=180;

var front3=0;
var back3=180;

var front4=0;
var back4=180;

var front5=0;
var back5=180;

$('.PBL>ul>li').children('.front').css('transform', 'rotateY('+front+'deg)');
$('.PBL>ul>li').children('.back').css('transform', 'rotateY('+back+'deg)');

$('.PBL>ul>li').children('.front').css('-o-transform', 'rotateY('+front+'deg)');
$('.PBL>ul>li').children('.back').css('-o-transform', 'rotateY('+back+'deg)');

$('.PBL>ul>li').children('.front').css('-ms-transform', 'rotateY('+front+'deg)');
$('.PBL>ul>li').children('.back').css('-ms-transform', 'rotateY('+back+'deg)');

$('.PBL>ul>li').children('.front').css('-moz-transform', 'rotateY('+front+'deg)');
$('.PBL>ul>li').children('.back').css('-moz-transform', 'rotateY('+back+'deg)');

$('.PBL>ul>li').children('.front').css('-webkit-transform', 'rotateY('+front+'deg)');
$('.PBL>ul>li').children('.back').css('-webkit-transform', 'rotateY('+back+'deg)');

/*
$(function(){
    $('.PBL>ul>li').click(function(){
        front+=180;
        back+=180;
        $(this).children('.front').css({transition: 'all 0.3s ease-out', transform: 'rotateY('+front+'deg)'});
        $(this).children('.back').css({transition: 'all 0.3s ease-out', transform: 'rotateY('+back+'deg)'});
    });
});
*/

function rotate1(){
    front1+=180;
    back1+=180;

    document.getElementById('front1').style.transform='rotateY('+front1+'deg)';
    document.getElementById('back1').style.transform='rotateY('+back1+'deg)';

    document.getElementById('front1').style.OTransform='rotateY('+front1+'deg)';
    document.getElementById('back1').style.OTransform='rotateY('+back1+'deg)';

    document.getElementById('front1').style.msTransform='rotateY('+front1+'deg)';
    document.getElementById('back1').style.msTransform='rotateY('+back1+'deg)';

    document.getElementById('front1').style.MozTransform='rotateY('+front1+'deg)';
    document.getElementById('back1').style.MozTransform='rotateY('+back1+'deg)';

    document.getElementById('front1').style.webkitTransform='rotateY('+front1+'deg)';
    document.getElementById('back1').style.webkitTransform='rotateY('+back1+'deg)';
}
function rotate2(){
    front2+=180;
    back2+=180;

    document.getElementById('front2').style.transform='rotateY('+front2+'deg)';
    document.getElementById('back2').style.transform='rotateY('+back2+'deg)';

    document.getElementById('front2').style.OTransform='rotateY('+front2+'deg)';
    document.getElementById('back2').style.OTransform='rotateY('+back2+'deg)';

    document.getElementById('front2').style.msTransform='rotateY('+front2+'deg)';
    document.getElementById('back2').style.msTransform='rotateY('+back2+'deg)';

    document.getElementById('front2').style.MozTransform='rotateY('+front2+'deg)';
    document.getElementById('back2').style.MozTransform='rotateY('+back2+'deg)';

    document.getElementById('front2').style.webkitTransform='rotateY('+front2+'deg)';
    document.getElementById('back2').style.webkitTransform='rotateY('+back2+'deg)';
}
function rotate3(){
    front3+=180;
    back3+=180;

    document.getElementById('front3').style.transform='rotateY('+front3+'deg)';
    document.getElementById('back3').style.transform='rotateY('+back3+'deg)';

    document.getElementById('front3').style.OTransform='rotateY('+front3+'deg)';
    document.getElementById('back3').style.OTransform='rotateY('+back3+'deg)';

    document.getElementById('front3').style.msTransform='rotateY('+front3+'deg)';
    document.getElementById('back3').style.msTransform='rotateY('+back3+'deg)';

    document.getElementById('front3').style.MozTransform='rotateY('+front3+'deg)';
    document.getElementById('back3').style.MozTransform='rotateY('+back3+'deg)';

    document.getElementById('front3').style.webkitTransform='rotateY('+front3+'deg)';
    document.getElementById('back3').style.webkitTransform='rotateY('+back3+'deg)';
}

function rotate4(){
    front4+=180;
    back4+=180;

    document.getElementById('front4').style.transform='rotateY('+front4+'deg)';
    document.getElementById('back4').style.transform='rotateY('+back4+'deg)';

    document.getElementById('front4').style.OTransform='rotateY('+front4+'deg)';
    document.getElementById('back4').style.OTransform='rotateY('+back4+'deg)';

    document.getElementById('front4').style.msTransform='rotateY('+front4+'deg)';
    document.getElementById('back4').style.msTransform='rotateY('+back4+'deg)';

    document.getElementById('front4').style.MozTransform='rotateY('+front4+'deg)';
    document.getElementById('back4').style.MozTransform='rotateY('+back4+'deg)';

    document.getElementById('front4').style.webkitTransform='rotateY('+front4+'deg)';
    document.getElementById('back4').style.webkitTransform='rotateY('+back4+'deg)';
}

function rotate5(){
    front5+=180;
    back5+=180;

    document.getElementById('front5').style.transform='rotateY('+front5+'deg)';
    document.getElementById('back5').style.transform='rotateY('+back5+'deg)';

    document.getElementById('front5').style.OTransform='rotateY('+front5+'deg)';
    document.getElementById('back5').style.OTransform='rotateY('+back5+'deg)';

    document.getElementById('front5').style.msTransform='rotateY('+front5+'deg)';
    document.getElementById('back5').style.msTransform='rotateY('+back5+'deg)';

    document.getElementById('front5').style.MozTransform='rotateY('+front5+'deg)';
    document.getElementById('back5').style.MozTransform='rotateY('+back5+'deg)';

    document.getElementById('front5').style.webkitTransform='rotateY('+front5+'deg)';
    document.getElementById('back5').style.webkitTransform='rotateY('+back5+'deg)';
}