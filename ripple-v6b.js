(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const hosts=[...document.querySelectorAll('#services,#labs,#about,#approach,#faq')];
const spawn=(s,x,y,d)=>{const el=document.createElement('span');el.className='rip big';el.setAttribute('aria-hidden','true');el.style.setProperty('--rx',x+'px');el.style.setProperty('--ry',y+'px');el.style.setProperty('--rd',d+'ms');s.insertBefore(el,s.firstChild);el.addEventListener('animationend',()=>el.remove())};
hosts.forEach(s=>{s.classList.add('rip-host');let inside=false;
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!inside){inside=true;const r=s.getBoundingClientRect(),x=r.width*(.3+Math.random()*.4),y=r.top>0?0:r.height;[0,1].forEach(k=>spawn(s,x,y,k*260))}else if(!e.isIntersecting)inside=false}),{threshold:.12}).observe(s)});
})();