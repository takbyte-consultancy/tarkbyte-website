(()=>{
const B=[[8,10,'rgba(125,211,252,.75)'],[28,14,'rgba(255,255,255,.55)'],[46,9,'rgba(147,214,255,.8)'],[62,13,'rgba(59,130,246,.85)'],[82,10,'rgba(255,138,0,.6)']];
const beams=()=>'<div class="hp-beams">'+B.map(([x,w,col],i)=>'<span class="bm" style="--x:'+x+'%;--w:'+w+'%;--col:'+col+';--d:'+(6+i*1.3).toFixed(1)+'s;--dl:-'+(i*1.7).toFixed(1)+'s"></span>').join('')+'</div>';
document.querySelectorAll('.hero,footer').forEach(el=>{
const hp=document.createElement('div');hp.className='hp';hp.setAttribute('aria-hidden','true');hp.innerHTML=beams()+(el.matches('footer')?'<div class="hp-flute"></div>':'');
el.insertBefore(hp,el.firstChild);if(el.matches('.hero'))el.dataset.pattern='beams';
new IntersectionObserver(es=>es.forEach(e=>el.classList.toggle('paused',!e.isIntersecting))).observe(el)});
})();