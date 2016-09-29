console.log('Loaded!');
// move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveleft(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
    if (marginLeft>500)
    marginLeft=marginLeft-500;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    img.style.marginRight='100px';
    var interval= setInterval(moveleft,50);
    if(marginLeft==505)
     img.style.marginRight='0px';
}

var button=document.getElementById('counter');
button.onclick= function(){
    
    
    counter=counter+1;
    var span= document.getElementById('count')
    span.innerHtml= counter.toString();
}