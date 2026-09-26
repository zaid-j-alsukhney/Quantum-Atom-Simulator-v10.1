(function(){
  'use strict';
  const $ = id => document.getElementById(id);
  const qs = sel => [...document.querySelectorAll(sel)];
  const tabs = qs('.lesson-tab');
  const pages = qs('.lesson-page');
  const element = $('element');

  const L = {s:0,p:1,d:2,f:3};
  const typeNames = {s:'كروي',p:'ثنائي الفص',d:'أكثر تعقيدًا',f:'أكثر تعقيدًا'};
  const modeMeta = {
    explore:{
      label:'استكشاف',
      desc:'ابدأ بمشاهدة الذرة، ثم غيّر العنصر والأوربيتال ولاحظ ما يتغير.',
      help:'استكشف بحرية، ثم ارجع إلى بطاقات الدرس لربط ما تراه بالمفاهيم المدرسية.'
    },
    learn:{
      label:'تعليمي',
      desc:'اقرأ الدرس خطوة بخطوة، واستخدم المحاكاة لتثبيت معنى أعداد الكم والأفلاك ومستويات الطاقة.',
      help:'هذا الوضع يركز على الفهم والملاحظة وفق مفاهيم الدرس.'
    }
  };

  function activeOrbital(){
    const b=document.querySelector('.orbital-btn.active');
    if(b?.dataset?.orbital) return b.dataset.orbital;
    return typeof window.currentOrbital==='string' ? window.currentOrbital : '1s';
  }

  function currentZ(){
    const v=Number(element?.value);
    return Number.isFinite(v)&&v>0?v:1;
  }

  function currentElementName(){
    const hero=$('elementName');
    return hero ? hero.textContent.split(' — ')[0] : 'Hydrogen';
  }

  function orbitalParts(orbital){
    const m=String(orbital||'1s').match(/(\d)([spdf])/);
    return {n:m?Number(m[1]):1,type:m?m[2]:'s',l:m?L[m[2]]:0};
  }

  function principalLevels(z){
    try{
      const cfg=typeof configFor==='function'?configFor(z):[];
      return cfg.length?Math.max(...cfg.map(x=>Number(x.n)||1)):1;
    }catch(_){return 1;}
  }

  function shellMapHTML(){
    const source=qs('#shells .shell').map(x=>x.textContent.trim());
    const names=['K','L','M','N','O','P','Q'];
    return source.length ? source.map((txt,i)=>`<span class="shell-pill"><b>${names[i]||`n=${i+1}`}</b>${txt.replace(/^n=\d+:\s*/,'')}</span>`).join('') : '<span class="shell-pill"><b>K</b>1 e⁻</span>';
  }

  function setMode(mode){
    if(!modeMeta[mode]) mode='explore';
    document.body.dataset.lessonMode=mode;
    qs('.lesson-mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
    const meta=modeMeta[mode];
    if($('modeDescription')) $('modeDescription').textContent=meta.desc;
    if($('modeHelp')) $('modeHelp').textContent=meta.help;
    if($('quickModeLabel')) $('quickModeLabel').textContent=meta.label;
    try{localStorage.setItem('qasLessonMode',mode);}catch(_){}
  }

  function updateLiveExplain(){
    const orbital=activeOrbital();
    const {n,type,l}=orbitalParts(orbital);
    const z=currentZ();
    const shellCount=principalLevels(z);
    if($('lessonElement')) $('lessonElement').textContent=currentElementName()||`Z=${z}`;
    if($('lessonLevels')) $('lessonLevels').textContent=String(shellCount);
    if($('lessonOrbital')) $('lessonOrbital').textContent=orbital;
    if($('lessonL')) $('lessonL').textContent=String(l);
    if($('mainN')) $('mainN').textContent=String(n);
    if($('mainL')) $('mainL').textContent=String(l);
    if($('mainML')) $('mainML').textContent=l===0?'0':`−${l} … +${l}`;
    if($('mainMS')) $('mainMS').textContent='±½';
    if($('quickOrbital')) $('quickOrbital').textContent=orbital;
    const capacity=2*(2*l+1);
    const M = x => `<span class="math" dir="ltr">${x}</span>`;
    const explanation=`${M(orbital)}: العدد الرئيس ${M(`n=${n}`)} يحدد مستوى الطاقة الرئيس، والعدد الفرعي ${M(`ℓ=${l}`)} يحدد نوع المستوى الفرعي وشكل الفلك. يحتوي هذا المستوى الفرعي على ${M(String(2*l+1))} أفلاك، وسعته القصوى ${M(String(capacity))} إلكترونًا. ${M('mℓ')} يرتبط باتجاه الفلك، و${M('mₛ')} له قيمتان ${M('±½')}.`;
    if($('mainExplanation')) $('mainExplanation').innerHTML=explanation;
    if($('lessonObservation')) $('lessonObservation').innerHTML=`الأوربيتال ${M(orbital)} من النوع ${M(type.toUpperCase())} (${typeNames[type]}). الرقم ${M(String(n))} يدل على مستوى الطاقة الرئيس، والحرف ${M(type)} يدل على المستوى الفرعي وشكل الفلك. العنصر الحالي له ${M(String(shellCount))} مستويات رئيسة مشغولة.`;
    if($('lessonShellMap')) $('lessonShellMap').innerHTML=shellMapHTML();
  }

  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    const key=tab.dataset.lesson;
    tabs.forEach(t=>t.classList.toggle('active',t===tab));
    pages.forEach(p=>p.classList.toggle('active',p.dataset.page===key));
  }));

  qs('.lesson-mode-btn').forEach(btn=>btn.addEventListener('click',()=>setMode(btn.dataset.mode)));

  function syncOrbitalVisual(type){
    qsa('.orbital-3d-card').forEach(c=>c.classList.toggle('active',c.dataset.shape===type));
    const note=document.getElementById('orbitalModelNote');
    if(note) note.innerHTML=orbitalNotes[type]||'';
    if(typeof window.setOrbitalViewPreset==='function') window.setOrbitalViewPreset(type);
  }

  qs('.type-card').forEach(btn=>btn.addEventListener('click',()=>{
    const type=btn.dataset.orbitalType;
    const target=qs('.orbital-btn').find(b=>b.dataset.orbital?.endsWith(type));
    if(target){
      target.click();
      syncOrbitalVisual(type);
      $('atomCanvas')?.scrollIntoView({behavior:'smooth',block:'center'});
    }
    updateLiveExplain();
  }));

  document.addEventListener('click',e=>{
    const orb=e.target.closest('.orbital-btn');
    if(!orb) return;
    const type=(orb.dataset.orbital||'1s').slice(-1);
    syncOrbitalVisual(type);
  });

  $('revealReview')?.addEventListener('click',()=>{
    const answer=$('reviewAnswer');
    answer.hidden=!answer.hidden;
    $('revealReview').textContent=answer.hidden?'إظهار الإجابات':'إخفاء الإجابات';
  });

  element?.addEventListener('change',()=>setTimeout(updateLiveExplain,80));
  document.addEventListener('click',e=>{
    if(e.target.closest('.orbital-btn')) setTimeout(updateLiveExplain,40);
  });

  let saved='explore';
  try{saved=localStorage.getItem('qasLessonMode')||'explore';}catch(_){}
  setMode(saved);
  updateLiveExplain();
})();

