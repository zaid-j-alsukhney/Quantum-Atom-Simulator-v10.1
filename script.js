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
    b.onclick=()=>{currentOrbital=name; setOrbitalViewPreset(getOrbital(name).type); measurement.textContent="تم اختيار "+name+" وتمت معايرة زاوية العرض للشكل.";};
    orbitalButtons.appendChild(b);
  }
}

function randomNormal(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)}

// --- Wave-mechanical orbital sampler ---------------------------------------
// The selected orbital is sampled from the hydrogen-like probability density
// |psi_nlm|^2 = |R_nl(r)|^2 |Y_lm(theta,phi)|^2.
// We use m=0 for the educational visualization so s/p/d/f nodal structure is
// visible without introducing an extra magnetic-orientation selector.
function legendreP(l,x){
  if(l===0)return 1;
  if(l===1)return x;
  let p0=1,p1=x;
  for(let k=2;k<=l;k++){const p=((2*k-1)*x*p1-(k-1)*p0)/k;p0=p1;p1=p}
  return p1;
}
function assocLaguerre(k,a,x){
  if(k===0)return 1;
  if(k===1)return 1+a-x;
  let l0=1,l1=1+a-x;
  for(let j=2;j<=k;j++){
    const lj=((2*j-1+a-x)*l1-(j-1+a)*l0)/j;
    l0=l1;l1=lj;
  }
  return l1;
}
const radialTables=new Map();
function radialTable(n,l){
  const key=`${n}-${l}`; if(radialTables.has(key))return radialTables.get(key);
  const N=900, maxR=Math.max(12,n*n*2.2), step=maxR/(N-1), vals=[];
  let maxW=0;
  for(let i=0;i<N;i++){
    const rho=i*step;
    const x=2*rho/n;
    const L=assocLaguerre(n-l-1,2*l+1,x);
    const R=Math.exp(-x/2)*Math.pow(Math.max(x,1e-9),l)*L;
    const w=rho*rho*R*R;
    vals.push(w); if(w>maxW)maxW=w;
  }
  const cdf=[]; let sum=0;
  for(const w of vals){sum+=w;cdf.push(sum)}
  for(let i=0;i<cdf.length;i++)cdf[i]/=sum||1;
  const table={step,maxR,vals,cdf,maxW};radialTables.set(key,table);return table;
}
function sampleRadial(n,l){
  const t=radialTable(n,l), target=Math.random(), c=t.cdf;
  let lo=0,hi=c.length-1;
  while(lo<hi){const mid=(lo+hi)>>1;if(c[mid]<target)lo=mid+1;else hi=mid}
  const i=Math.max(1,lo), c0=c[i-1],c1=c[i], f=(target-c0)/Math.max(1e-9,c1-c0);
  return ((i-1)+f)*t.step;
}
function sampleWaveAngle(l){
  // |Y_l0|^2 is proportional to P_l(cos(theta))^2.
  // Rejection sampling over mu=cos(theta) keeps the exact nodal zeros.
  let mu,weight;
  do{mu=Math.random()*2-1;const P=legendreP(l,mu);weight=P*P;}while(Math.random()>weight);
  return Math.acos(mu);
}
function makeParticle(name){
  const {n,l}=getOrbital(name);
  const rho=sampleRadial(n,l);
  const theta=sampleWaveAngle(l), phi=Math.random()*Math.PI*2;

  // rho is a dimensionless hydrogenic radius. Normalize each orbital to a
  // comparable visual size while retaining its radial nodes and shape.
  const visualRadius=(rho/(n*n))*1.55;
  let x=visualRadius*Math.sin(theta)*Math.cos(phi);
  let y=visualRadius*Math.sin(theta)*Math.sin(phi);
  let z=visualRadius*Math.cos(theta);

  // Tiny jitter prevents identical projected pixels while keeping nodal
  // planes/rings sharp. It is deliberately much smaller than the cloud.
  x+=randomNormal()*.006;y+=randomNormal()*.006;z+=randomNormal()*.006;
  return{x,y,z,phase:Math.random()*Math.PI*2};
}

let shellParticles=[];

