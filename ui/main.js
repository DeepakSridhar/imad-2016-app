console.log('Loaded!');
// move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveleft(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    img.style.marginRight='100px';
    var interval= setInterval(moveleft,50);
}