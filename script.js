const canvas=document.getElementById("atomCanvas"),ctx=canvas.getContext("2d");
const elementSelect=document.getElementById("element"),orbitalButtons=document.getElementById("orbitalButtons");
const densitySlider=document.getElementById("density"),sizeSlider=document.getElementById("size"),speedSlider=document.getElementById("speed");
const densityValue=document.getElementById("densityValue"),sizeValue=document.getElementById("sizeValue"),speedValue=document.getElementById("speedValue");
const atomicNumberEl=document.getElementById("atomicNumber"),electronCountEl=document.getElementById("electronCount"),outerShellEl=document.getElementById("outerShell"),capacityEl=document.getElementById("capacity");
const elementSymbol=document.getElementById("elementSymbol"),elementName=document.getElementById("elementName"),elementMeta=document.getElementById("elementMeta"),nucleusText=document.getElementById("nucleusText");
const configuration=document.getElementById("configuration"),shells=document.getElementById("shells");
const orbitalTitle=document.getElementById("orbitalTitle"),orbitalDescription=document.getElementById("orbitalDescription"),modeBadge=document.getElementById("modeBadge"),measurement=document.getElementById("measurement"),measureBtn=document.getElementById("measureBtn");

const elements=[
["H","Hydrogen","الهيدروجين"],["He","Helium","الهيليوم"],["Li","Lithium","الليثيوم"],["Be","Beryllium","البيريليوم"],["B","Boron","البورون"],["C","Carbon","الكربون"],["N","Nitrogen","النيتروجين"],["O","Oxygen","الأكسجين"],["F","Fluorine","الفلور"],["Ne","Neon","النيون"],
["Na","Sodium","الصوديوم"],["Mg","Magnesium","المغنيسيوم"],["Al","Aluminium","الألومنيوم"],["Si","Silicon","السيليكون"],["P","Phosphorus","الفوسفور"],["S","Sulfur","الكبريت"],["Cl","Chlorine","الكلور"],["Ar","Argon","الأرجون"],["K","Potassium","البوتاسيوم"],["Ca","Calcium","الكالسيوم"],
["Sc","Scandium","السكانديوم"],["Ti","Titanium","التيتانيوم"],["V","Vanadium","الفاناديوم"],["Cr","Chromium","الكروم"],["Mn","Manganese","المنغنيز"],["Fe","Iron","الحديد"],["Co","Cobalt","الكوبالت"],["Ni","Nickel","النيكل"],["Cu","Copper","النحاس"],["Zn","Zinc","الزنك"],
["Ga","Gallium","الغاليوم"],["Ge","Germanium","الجرمانيوم"],["As","Arsenic","الزرنيخ"],["Se","Selenium","السيلينيوم"],["Br","Bromine","البروم"],["Kr","Krypton","الكريبتون"],["Rb","Rubidium","الروبيديوم"],["Sr","Strontium","السترونشيوم"],["Y","Yttrium","الإيتريوم"],["Zr","Zirconium","الزركونيوم"],
["Nb","Niobium","النيوبيوم"],["Mo","Molybdenum","الموليبدينوم"],["Tc","Technetium","التكنيشيوم"],["Ru","Ruthenium","الروثينيوم"],["Rh","Rhodium","الروديوم"],["Pd","Palladium","البلاديوم"],["Ag","Silver","الفضة"],["Cd","Cadmium","الكادميوم"],["In","Indium","الإنديوم"],["Sn","Tin","القصدير"],
["Sb","Antimony","الأنتيمون"],["Te","Tellurium","التيلوريوم"],["I","Iodine","اليود"],["Xe","Xenon","الزينون"],["Cs","Cesium","السيزيوم"],["Ba","Barium","الباريوم"],["La","Lanthanum","اللانثانوم"],["Ce","Cerium","السيريوم"],["Pr","Praseodymium","البراسيوديميوم"],["Nd","Neodymium","النيوديميوم"],
["Pm","Promethium","البروميثيوم"],["Sm","Samarium","الساماريوم"],["Eu","Europium","اليوروبيوم"],["Gd","Gadolinium","الغادولينيوم"],["Tb","Terbium","التيربيوم"],["Dy","Dysprosium","الديسبروسيوم"],["Ho","Holmium","الهولميوم"],["Er","Erbium","الإربيوم"],["Tm","Thulium","الثوليوم"],["Yb","Ytterbium","الإيتربيوم"],
["Lu","Lutetium","اللوتيتيوم"],["Hf","Hafnium","الهافنيوم"],["Ta","Tantalum","التنتالوم"],["W","Tungsten","التنغستن"],["Re","Rhenium","الرينيوم"],["Os","Osmium","الأوزميوم"],["Ir","Iridium","الإيريديوم"],["Pt","Platinum","البلاتين"],["Au","Gold","الذهب"],["Hg","Mercury","الزئبق"],
["Tl","Thallium","الثاليوم"],["Pb","Lead","الرصاص"],["Bi","Bismuth","البزموت"],["Po","Polonium","البولونيوم"],["At","Astatine","الأستاتين"],["Rn","Radon","الرادون"],["Fr","Francium","الفرانسيوم"],["Ra","Radium","الراديوم"],["Ac","Actinium","الأكتينيوم"],["Th","Thorium","الثوريوم"],
["Pa","Protactinium","البروتكتينيوم"],["U","Uranium","اليورانيوم"],["Np","Neptunium","النبتونيوم"],["Pu","Plutonium","البلوتونيوم"],["Am","Americium","الأمريسيوم"],["Cm","Curium","الكوريوم"],["Bk","Berkelium","البركيليوم"],["Cf","Californium","الكاليفورنيوم"],["Es","Einsteinium","الأينشتاينيوم"],["Fm","Fermium","الفرميوم"],
["Md","Mendelevium","المندليفيوم"],["No","Nobelium","النوبليوم"],["Lr","Lawrencium","اللورنسيوم"],["Rf","Rutherfordium","الرذرفورديوم"],["Db","Dubnium","الدوبنيوم"],["Sg","Seaborgium","السيبورغيوم"],["Bh","Bohrium","البوهريوم"],["Hs","Hassium","الهاسيوم"],["Mt","Meitnerium","الميتنريوم"],["Ds","Darmstadtium","الدارمشتاتيوم"],
["Rg","Roentgenium","الرونتجينيوم"],["Cn","Copernicium","الكوبيرنيسيوم"],["Nh","Nihonium","النيهونيوم"],["Fl","Flerovium","الفليروفيوم"],["Mc","Moscovium","الموسكوفيوم"],["Lv","Livermorium","الليفرموريوم"],["Ts","Tennessine","التينيسين"],["Og","Oganesson","الأوغانيسون"]
].map((e,i)=>({symbol:e[0],en:e[1],ar:e[2],z:i+1}));