function buildShellParticles(total){
  const cfg=configFor(currentZ);
  const shellNs=[...new Set(cfg.map(x=>x.n))].sort((a,b)=>a-b);
  if(total<=0 || !shellNs.length){shellParticles=[];return;}

  // The orbital selector is intentionally applied to EVERY visible energy
  // shell. This is a visualization mode: n still controls the shell radius,
  // while the selected s/p/d/f type controls the angular appearance of all
  // shells. That makes the orbital control immediately visible across the
  // whole atom instead of changing only one shell.
  const selected=getOrbital(currentOrbital);
  const l=selected.l;
  const levels=shellNs.length;
  const baseCount=Math.floor(total/levels);
  const remainder=total-baseCount*levels;
  const shellSpacing=1.38;
  shellParticles=[];

  shellNs.forEach((n,shellIndex)=>{
    const level=+n;
    const count=baseCount+(shellIndex<remainder?1:0);
    const shellRadius=1.05+(level-1)*shellSpacing;

    for(let i=0;i<count;i++){
      const theta=sampleWaveAngle(l);
      const phi=Math.random()*Math.PI*2;
      const u=Math.cos(theta);
      const tangential=Math.sqrt(Math.max(0,1-u*u));
      let nx=tangential*Math.cos(phi), ny=u, nz=tangential*Math.sin(phi);

      // Keep every shell visually narrow and concentric. The angular part comes
      // from the selected orbital, while the principal quantum number comes
      // from the shell itself.
      const sigmaAbs=0.19+Math.min(0.035,level*0.004);
      const offset=Math.max(-0.58,Math.min(0.58,randomNormal()*sigmaAbs));
      const norm=Math.hypot(nx,ny,nz)||1;
      nx/=norm; ny/=norm; nz/=norm;

      shellParticles.push({
        level,nx,ny,nz,
        radialOffset:offset/shellRadius,
        sigma:sigmaAbs/shellRadius,
        phase:Math.random()*Math.PI*2,
        orbital:currentOrbital
      });
    }
  });
}

function regenerateParticles(){
  const total=Math.max(1,+densitySlider.value);
  // Keep the selected orbital visibly prominent while making the shell structure
  // the dominant background probability cloud.
  const shellCount=Math.min(22500,Math.max(160,Math.floor(total*0.70)));
  const orbitalCount=Math.max(1,total-shellCount);
  particles=Array.from({length:orbitalCount},()=>makeParticle(currentOrbital));
  buildShellParticles(shellCount);
}

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


function getEnergyShellCount(){
  const cfg=configFor(currentZ);
  return cfg.length ? Math.max(...cfg.map(x=>x.n)) : 1;
}

function drawEnergyShells(cx,cy,w,h,base,tiltAngle){
  const levels=getEnergyShellCount();
  const shellSpacing=1.38;
  const outerRadius=base*(1.05+(levels-1)*shellSpacing+0.62);
  const step=base*shellSpacing;
  const labels=['K','L','M','N','O','P','Q'];
  const ellipseFactor=Math.max(.28,Math.min(.96,Math.cos(tiltAngle)));

  ctx.save();
  for(let i=1;i<=levels;i++){
    const radius=base*(1.05+(i-1)*shellSpacing);
    // Guide ring is deliberately subtle; the particle cloud carries the probability.
    const glow=0.022 + i/levels*0.012;
    ctx.beginPath();
    ctx.strokeStyle=`rgba(97,200,255,${glow})`;
    ctx.lineWidth=i===levels?1.2:.85;
    ctx.setLineDash([8,10]);
    ctx.ellipse(cx,cy,radius,radius*ellipseFactor,rotation*0.16,0,Math.PI*2);
    ctx.stroke();
    if(i<=labels.length){
      ctx.setLineDash([]);ctx.fillStyle='rgba(190,225,255,.72)';ctx.font='700 10px Segoe UI';ctx.textAlign='center';
      ctx.fillText(`${labels[i-1]} • n=${i}`,cx+radius*.72,cy-radius*ellipseFactor*.72);ctx.textAlign='start';
    }
  }
  ctx.restore();

  if(!shellParticles.length) return;
  const points=shellParticles.map(p=>{
    const shellRadius=1.05+(p.level-1)*shellSpacing;
    const radius=shellRadius*(1+p.radialOffset);
    const drift=.010*(+speedSlider.value);
    const phase=p.phase;
    const v={
      x:p.nx*radius + Math.sin(phase+rotation)*drift,
      y:p.ny*radius + Math.cos(phase+tiltAngle)*drift,
      z:p.nz*radius + Math.sin(phase*.73+tiltAngle)*drift
    };
    const projected=project(rotatePoint(v,rotation,tiltAngle),cx,cy,base);
    const shellDensity=Math.exp(-0.5*Math.pow(p.radialOffset/p.sigma,2));
    return {...projected,level:p.level,shellDensity};
  }).sort((a,b)=>a.depth-b.depth);

  for(const p of points){
    const q=Math.max(.35,Math.min(1.25,p.size));
    const alpha=(0.028+q*0.070)*(0.38+1.05*p.shellDensity);
    const radius=.60+q*(0.82+0.65*p.shellDensity);
    ctx.beginPath();ctx.fillStyle=`rgba(139,190,255,${alpha})`;ctx.arc(p.x,p.y,radius,0,Math.PI*2);ctx.fill();
  }
}

