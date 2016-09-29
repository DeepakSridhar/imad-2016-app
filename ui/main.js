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
    
    var request=new XMLHttpRequest();
    request.onreadystatechange= function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200)
            var counter=request.responseText;
            var span= document.getElementById('count')
    span.innerHTML= counter.toString();
        }
    }
    
    request.open('GET','http://deepaksridhar.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

var nameinput=document.getElementById('name');
var name=nameinput.value;
var submit=document.getElementById('submit _btn');
submit.onclick=function(){
    
    var request=new XMLHttpRequest();
    request.onreadystatechange= function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200)
            var names=request.responseText;
            names= JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
        
        }
        var ul= document.getElementById('namelist');
        ul.innerHTML=list;
        }
    }
    
    request.open('GET','http://deepaksridhar.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);
    
    
    
    
};







