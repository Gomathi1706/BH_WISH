const page=document.body.dataset.page;
/* floating white & light-blue hearts */
function floatHeart(host,colors,z){
  const h=document.createElement('span');
  h.textContent='♥';h.className=host;
  h.style.left=Math.random()*100+'vw';
  h.style.fontSize=(14+Math.random()*28)+'px';
  h.style.color=colors[Math.floor(Math.random()*colors.length)];
  h.style.textShadow='0 0 6px #8ed1fc';
  h.style.animationDuration=(6+Math.random()*6)+'s';
  document.body.appendChild(h);setTimeout(()=>h.remove(),13000);
}
for(let k=0;k<28;k++){const st=document.createElement('span');st.className='star';const z=2+Math.random()*4;
  st.style.cssText=`left:${Math.random()*100}vw;top:${Math.random()*100}vh;width:${z}px;height:${z}px;animation-delay:${Math.random()*3}s`;document.body.appendChild(st)}
setInterval(()=>floatHeart('bgheart',['#ffffff','#8ed1fc','#bfe6ff']),900);

/* ===== PAGE 1: welcome ===== */
if(page==='home'){
  document.getElementById('openBtn').onclick=()=>{
    document.getElementById('gift').classList.add('open');
    const r=document.getElementById('gift').getBoundingClientRect();
    for(let k=0;k<26;k++){const sp=document.createElement('span');sp.className='spark';sp.textContent=k%2?'✦':'♥';
      sp.style.left=(r.left+r.width/2)+'px';sp.style.top=(r.top+20)+'px';
      sp.style.setProperty('--dx',(Math.random()*300-150)+'px');sp.style.setProperty('--dy',(-Math.random()*260-40)+'px');
      document.body.appendChild(sp);setTimeout(()=>sp.remove(),1200)}
    setTimeout(()=>location.href='memories.html',1100);
  };
}

/* ===== PAGE 2: memories ===== */
if(page==='memories'){
  // EDIT HERE: change src / caption. Use type:'video' for a video file.
  const memories=[
    const memories=[
  {type:'photo',src:'memory1.jpg',caption:'Memory 1 🤍'},
  {type:'video',src:'video1.mp4',caption:'Our video 🩵'},
  {type:'photo',src:'memory2.jpg',caption:'Memory 3 🤍'},
  {type:'none'},
  {type:'photo',src:'memory3.jpg',caption:'Memory 5 🩵'},
  {type:'photo',src:'memory4.jpg',caption:'Memory 6 🤍'},
  {type:'none'},
  {type:'photo',src:'memory5.jpg',caption:'Memory 8 🩵'},
  {type:'photo',src:'memory6.jpg',caption:'Memory 9 🤍'}
];
  ];
  const grid=document.getElementById('grid');
  memories.forEach((m,i)=>{
    const b=document.createElement('div');b.className='box';
    let inner;
    if(m.type==='none') inner='<p>Sorry, inga memories edhum illa 🥹🤍</p>';
    else if(m.type==='video') inner=`<video controls playsinline preload="metadata" src="${m.src}" onerror="this.outerHTML='<p>Add your video: ${m.src}</p>'"></video><p>${m.caption}</p>`;
    else inner=`<img src="${m.src}" alt="Memory ${i+1}" onerror="this.outerHTML='<p>Add your photo: ${m.src}</p>'"><p>${m.caption}</p>`;
    b.innerHTML=`<button>${m.type==='video'?'🎬':'💙'} Memory ${i+1}</button><div class="content">${inner}</div>`;
    b.querySelector('button').onclick=()=>b.classList.toggle('open');
    grid.appendChild(b);
  });
}