// Standard aufbau order used for a teaching-level ground-state configuration.
const order=[
["1s",2,1,0],["2s",2,2,0],["2p",6,2,1],["3s",2,3,0],["3p",6,3,1],
["4s",2,4,0],["3d",10,3,2],["4p",6,4,1],["5s",2,5,0],["4d",10,4,2],
["5p",6,5,1],["6s",2,6,0],["4f",14,4,3],["5d",10,5,2],["6p",6,6,1],
["7s",2,7,0],["5f",14,5,3],["6d",10,6,2],["7p",6,7,1]
];

const orbitalInfo={s:{l:0,label:"كروي"},p:{l:1,label:"فصّان"},d:{l:2,label:"أشكال رباعية/حلقيّة"},f:{l:3,label:"أشكال متعددة الفصوص"}};
let currentOrbital="1s",particles=[],measurements=[],stars=[],rotation=0,tilt=.25,zoom=1,dragging=false,lastX=0,lastY=0,lastTime=performance.now(),currentZ=1;

elements.forEach(e=>{const o=document.createElement("option");o.value=e.z;o.textContent=`${e.z}. ${e.symbol} — ${e.en} (${e.ar})`;elementSelect.appendChild(o)});

function configFor(z){
  let left=z, out=[];
  for(const [name,cap,n,l] of order){
    const e=Math.min(left,cap); if(e){out.push({name,e,cap,n,l});left-=e}
    if(!left)break;
  }
  // A few famous ground-state exceptions are corrected for educational accuracy.
  const exceptions={24:[["4s",1],["3d",5]],29:[["4s",1],["3d",10]],41:[["5s",1],["4d",4]],42:[["5s",1],["4d",5]],44:[["5s",1],["4d",7]],45:[["5s",1],["4d",8]],46:[["5s",0],["4d",10]],47:[["5s",1],["4d",10]],78:[["6s",1],["5d",9]],79:[["6s",1],["5d",10]],89:[["7s",2],["5f",0],["6d",1]],90:[["7s",2],["5f",0],["6d",2]],91:[["7s",2],["5f",2],["6d",1]],92:[["7s",2],["5f",3],["6d",1]]};
  if(exceptions[z]){
    const map=new Map(out.map(x=>[x.name,x]));
    for(const [name,e] of exceptions[z]) if(map.has(name)) map.get(name).e=e;
    out=[...map.values()].filter(x=>x.e>0);
  }
  return out;
}

