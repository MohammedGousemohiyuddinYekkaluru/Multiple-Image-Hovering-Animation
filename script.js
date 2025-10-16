let elem = document.querySelectorAll('.elem');

elem.forEach(function(val){
    let img = val.querySelector('img')
    val.addEventListener("mousemove", function(e){
        img.style.left = e.offsetX + 'px';
        img.style.top = e.offsetY + 'px';
    });
    val.addEventListener('mouseenter', function(){
        img.style.opacity = 1;
    });
    val.addEventListener('mouseleave', function(){
        img.style.opacity = 0;
    });
});