function draw(now){
  const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;drawBackground(w,h);
  const cx=w/2,cy=h/2;
  const zFactor=1/Math.pow(currentZ,.16);
  const base=Math.min(w,h)/11*zoom*+sizeSlider.value*zFactor;
  drawEnergyShells(cx,cy,w,h,base,tilt);
  const projected=particles.map(p=>{const a={x:p.x+Math.sin(now*.0004+p.phase)*.035*+speedSlider.value,y:p.y+Math.cos(now*.00035+p.phase)*.035*+speedSlider.value,z:p.z};return {...project(rotatePoint(a,rotation,tilt),cx,cy,base),original:p}}).sort((a,b)=>a.depth-b.depth);
  for(const p of projected){const q=Math.max(.25,Math.min(1.1,p.size));ctx.beginPath();ctx.fillStyle=`rgba(91,190,255,${.055+q*.09})`;ctx.arc(p.x,p.y,q*2.2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.fillStyle=`rgba(125,215,255,${.16+q*.22})`;ctx.arc(p.x,p.y,Math.max(.55,1.25*q),0,Math.PI*2);ctx.fill()}
  drawNucleus(cx,cy,Math.max(7,base*.065));
  for(const m of measurements){const p=project(rotatePoint(m,rotation,tilt),cx,cy,base);const a=Math.max(0,1-m.age/2800);ctx.beginPath();ctx.fillStyle=`rgba(101,230,166,${a})`;ctx.shadowBlur=12;ctx.shadowColor="rgba(101,230,166,.7)";ctx.arc(p.x,p.y,4.5,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}
  measurements.forEach(m=>m.age+=16);measurements=measurements.filter(m=>m.age<=2800);requestAnimationFrame(draw)
}

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


function getEnergyShellCount(){
  const cfg=configFor(currentZ);
  return cfg.length ? Math.max(...cfg.map(x=>x.n)) : 1;
}

function drawEnergyShells(cx,cy,w,h,base,tiltAngle){
  const levels=getEnergyShellCount();
  // Use the same atom scale as the cloud: zoom/size/Z scaling affects shells too.
  const outerRadius=base*(2.45 + levels*0.56);
  const step=outerRadius/Math.max(levels,1);
  const labels=['K','L','M','N','O','P','Q'];
  const ellipseFactor=Math.max(.26,Math.min(.96,Math.cos(tiltAngle)));

  ctx.save();
  for(let i=1;i<=levels;i++){
    const radius=step*i;
    // Faint guide ring only; probability points are the primary representation.
    const glow=0.015 + i/levels*0.012;
    ctx.beginPath();
    ctx.strokeStyle=`rgba(97,200,255,${glow})`;
    ctx.lineWidth=i===levels?1.2:.75;
    ctx.setLineDash([7,8]);
    ctx.ellipse(cx,cy,radius,radius*ellipseFactor,rotation*0.16,0,Math.PI*2);
    ctx.stroke();

    if(i<=labels.length){
      ctx.setLineDash([]);
      ctx.fillStyle='rgba(190,225,255,.72)';
      ctx.font='700 10px Segoe UI';
      ctx.textAlign='center';
      ctx.fillText(`${labels[i-1]} • n=${i}`,cx+radius*.72,cy-radius*ellipseFactor*.72);
      ctx.textAlign='start';
    }
  }
  ctx.restore();

  if(!shellParticles.length) return;
  const points=shellParticles.map(p=>{
    const shellRadius=step*p.level;
    const radius=shellRadius*(1+p.radialOffset);
    const drift=.008*(+speedSlider.value);
    const phase=p.phase;
    const v={
      x:p.nx*(radius/base) + Math.sin(phase+rotation)*drift,
      y:p.ny*(radius/base) + Math.cos(phase+tiltAngle)*drift,
      z:p.nz*(radius/base) + Math.sin(phase*.73+tiltAngle)*drift
    };
    const projected=project(rotatePoint(v,rotation,tiltAngle),cx,cy,base);
    const shellDensity=Math.exp(-0.5*Math.pow(p.radialOffset/p.sigma,2));
    return {...projected,level:p.level,shellDensity};
  }).sort((a,b)=>a.depth-b.depth);

  for(const p of points){
    const q=Math.max(.35,Math.min(1.25,p.size));
    // Strongest at the middle of the shell's radial thickness, fading toward edges.
    const alpha=(0.035 + q*0.075)*(0.45 + 0.8*p.shellDensity);
    const radius=.65 + q*(0.9 + 0.55*p.shellDensity);
    ctx.beginPath();
    ctx.fillStyle=`rgba(139,190,255,${alpha})`;
    ctx.arc(p.x,p.y,radius,0,Math.PI*2);
    ctx.fill();
  }
}
function draw(now){
  const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;drawBackground(w,h);
  const cx=w/2,cy=h/2;
  // Larger Z means stronger nuclear attraction; visual scale decreases slightly with Z.
  const zFactor=1/Math.pow(currentZ,.16);
  const base=Math.min(w,h)/11*zoom*+sizeSlider.value*zFactor;
  drawEnergyShells(cx,cy,w,h,base,tilt);
  const projected=particles.map(p=>{const a={x:p.x+Math.sin(now*.0004+p.phase)*.035*+speedSlider.value,y:p.y+Math.cos(now*.00035+p.phase)*.035*+speedSlider.value,z:p.z};return {...project(rotatePoint(a,rotation,tilt),cx,cy,base),original:p}}).sort((a,b)=>a.depth-b.depth);
  for(const p of projected){const q=Math.max(.25,Math.min(1.1,p.size));ctx.beginPath();ctx.fillStyle=`rgba(91,190,255,${.055+q*.09})`;ctx.arc(p.x,p.y,q*2.2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.fillStyle=`rgba(125,215,255,${.16+q*.22})`;ctx.arc(p.x,p.y,Math.max(.55,1.25*q),0,Math.PI*2);ctx.fill()}
  drawNucleus(cx,cy,Math.max(7,base*.065));
  for(const m of measurements){const p=project(rotatePoint(m,rotation,tilt),cx,cy,base);const a=Math.max(0,1-m.age/2800);ctx.beginPath();ctx.fillStyle=`rgba(101,230,166,${a})`;ctx.shadowBlur=12;ctx.shadowColor="rgba(101,230,166,.7)";ctx.arc(p.x,p.y,4.5,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}
  measurements.forEach(m=>m.age+=16);measurements=measurements.filter(m=>m.age<=2800);requestAnimationFrame(draw)
}

window.setOrbitalViewPreset=function(type){
  const presets={s:{r:0.00,t:0.20},p:{r:0.00,t:0.00},d:{r:Math.PI/4,t:0.28},f:{r:Math.PI/4,t:0.42}};
  const v=presets[type]||presets.s;
  rotation=v.r; tilt=v.t; measurements=[]; regenerateParticles(); updateUI();
  const canvas=document.getElementById('atomCanvas');
  if(canvas){canvas.dataset.orbitalType=type; canvas.classList.remove('orbital-s','orbital-p','orbital-d','orbital-f'); canvas.classList.add('orbital-'+type);}
};

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



/* ===== V10.5 persistent controls ===== */
(function(){
  try{
    densitySlider.max='30000';
    speedSlider.max='5';
    densitySlider.addEventListener('input',()=>{ if(+densitySlider.value>30000)densitySlider.value=30000; });
    speedSlider.addEventListener('input',()=>{ if(+speedSlider.value>5)speedSlider.value=5; });
  }catch(e){}
})();


/* V10.7 persistent controls */
window.addEventListener('load',()=>{
 try{ densitySlider.max='30000'; speedSlider.max='5'; updateUI(); }catch(e){}
});

// Interactive self-test: each answer starts hidden and is revealed by its own button.
document.querySelectorAll('.answer-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const item = button.closest('.self-test-item');
    const isHidden = answer.hasAttribute('hidden');
    if (isHidden) {
      answer.removeAttribute('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.textContent = '🙈 إخفاء الجواب';
      item.classList.add('revealed');
    } else {
      answer.setAttribute('hidden', '');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '👁️ إظهار الجواب';
      item.classList.remove('revealed');
    }
  });
});

/* ===== V12.2 global learning improvements ===== */
(function(){
  'use strict';

  const guide = document.getElementById('symbolGuide');
  const openGuide = document.getElementById('openSymbolGuide');
  const closeGuide = document.getElementById('closeSymbolGuide');
  openGuide?.addEventListener('click',()=>{ guide?.removeAttribute('hidden'); guide?.scrollIntoView({behavior:'smooth',block:'nearest'}); });
  closeGuide?.addEventListener('click',()=>guide?.setAttribute('hidden',''));

  const speakMap = {
    'n':'en', 'ell':'ell', 'm ell':'m ell', 'm s':'m s',
    's':'s', 'p':'p', 'd':'d', 'f':'f', 'orbital':'orbital', 'quantum numbers':'quantum numbers'
  };
  document.querySelectorAll('.speak-symbol').forEach(btn=>btn.addEventListener('click',()=>{
    const phrase=speakMap[btn.dataset.speak]||btn.dataset.speak;
    if(!('speechSynthesis' in window)){ btn.textContent='🔊 النطق غير متاح'; return; }
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(phrase);
    u.lang='en-US'; u.rate=.82; u.pitch=1;
    speechSynthesis.speak(u);
  }));

  const allBtn=document.getElementById('toggleAllAnswers');
  const status=document.getElementById('answerStatus');
  const items=()=>[...document.querySelectorAll('.self-test-item')];
  function setAll(show){
    items().forEach(item=>{
      const answer=item.querySelector('.hidden-answer');
      const btn=item.querySelector('.answer-toggle');
      if(!answer||!btn)return;
      if(show){answer.removeAttribute('hidden');btn.setAttribute('aria-expanded','true');btn.textContent='🙈 إخفاء الجواب';item.classList.add('revealed');}
      else{answer.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');btn.textContent='👁️ إظهار الجواب';item.classList.remove('revealed');}
    });
    if(allBtn){allBtn.setAttribute('aria-expanded',String(show));allBtn.textContent=show?'🙈 إخفاء جميع الإجابات':'👁️ إظهار جميع الإجابات';}
    if(status)status.textContent=show?'ظهرت جميع الإجابات. يمكنك إخفاؤها مرة أخرى.':'كل الإجابات مخفية — حاول أولًا قبل الكشف عنها.';
  }
  allBtn?.addEventListener('click',()=>{
    const anyHidden=items().some(i=>i.querySelector('.hidden-answer')?.hasAttribute('hidden'));
    setAll(anyHidden);
  });

  /* Keep technical symbols visually isolated from RTL Arabic so equations read naturally. */
  const root=document.querySelector('.lesson-copy');
  if(root){
    const patterns=[
      /\b\d+[spdf]\b/g,/\b(?:n|ℓ)\s*=\s*[0-9]+\b/g,/\bm[ℓₛ]\b/g,/\b(?:n²|2n²|2ℓ\+1)\b/g,
      /p[ₓᵧz]/g,/[+−-]?\s*1\/2/g,/±½/g
    ];
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
      if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
      const parent=node.parentElement;
      if(!parent||parent.closest('script,style,button,.math'))return NodeFilter.FILTER_REJECT;
      return patterns.some(re=>{re.lastIndex=0;return re.test(node.nodeValue)})?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
    }});
    const nodes=[];let n;while(n=walker.nextNode())nodes.push(n);
    nodes.forEach(node=>{
      let text=node.nodeValue, changed=false;
      patterns.forEach(re=>{
        re.lastIndex=0;
        text=text.replace(re,m=>{changed=true;return `@@MATH@@${m}@@END@@`;});
      });
      if(!changed)return;
      const frag=document.createDocumentFragment();
      text.split(/(@@MATH@@.*?@@END@@)/g).forEach(part=>{
        if(part.startsWith('@@MATH@@')){const span=document.createElement('span');span.className='math';span.textContent=part.slice(8,-9);frag.appendChild(span);}
        else frag.appendChild(document.createTextNode(part));
      });
      node.parentNode.replaceChild(frag,node);
    });
  }
})();
