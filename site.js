(()=>{
const WA='919310961150',EMAIL='tarkbyteofficial@gmail.com';
const WA_SVG='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
const SERVICES=['Agentic AI Solutions','Web & App Development','Software Solutions','Design & SEO','Tech Advisory','Developer Resources','Edubyte (School ERP)','Aaharbyte (Restaurant POS)','Other'];
const TYPES={quote:['Get a Quote','Tell us what you need and we\'ll send a quote.'],project:['Start a Project','Share your requirement. A short description is enough to start.'],career:['Get Career Help','Resume, interviews or job search: tell us where you need help.']};
const nav=document.getElementById('nav');
if(nav){const f=()=>nav.classList.toggle('scrolled',scrollY>40);addEventListener('scroll',f,{passive:true});f()}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(el=>{const sib=[...el.parentElement.children].filter(c=>c.classList.contains('rv'));el.style.transitionDelay=Math.min(sib.indexOf(el)*45,270)+'ms';io.observe(el)});
document.querySelectorAll('[data-href]').forEach(c=>c.addEventListener('click',e=>{if(e.target.closest('a,button'))return;location.href=c.dataset.href}));
const opt=a=>a.map(x=>'<option>'+x+'</option>').join('');
const m=document.createElement('div');m.className='fm';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-labelledby','fm-h');
m.innerHTML='<div class="fm-box"><div class="fm-top"><span>Tarkbyte · Enquiry</span><button class="fm-x" type="button" aria-label="Close">✕</button></div>'+
'<form class="fm-body" novalidate><h3 id="fm-h">Get a Quote</h3><p class="fm-lede" id="fm-l"></p>'+
'<div class="fm-types">'+Object.entries(TYPES).map(([k,v])=>'<button type="button" class="fm-type" data-t="'+k+'">'+v[0]+'</button>').join('')+'</div>'+
'<div class="fm-grid">'+
'<div class="fm-f"><label for="fm-name">Name *</label><input id="fm-name" name="name" autocomplete="name"><span class="e">Please enter your name.</span></div>'+
'<div class="fm-f"><label for="fm-phone">Phone / WhatsApp *</label><input id="fm-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel"><span class="e">Please enter a valid phone number.</span></div>'+
'<div class="fm-f full"><label for="fm-email">Email</label><input id="fm-email" name="email" type="email" autocomplete="email"></div>'+
'<div class="fm-f biz"><label for="fm-svc">Service</label><select id="fm-svc" name="service">'+opt(SERVICES)+'</select></div>'+
'<div class="fm-f biz"><label for="fm-tl">Timeline</label><select id="fm-tl" name="timeline">'+opt(['Not sure yet','As soon as possible','Within 1 month','1–3 months','3+ months'])+'</select></div>'+
'<div class="fm-f biz full"><label for="fm-bud">Budget</label><select id="fm-bud" name="budget">'+opt(['Not sure yet','Under ₹50,000','₹50,000 – ₹2,00,000','₹2,00,000 – ₹5,00,000','Above ₹5,00,000'])+'</select></div>'+
'<div class="fm-f car"><label for="fm-help">I need help with</label><select id="fm-help" name="help">'+opt(['Resume / CV building','Mock interview','Interview preparation','Job consultancy'])+'</select></div>'+
'<div class="fm-f car"><label for="fm-exp">Experience</label><select id="fm-exp" name="exp">'+opt(['Fresher','1–3 years','3–7 years','7+ years'])+'</select></div>'+
'<div class="fm-f car full"><label for="fm-role">Target role</label><input id="fm-role" name="role" placeholder="e.g. Python Developer, Product Manager"></div>'+
'<div class="fm-f full"><label for="fm-msg">Message *</label><textarea id="fm-msg" name="msg"></textarea><span class="e">Please add a short description.</span></div>'+
'</div><button class="fm-sub" type="submit">'+WA_SVG+'Send on WhatsApp</button>'+
'<p class="fm-note">Opens WhatsApp with your details filled in. Prefer email? <a href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></form>'+
'<div class="fm-done"><h3 style="font-family:var(--serif);font-weight:400;font-size:36px;line-height:1.05">Almost done.</h3><p>WhatsApp has opened in a new tab with your message. Press send there and we\'ll reply within 24 hours.</p><div class="row"><a class="btn btn-solid" id="fm-again" target="_blank" rel="noopener" href="#">Open WhatsApp again</a><button class="btn btn-line" type="button" id="fm-close2" style="color:var(--night);border-color:var(--night);background:none;cursor:pointer">Close</button></div></div></div>';
document.body.appendChild(m);
const F=m.querySelector('form'),$=s=>m.querySelector(s);let type='quote',lastFocus=null;
const setType=t=>{type=TYPES[t]?t:'quote';$('#fm-h').textContent=TYPES[type][0];$('#fm-l').textContent=TYPES[type][1];m.querySelectorAll('.fm-type').forEach(b=>{b.classList.toggle('on',b.dataset.t===type);b.setAttribute('aria-pressed',b.dataset.t===type)});m.querySelectorAll('.biz').forEach(x=>x.hidden=type==='career');m.querySelectorAll('.car').forEach(x=>x.hidden=type!=='career')};
m.querySelectorAll('.fm-type').forEach(b=>b.addEventListener('click',()=>setType(b.dataset.t)));
const open=(t,svc)=>{lastFocus=document.activeElement;m.classList.remove('sent');setType(t);if(svc){const s=$('#fm-svc');const o=[...s.options].find(o=>o.text===svc);if(o)s.value=o.text}m.classList.add('open');document.documentElement.style.overflow='hidden';setTimeout(()=>$('#fm-name').focus(),60);waSync()};
const close=()=>{m.classList.remove('open');document.documentElement.style.overflow='';if(lastFocus)lastFocus.focus();waSync()};
$('.fm-x').addEventListener('click',close);$('#fm-close2').addEventListener('click',close);
m.addEventListener('click',e=>{if(e.target===m)close()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))close()});
document.addEventListener('click',e=>{const b=e.target.closest('[data-form]');if(!b)return;e.preventDefault();open(b.dataset.form,b.dataset.service)});
const v=id=>$('#'+id).value.trim();
F.addEventListener('submit',e=>{e.preventDefault();const chk=[['fm-name',v('fm-name').length>1],['fm-phone',v('fm-phone').replace(/\D/g,'').length>=10],['fm-msg',v('fm-msg').length>2]];let ok=true;chk.forEach(([id,g])=>{$('#'+id).closest('.fm-f').classList.toggle('err',!g);if(!g&&ok){ok=false;$('#'+id).focus()}});if(!ok)return;
const L=['*'+TYPES[type][0]+' · Tarkbyte website*','','Name: '+v('fm-name'),'Phone: '+v('fm-phone')];if(v('fm-email'))L.push('Email: '+v('fm-email'));
if(type==='career'){L.push('Help with: '+v('fm-help'),'Experience: '+v('fm-exp'));if(v('fm-role'))L.push('Target role: '+v('fm-role'))}else L.push('Service: '+v('fm-svc'),'Timeline: '+v('fm-tl'),'Budget: '+v('fm-bud'));
L.push('','Message:',v('fm-msg'));const url='https://wa.me/'+WA+'?text='+encodeURIComponent(L.join('\n'));$('#fm-again').href=url;window.open(url,'_blank','noopener');m.classList.add('sent')});
m.querySelectorAll('input,textarea').forEach(i=>i.addEventListener('input',()=>i.closest('.fm-f').classList.remove('err')));
const waSync=()=>{};
window.TB={open,close};
})();