/* ===== PAGE 3: letter ===== */
if(page==='letter'){
  // EDIT HERE: change the letter to your own words
  const letter=`To my Thangooo, Bhavana Kanagaraj 🤍🫂

Happy Birthday, en Thangooo! 🤍🧸

Sometimes, I think about how namma friendship start aachu nu. Same class, same desk-la onna ukkandhu irundhom. Class adviser edho details fill panna sonnappo, enakku ellame pudhusa irundhuchu. Hostel-la irundhadhunaala WhatsApp-ku lock vera pottu vachirundhen. Nee enakku help pannumbodhu adha paathuttu, “Nee enna dhaan secret-ah vachirukka?” nu ketta. 😂🤍

Andha oru question-la start aana conversation, oru naal enakku ivlo special-aana bond-ah maarum nu appo enakku theriyadhu, mahh. But now, nee just en classmate illa. Nee ennoda Thangooo. En life-la vandha oru beautiful person. 🤍

But mahh, inniku un birthday-naala happy moments mattum pesanum nu naan nenakkala. Un manasula evlo pain irukkum nu enakku konjam puriyudhu. Un appa-va miss panradhu evlo kashtam nu naan completely understand pannitten nu solla maatten, because andha pain unnodadhu. Aana, nee adha thaniya carry panna vendam nu mattum solluven.

Sila nerangal-la ellame normal-ah irukkura maari theriyum. Aana oru small thing, oru memory, oru moment kooda avangala romba miss panna vachidum. Andha maari moments-la nee strong-ah irukkanum nu yaarum unkitte force panna vendam. Azhanum-na azhu, pesa thonala-na silent-ah iru. Ellathayum udane overcome pannanum nu avasiyam illa, mahh. Un feelings-ku time kudu. 🤍🫂

Enakku theriyum, unakku ulla evlo kashtam irukkum nu. Un appa ippo nijathula un pakkathula illa-naalum, avanga unakku kudutha anbu, memories, avanga un life-la vittuttu pona impact — idhellam unna vittu pogadhu, mahh. Avanga un nizhala maari, nee carry pannura memories-layum, un manasulayum iruppanga nu naan namburen. Nee edha achieve pannalum, edha face pannalum, avangala nee ninaikkura andha love un kooda irukkum.

Maybe, nee indha letter padikkumbodhu azhuva. Maybe smile pannuva. Maybe rendu feelings-um ore time-la varum. Edhuva irundhaalum parava illa, Thangoo. Nee un feelings-ah hide panna vendiya avasiyam illa. 🤍

And one thing, mahh — unakku yaar irundhaalum, illainaalum, naan unakkaga iruppen. Nee right-ah irundhaalum, wrong-ah irundhaalum, first un side-la ninnu unna listen pannuven. Nee thappu pannina, unna hurt pannaama unakku puriya vaippen. Nee correct-ah irundha, unakku support-ah iruppen. Unna judge pannradhukku munnadi, unna purinjukka try pannuvaen. Because namma friendship-na enakku adhu dhaan.

Life inga mudinjidala, en Thangooo. Innum evlo places paakka vendiyadhu irukku, evlo memories create pannanum, evlo sirikkanum, evlo dreams achieve pannanum! Sila days romba hard-ah irukkum. Sila days yaarum namma pain-ah purinjukka maataanga nu thonum. Aana andha days permanent illa, mahh. Un life-la innum beautiful moments varum. Adhukkaga nee rush panna vendam 🤍🕊️

And please, nee ellarukkagavum strong-ah irukkanum nu nenachu unakkulla irukkuradha suppress pannadha. Unakkum care venum. Unakkum comfort venum. Unakkum oruthanga “Naan irukken, mahh” nu sollanum. So here I am, saying it to you.

Indha Gomzhhh unakkaga irukken, Thangooo. 🫂🤍

Un happy days-la un kooda childish-ah sirikka, un sad days-la un pakkathula ukkara, unakku pesa thonumbodhu listen panna, unakku edhuvum pesa thonala-na summa un kooda irukka — ennaala mudinja varaikkum naan iruppen.

Un birthday-naala nee happy-ah irukkanum nu mattum illa. Nee loved-ah feel pannanum. Nee important nu unakku theriyanum. Un presence indha world-la oruthangalukku evlo precious nu nee marandhuda koodadhu.

Thank you for becoming my Thangoo. Thank you for that little conversation that started everything. Namma friendship innum neraya years continue aaganum; innum neraya memories create pannanum; future-la indha days-ah thirumbi paathu, “Paathiya, namma evlo distance vandhirukkom!” nu sirikkanum. 🤍

Happy Birthday once again, en Thangooo, Bhavana Kanagaraj. 🎂🤍

No matter how life changes, I hope you always remember this:

You don't have to face every storm alone. Somewhere beside you, there's your Gomzhhh Thangoo🩵, cheering for you, caring for you, and wishing to see you smile again.

Forever your Gomzhhh. 🤍🫂`;
  const paper=document.getElementById('paper');
  let i=0,paused=false,timer;
  paper.classList.add('cursor');
  function tick(){
    if(paused)return;
    if(i<letter.length){
      paper.firstChild?paper.firstChild.nodeValue+=letter[i]:paper.appendChild(document.createTextNode(letter[i]));
      i++;paper.scrollTop=paper.scrollHeight;
      const c=letter[i-1];
      timer=setTimeout(tick,/[.,!?]/.test(c)?280:(c==='\n'?150:22));
    }else{paper.classList.remove('cursor');document.getElementById('next').style.display='inline-block'}
  }
  tick();
  const pb=document.getElementById('pause');
  pb.onclick=()=>{
    paused=!paused;
    pb.textContent=paused?'▶ Resume':'⏸ Pause';
    if(!paused)tick();else clearTimeout(timer);
  };
  document.getElementById('full').onclick=()=>{
    clearTimeout(timer);paused=true;i=letter.length;
    paper.textContent=letter;paper.classList.remove('cursor');
    pb.style.display='none';document.getElementById('next').style.display='inline-block';
  };
}

