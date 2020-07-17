var signup = document.getElementById("signup");
var signin  = document.getElementById('signin')
var box1 = document.getElementById("box1");
var box2 = document.getElementById('box2')
signup.addEventListener("click",function(e){
  box1.classList.add('up')
 setTimeout(()=>{
  box1.classList.remove('up')
  box2.style.display = 'block';
  box1.style.display = 'none'
 },2000)
})
signin.addEventListener("click",function(e){
  box2.classList.add('updown')
 setTimeout(()=>{
  box2.classList.remove('updown');
  box1.style.display='block';
  box2.style.display='none';
 },2000)
 
})