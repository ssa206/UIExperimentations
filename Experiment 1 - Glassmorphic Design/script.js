document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll(".glassbox");
    const cursor = document.getElementById('cursor');
  
    document.onmousemove = function(e) {
      let x = e.pageX;
      let y = e.pageY;
  
      boxes.forEach(box => {
        let boxRect = box.getBoundingClientRect();
        let calcX = -(boxRect.left - x) / 20;
        let calcY = (boxRect.top - y) / 20;
  
        box.style.transform = `rotateY(${calcX}deg) rotateX(${calcY}deg)`;
        box.style.boxShadow = `${calcX}px ${calcY}px 50px rgba(0,0,0,0.2)`;
      });
  
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };
  });
  