/* ===== V13 interactions ===== */
(function(){
  const qsa = s => [...document.querySelectorAll(s)];
  const modelButtons=qsa('.model-switch-btn');
  const modelPanels=qsa('.model-view');
  modelButtons.forEach(btn=>btn.addEventListener('click',()=>{
    const key=btn.dataset.modelView;
    modelButtons.forEach(b=>b.classList.toggle('active',b===btn));
    modelPanels.forEach(p=>{
      const active=p.dataset.modelPanel===key;
      p.classList.toggle('active',active);
      p.hidden=!active;
    });
  }));

  const orbitalNotes={
    s:'<strong>s:</strong> السحابة كروية حول النواة، ولذلك يوجد فلك واحد فقط في المستوى الفرعي s.',
    p:'<strong>p:</strong> له فصّان رئيسيان، ويأتي في ثلاثة أفلاك متعامدة تقريبًا: <span class="math">pₓ</span> و<span class="math">pᵧ</span> و<span class="math">p_z</span>.',
    d:'<strong>d:</strong> المستوى الفرعي d يحتوي خمسة أفلاك مختلفة الاتجاه/التركيب الزاوي. ليست خمسة رسومات عشوائية؛ إنها خمس حالات فلكية متمايزة. الرسم هنا مثال تمثيلي، وليس الشكل الوحيد. <span class="math">ℓ=2 → 2ℓ+1=5</span>.',
    f:'<strong>f:</strong> المستوى الفرعي f يحتوي سبعة أفلاك، ولذلك قد ترى تمثيلات مختلفة عند رسمها. كل فلك له تركيب واتجاه زاوي خاص، والمجموعة كلها هي المستوى الفرعي f. <span class="math">ℓ=3 → 2ℓ+1=7</span>.'
  };
  qsa('.orbital-3d-card').forEach(btn=>btn.addEventListener('click',()=>{
    qsa('.orbital-3d-card').forEach(b=>b.classList.toggle('active',b===btn));
    const note=document.getElementById('orbitalModelNote');
    if(note) note.innerHTML=orbitalNotes[btn.dataset.shape]||'';
  }));
})();