function getOrbital(name){
  const m=name.match(/(\d)([spdf])/); return {n:+m[1],type:m[2],l:orbitalInfo[m[2]].l};
}

function populateOrbitalButtons(){
  orbitalButtons.innerHTML="";
  const cfg=configFor(currentZ);
  const occupied=new Set(cfg.map(x=>x.name));
  // Show every currently relevant subshell up to 7p, while highlighting occupied ones.
  for(const [name,cap,n,l] of order){
    const b=document.createElement("button");b.className="orbital-btn"+(name===currentOrbital?" active ":"")+(occupied.has(name)?" occupied":"");
    b.dataset.orbital=name;
    b.innerHTML=`${name}<small>${occupied.has(name)?"مشغول":"غير مشغول"}</small>`;
    b.onclick=()=>{currentOrbital=name;regenerateParticles();updateUI();measurement.textContent="تم اختيار "+name+".";};
    orbitalButtons.appendChild(b);
  }
}

function randomNormal(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)}

function makeParticle(name){
  const {n,l}=getOrbital(name);
  // Educational probability-cloud sampler. Angular terms distinguish s,p,d,f.
  let r=Math.pow(Math.random(),1/3)*(2.0+n*.95),theta=Math.acos(2*Math.random()-1),phi=Math.random()*Math.PI*2;
  let x=r*Math.sin(theta)*Math.cos(phi),y=r*Math.sin(theta)*Math.sin(phi),z=r*Math.cos(theta);
  if(l===1){const sign=Math.random()<.5?-1:1;const a=Math.abs(Math.cos(theta))**.55;z=sign*r*a;x*=.62;y*=.62}
  if(l===2){const a=Math.abs(Math.sin(theta)*Math.cos(2*phi));x=r*a*Math.cos(phi);y=r*a*Math.sin(phi);z=r*Math.cos(theta)*.68}
  if(l===3){const a=Math.abs(Math.sin(theta)*Math.cos(3*phi));x=r*a*Math.cos(phi);y=r*a*Math.sin(phi);z=r*Math.cos(theta)*.75}
  // n-dependent radial rings/nodes, kept deliberately simple.
  const nodeFactor=0.72+0.28*Math.abs(Math.sin(r*(1.1+.25*n)));
  x*=nodeFactor;y*=nodeFactor;z*=nodeFactor;
  x+=randomNormal()*.04;y+=randomNormal()*.04;z+=randomNormal()*.04;
  return{x,y,z,phase:Math.random()*Math.PI*2};
}

function regenerateParticles(){particles=Array.from({length:+densitySlider.value},()=>makeParticle(currentOrbital))}

function rotatePoint(p,a,v){const ca=Math.cos(a),sa=Math.sin(a);let x=p.x*ca-p.z*sa,z=p.x*sa+p.z*ca,y=p.y;const cv=Math.cos(v),sv=Math.sin(v);return{x,y:y*cv-z*sv,z:y*sv+z*cv}}
function project(p,cx,cy,scale){const perspective=1/(1+p.z*.045);return{x:cx+p.x*scale*perspective,y:cy+p.y*scale*perspective,size:perspective,depth:p.z}}
function resizeCanvas(){const r=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.floor(r.width*dpr));canvas.height=Math.max(1,Math.floor(r.height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:110},()=>({x:Math.random()*r.width,y:Math.random()*r.height,r:Math.random()*1.4+.2,a:Math.random()*.4+.1}))}

function drawBackground(w,h){ctx.clearRect(0,0,w,h);for(const s of stars){ctx.beginPath();ctx.fillStyle=`rgba(180,215,255,${s.a})`;ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}const g=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,Math.min(w,h)*.48);g.addColorStop(0,"rgba(70,130,220,.10)");g.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}

