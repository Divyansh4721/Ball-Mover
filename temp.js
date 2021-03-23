var a=document.getElementById('ball');
ball.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16)
setInterval(function(){
  ball.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16)
}, 2000);
var x=0;
var y=0;
document.addEventListener('keypress',function(event){
  if(event.key=='a'&&x>0)
  {
    x-=40;
    a.style.marginLeft=x+'px';
  }
  else if(event.key=='d'&&a.getBoundingClientRect().left+240<=window.innerWidth)
  {
    x+=40;
    a.style.marginLeft=x+'px';
  }
  else if(event.key=='w'&&y>0)
  {
    y-=40;
    a.style.marginTop=y+'px';
  }
  else if(event.key=='s'&&a.getBoundingClientRect().top+240<=window.innerHeight)
  {
    y+=40;
    a.style.marginTop=y+'px';
  }
});
