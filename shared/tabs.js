/* Goes with shared/tabs.css: cuts each square's icon out of its plate, the same way the home page tabs do. */
(function(){
  [].forEach.call(document.querySelectorAll('.sw .chip'),function(chip){
    var use=chip.querySelector('use');if(!use)return;
    var sym=document.querySelector(use.getAttribute('href'));if(!sym)return;
    var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+sym.getAttribute('viewBox')+'">'+sym.innerHTML+'</svg>';
    chip.style.setProperty('--ic','url("data:image/svg+xml,'+encodeURIComponent(svg)+'")');
    chip.classList.add('is-cut');
  });
})();