function drawNucleus(cx,cy,r){
  const glow=ctx.createRadialGradient(cx-r*.3,cy-r*.35,1,cx,cy,r);glow.addColorStop(0,"#fff");glow.addColorStop(.14,"#ffb1dc");glow.addColorStop(.52,"#ff4f9a");glow.addColorStop(1,"rgba(140,30,100,.12)");
  ctx.beginPath();ctx.fillStyle=glow;ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.strokeStyle="rgba(255,130,200,.45)";ctx.lineWidth=1.5;ctx.arc(cx,cy,r*1.65,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle="#fff";ctx.font="bold 12px Segoe UI";ctx.textAlign="center";ctx.fillText(elements[currentZ-1].symbol,cx,cy+4);ctx.textAlign="start";
}

function draw(now){
  const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;drawBackground(w,h);
  const cx=w/2,cy=h/2;
  // Larger Z means stronger nuclear attraction; visual scale decreases slightly with Z.
  const zFactor=1/Math.pow(currentZ,.16);
  const base=Math.min(w,h)/11*zoom*+sizeSlider.value*zFactor;
  const projected=particles.map(p=>{const a={x:p.x+Math.sin(now*.0004+p.phase)*.035*+speedSlider.value,y:p.y+Math.cos(now*.00035+p.phase)*.035*+speedSlider.value,z:p.z};return {...project(rotatePoint(a,rotation,tilt),cx,cy,base),original:p}}).sort((a,b)=>a.depth-b.depth);
  for(const p of projected){const q=Math.max(.25,Math.min(1.1,p.size));ctx.beginPath();ctx.fillStyle=`rgba(91,190,255,${.055+q*.09})`;ctx.arc(p.x,p.y,q*2.2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.fillStyle=`rgba(125,215,255,${.16+q*.22})`;ctx.arc(p.x,p.y,Math.max(.55,1.25*q),0,Math.PI*2);ctx.fill()}
  drawNucleus(cx,cy,Math.max(7,base*.065));
  for(const m of measurements){const p=project(rotatePoint(m,rotation,tilt),cx,cy,base);const a=Math.max(0,1-m.age/2800);ctx.beginPath();ctx.fillStyle=`rgba(101,230,166,${a})`;ctx.shadowBlur=12;ctx.shadowColor="rgba(101,230,166,.7)";ctx.arc(p.x,p.y,4.5,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}
  measurements.forEach(m=>m.age+=16);measurements=measurements.filter(m=>m.age<=2800);requestAnimationFrame(draw)
}

function updateUI(){
  const e=elements[currentZ-1],cfg=configFor(currentZ),d=getOrbital(currentOrbital),info=orbitalInfo[d.type];
  elementSymbol.textContent=e.symbol;elementName.textContent=`${e.en} — ${e.ar}`;elementMeta.textContent=`Z = ${currentZ}`;
  atomicNumberEl.textContent=currentZ;electronCountEl.textContent=currentZ;
  const maxN=Math.max(...cfg.map(x=>x.n));outerShellEl.textContent=`n = ${maxN}`;capacityEl.textContent=2*maxN*maxN;
  nucleusText.textContent=`${currentZ} بروتون + ${Math.max(0,Math.round(currentZ*1.2-currentZ*.1))} نيوترون*`;
  orbitalTitle.textContent=`${currentOrbital} — أوربيتال ${info.label}`;
  orbitalDescription.textContent=`المستوى الرئيسي n = ${d.n}، ونوع الأوربيتال ${d.type}. اللون الأزرق يمثل كثافة احتمالية تعليمية.`;
  modeBadge.textContent=`${d.type.toUpperCase()} ORBITAL`;
  densityValue.textContent=densitySlider.value;sizeValue.textContent=`${(+sizeSlider.value).toFixed(2)}×`;speedValue.textContent=`${(+speedSlider.value).toFixed(1)}×`;
  configuration.innerHTML=cfg.map(x=>`<span class="config-chip"><b>${x.name}</b><sup>${x.e}</sup></span>`).join("");
  const shellCounts={};cfg.forEach(x=>shellCounts[x.n]=(shellCounts[x.n]||0)+x.e);shells.innerHTML=Object.entries(shellCounts).map(([n,c])=>`<span class="shell">n=${n}: ${c} e⁻</span>`).join("");
  populateOrbitalButtons();
}

function measureElectron(){
  const s=makeParticle(currentOrbital);measurements.push({...s,age:0});
  measurement.innerHTML=`تم القياس 🎯<br>النتيجة المحتملة: <strong>(x=${s.x.toFixed(2)}, y=${s.y.toFixed(2)}, z=${s.z.toFixed(2)})</strong><br>بتكرار القياس تتشكل الصورة الإحصائية للسحابة.`;
}

elementSelect.addEventListener("change",()=>{currentZ=+elementSelect.value;const cfg=configFor(currentZ);const occupied=cfg.map(x=>x.name);if(!occupied.includes(currentOrbital))currentOrbital=occupied[occupied.length-1]||"1s";measurements=[];regenerateParticles();updateUI();measurement.textContent=`تم تغيير الذرة إلى ${elements[currentZ-1].en}. لاحظ تغيّر Z والتوزيع الإلكتروني والأوربيتالات المشغولة.`});
densitySlider.addEventListener("input",()=>{regenerateParticles();updateUI()});sizeSlider.addEventListener("input",updateUI);speedSlider.addEventListener("input",updateUI);measureBtn.addEventListener("click",measureElectron);
canvas.addEventListener("pointerdown",e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener("pointermove",e=>{if(!dragging)return;rotation+=(e.clientX-lastX)*.008;tilt+=(e.clientY-lastY)*.006;tilt=Math.max(-1.2,Math.min(1.2,tilt));lastX=e.clientX;lastY=e.clientY});
canvas.addEventListener("pointerup",()=>dragging=false);canvas.addEventListener("pointercancel",()=>dragging=false);
canvas.addEventListener("wheel",e=>{e.preventDefault();zoom*=e.deltaY<0?1.08:.93;zoom=Math.max(.55,Math.min(2.6,zoom))},{passive:false});
window.addEventListener("resize",resizeCanvas);

elementSelect.value="1";currentZ=1;resizeCanvas();updateUI();regenerateParticles();requestAnimationFrame(draw);

const elementSearch=document.getElementById('elementSearch');
if(elementSearch){
 elementSearch.addEventListener('input',()=>{
   const q=elementSearch.value.toLowerCase().trim();
   const opts=[...elementSelect.options];
   const hit=opts.find(o=>o.text.toLowerCase().includes(q) || o.value.toLowerCase().includes(q));
   if(hit){ elementSelect.value=hit.value; elementSelect.dispatchEvent(new Event('change'));}
 });
}


/* ===== Quantum Atom Simulator v10 ===== */
(function(){
function electronConfig(z){
 const order=[["1s",2],["2s",2],["2p",6],["3s",2],["3p",6],["4s",2],["3d",10],["4p",6],["5s",2],["4d",10],["5p",6],["6s",2],["4f",14],["5d",10],["6p",6],["7s",2],["5f",14],["6d",10],["7p",6]];
 let left=z,res=[];
 for(const [o,c] of order){
   if(left<=0) break;
   const fill=Math.min(left,c);
   res.push(o + fill);
   left-=fill;
 }
 return res;
}

function shellsUsed(cfg){
 const set=new Set();
 cfg.forEach(x=>{
   const m=x.match(/^(\d)/);
   if(m) set.add(Number(m[1]));
 });
 return [...set].sort((a,b)=>a-b);
}

function updateV10(){
 try{
   const panel=document.getElementById('qdContent');
   const sel=document.querySelector('#element');
   if(!panel || !sel) return;

   const z=sel.selectedIndex+1;
   const cfg=electronConfig(z);
   const shells=shellsUsed(cfg);

   panel.innerHTML=
     'Z = '+z+'<br>'+
     'Shells: '+shells.join(', ')+'<br>'+
     'Levels: '+shells.length+'<br>'+
     '<small>'+cfg.slice(0,12).join(' ')+'</small>';
 }catch(e){}
}

document.addEventListener('change', updateV10);
window.addEventListener('load', ()=>setTimeout(updateV10,500));
})();

// ===== V10.1 ENERGY LEVELS =====
function shellCountFromZ(z){
 if(z<=2)return 1;
 if(z<=10)return 2;
 if(z<=18)return 3;
 if(z<=36)return 4;
 if(z<=54)return 5;
 if(z<=86)return 6;
 return 7;
}
function updateEnergyLevels(){
 const box=document.getElementById("energyLevels");
 if(!box||!elementSelect)return;
 const z=elementSelect.selectedIndex+1;
 const levels=shellCountFromZ(z);
 let h='<div style="display:flex;gap:8px;flex-wrap:wrap">';
 for(let i=1;i<=levels;i++){
   h+=`<div style="width:${20+i*8}px;height:${20+i*8}px;border:2px solid #61c8ff;border-radius:50%;display:flex;align-items:center;justify-content:center">${i}</div>`;
 }
 h+='</div><p>'+levels+' مستويات طاقة نشطة</p>';
 box.innerHTML=h;
}
setInterval(updateEnergyLevels,500);
