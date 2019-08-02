function myMove() {
    var elem = document.getElementById("animate"); 
    var box = document.getElementById("container");
    var width = box.offsetWidth-elem.offsetWidth;
    var height = box.offsetHeight-elem.offsetHeight;
    var posx = 0;
    var posy = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (posy == 0 && posx < width) {
        posx++;
        elem.style.left = posx + "px";
        elem.style.transition = "none";
      } 
      else if(posy < height && posx>0) {
        posx--;
        posy++;
        elem.style.top = posy + "px";
        elem.style.left = posx + "px";
        elem.style.transition = "none";
      }
      else if(posy ==height && posx < width) {
        posx++;
        elem.style.left = posx + "px";
        elem.style.transition = "none";
        console.log(posy);
      }
      else{
           elem.style.top = 0;
        elem.style.left = 0;
        elem.style.transition = "ease 2s";
        clearInterval(id);
      }
      }
  }