/* ===== PAGE 4: finale ===== */
if(page==='finale'){
  const input=document.getElementById('wish'),hint=document.getElementById('hint');
  const party=document.getElementById('party'),cv=document.getElementById('cv'),ctx=cv.getContext('2d');
  const cols=['#ffffff','#bfe6ff','#8ed1fc','#d9f0ff'];
  let parts=[],conf=[],raf,hearts;
  function size(){cv.width=innerWidth;cv.height=innerHeight}
  addEventListener('resize',size);
  function burst(){
    const x=Math.random()*cv.width,y=Math.random()*cv.height*.55,c=cols[Math.floor(Math.random()*cols.length)];
    for(let k=0;k<60;k++){const a=Math.random()*6.283,s=1+Math.random()*4;
      parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:70,c});}
  }
  function confetti(){conf.push({x:Math.random()*cv.width,y:-10,vy:2+Math.random()*3,vx:Math.random()*2-1,w:6+Math.random()*6,c:cols[Math.floor(Math.random()*4)],r:Math.random()*6})}
  function loop(){
    ctx.fillStyle='rgba(6,17,31,.25)';ctx.fillRect(0,0,cv.width,cv.height);
    parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.04;p.l--;ctx.globalAlpha=Math.max(p.l/70,0);ctx.fillStyle=p.c;ctx.beginPath();ctx.arc(p.x,p.y,2.2,0,6.283);ctx.fill()});
    parts=parts.filter(p=>p.l>0);
    conf.forEach(f=>{f.y+=f.vy;f.x+=f.vx;f.r+=.1;ctx.globalAlpha=1;ctx.fillStyle=f.c;ctx.fillRect(f.x,f.y,f.w,f.w*.5)});
    conf=conf.filter(f=>f.y<cv.height+20);
    if(Math.random()<.04)burst();
    if(Math.random()<.5)confetti();
    raf=requestAnimationFrame(loop);
  }
  function start(){
    party.classList.add('show');size();loop();burst();burst();
    hearts=setInterval(()=>floatHeart('fh',['#ffffff','#8ed1fc','#bfe6ff']),250);
  }
  function check(){
    if(input.value.trim().toLowerCase()==='happy birthday to meeee')start();
    else hint.textContent='Hmm, type it exactly: happy birthday to meeee 🤍';
  }
  document.getElementById('go').onclick=check;
  input.addEventListener('keydown',e=>{if(e.key==='Enter')check()});
  document.getElementById('close').onclick=()=>{
    party.classList.remove('show');cancelAnimationFrame(raf);clearInterval(hearts);parts=[];conf=[];
  };
}
/* ===== LOCK until Nov 1 ===== */
const UNLOCK_DATE=new Date(2026,10,1,0,0,0); // 1 Nov 2026, 12:00 AM
const TEST_MODE=false; // testing-ku mattum true pannunga, sending-ku munnadi false
(function(){
  if(TEST_MODE||new Date()>=UNLOCK_DATE)return;
  const ov=document.createElement('div');ov.id='lock';
  ov.innerHTML='<div class="lockbox"><div class="lockicon">🔒</div><h2>Something special is waiting for you, Thangoo 🤍</h2><p>Ippo open aagadhu... Nov 1 varaikkum wait pannunga 🩵</p><div class="units" id="lu"></div></div>';
  document.body.appendChild(ov);
  document.body.style.overflow='hidden';
  const lu=ov.querySelector('#lu');
  function tick(){
    const d=UNLOCK_DATE-new Date();
    if(d<=0){clearInterval(iv);location.reload();return}
    const parts=[[Math.floor(d/864e5),'Days'],[Math.floor(d%864e5/36e5),'Hours'],[Math.floor(d%36e5/6e4),'Mins'],[Math.floor(d%6e4/1e3),'Secs']];
    lu.innerHTML=parts.map(([n,l])=>`<div class="unit"><b>${n}</b><span>${l}</span></div>`).join('');
  }
  const iv=setInterval(tick,1000);tick();
})();
