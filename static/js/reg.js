function regis(){
  var btn = document.getElementById('reg');
  btn.onclick = function(){
    window.open('https://www.baidu.com');
  }
}

function addLoadEvent(func){
  var oldonload = window.load;
  if(typeof window.onload !== 'function'){
      window.onload = func;
  }else{
      oldonload();
      func();
  }
}

addLoadEvent(regis);