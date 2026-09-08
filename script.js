document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.nav'),menu=document.querySelector('.menu'),links=document.querySelector('.links');
 if(menu&&links) menu.addEventListener('click',()=>links.classList.toggle('open'));
 document.querySelectorAll('.nav-drop .drop-btn').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();b.parentElement.classList.toggle('open')}));
 document.querySelectorAll('.links a').forEach(a=>{try{if(a.pathname===location.pathname)a.classList.add('active')}catch(e){}});
 const bar=document.createElement('div');bar.className='scroll-progress';document.body.prepend(bar);
 const top=document.createElement('button');top.className='back-top';top.textContent='↑';top.setAttribute('aria-label','Back to top');document.body.appendChild(top);top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 const book=document.createElement('a');book.className='floating-book';book.href='booking.html';book.textContent='✦ Book Your Detail';document.body.appendChild(book);
 const toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
 const hero=document.querySelector('.hero'); if(hero){const imgs=['https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=2000&q=90','https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=2000&q=90','https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=90','https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2000&q=90'];let i=0;setInterval(()=>{i=(i+1)%imgs.length;hero.style.backgroundImage=`linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.38),rgba(0,0,0,.8)),url(${imgs[i]})`},6000)}
 const slides=document.querySelector('.slides');if(slides){let i=0,imgs=slides.children,dots=document.querySelectorAll('.dot');const go=n=>{i=(n+imgs.length)%imgs.length;slides.style.transform=`translateX(-${i*100}%)`;dots.forEach((d,k)=>d.classList.toggle('on',k===i))};const next=document.querySelector('.next'),prev=document.querySelector('.prev');if(next)next.onclick=()=>go(i+1);if(prev)prev.onclick=()=>go(i-1);dots.forEach((d,k)=>d.onclick=()=>go(k));setInterval(()=>go(i+1),4500)}
 const reviews=document.querySelectorAll('.review');if(reviews.length){let r=0;reviews[0].classList.add('show');setInterval(()=>{reviews[r].classList.remove('show');r=(r+1)%reviews.length;reviews[r].classList.add('show')},3500)}
 const range=document.querySelector('.range'),after=document.querySelector('.after');if(range&&after)range.oninput=()=>after.style.width=range.value+'%';
 const form=document.querySelector('#bookingForm');if(form)form.onsubmit=e=>{e.preventDefault();toast.textContent='✓ Booking request received — we will contact you shortly.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500);form.reset()};
 const onScroll=()=>{let h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(scrollY/h*100)+'%';nav?.classList.toggle('scrolled',scrollY>20);top.classList.toggle('show',scrollY>500)};addEventListener('scroll',onScroll,{passive:true});onScroll();
 document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
 // Premium mouse-follow neon cursor (desktop only)
 if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
   const dot=document.createElement('div'); dot.className='cursor-dot';
   const ring=document.createElement('div'); ring.className='cursor-ring';
   const glow=document.createElement('div'); glow.className='cursor-glow';
   document.body.append(dot,ring,glow);
   let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,gx=mx,gy=my,lastTrail=0;
   addEventListener('mousemove',e=>{
     mx=e.clientX; my=e.clientY;
     if(Date.now()-lastTrail>34){
       const t=document.createElement('span');t.className='cursor-trail';
       t.style.left=mx+'px';t.style.top=my+'px';document.body.appendChild(t);
       setTimeout(()=>t.remove(),560);lastTrail=Date.now();
     }
     const el=e.target.closest('a,button,.card,.slides img,input,select,textarea');
     document.body.classList.toggle('cursor-hover',!!el);
     if(el && el.classList.contains('card')) el.classList.add('cursor-active');
     document.querySelectorAll('.cursor-active').forEach(x=>{if(x!==el)x.classList.remove('cursor-active')});
   },{passive:true});
   const loop=()=>{
     rx+=(mx-rx)*.18; ry+=(my-ry)*.18;
     gx+=(mx-gx)*.07; gy+=(my-gy)*.07;
     dot.style.left=rx+'px';dot.style.top=ry+'px';
     ring.style.left=rx+'px';ring.style.top=ry+'px';
     glow.style.left=gx+'px';glow.style.top=gy+'px';
     requestAnimationFrame(loop);
   }; loop();
   addEventListener('mousedown',()=>document.body.classList.add('cursor-click'));
   addEventListener('mouseup',()=>document.body.classList.remove('cursor-click'));
 }

});