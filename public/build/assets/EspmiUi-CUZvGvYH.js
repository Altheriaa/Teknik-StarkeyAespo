import{r as c,j as t}from"./app-Cd-Nn3O4.js";const p=["#198754","#0d6efd","#e0a800","#dc3545"],f=["bg-success","bg-primary","bg-warning text-dark","bg-danger"],u=r=>r==null?"#6c757d":p[r]??"#6c757d",g=r=>r==null?"bg-secondary":f[r]??"bg-secondary",m=(r,e,s=1)=>{if(!s)return null;const o=e.findIndex(a=>r>=a.min);return o<0?null:o};function b(){const[r,e]=c.useState(!1);return c.useEffect(()=>{const s=requestAnimationFrame(()=>e(!0));return()=>cancelAnimationFrame(s)},[]),r}function x({value:r=0,size:e=120,stroke:s=10,color:o="#198754",children:a}){const d=b(),n=(e-s)/2,i=2*Math.PI*n,l=Math.max(0,Math.min(100,r));return t.jsxs("div",{className:"esp-ring",style:{width:e,height:e},children:[t.jsxs("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:[t.jsx("circle",{cx:e/2,cy:e/2,r:n,fill:"none",stroke:"#e9ecef",strokeWidth:s}),t.jsx("circle",{cx:e/2,cy:e/2,r:n,fill:"none",stroke:o,strokeWidth:s,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:d?i*(1-l/100):i,transform:`rotate(-90 ${e/2} ${e/2})`,style:{transition:"stroke-dashoffset .9s ease, stroke .3s"}})]}),t.jsx("div",{className:"esp-ring-label",children:a})]})}const k=`
@keyframes espFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.esp-fade { animation: espFade .45s ease both; }
.esp-card { background: #fff; border: 1px solid #e6e9ec; border-radius: 1rem; box-shadow: 0 2px 12px rgba(16,24,40,.06); }
.esp-ring { position: relative; display: inline-block; flex: 0 0 auto; }
.esp-ring-label { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15; }
.esp-chip { border: 1px solid #d9dee3; background: #fff; border-radius: 999px; padding: .3rem .85rem; font-size: .85rem; font-weight: 500; color: #444; display: inline-flex; align-items: center; gap: .45rem; transition: all .15s; }
.esp-chip:hover { border-color: var(--c, #0b6b3a); color: var(--c, #0b6b3a); transform: translateY(-1px); }
.esp-chip.on { background: var(--c, #0b6b3a); border-color: var(--c, #0b6b3a); color: #fff; }
.esp-chip b { font-weight: 700; }
.esp-chip .dot { width: .6rem; height: .6rem; border-radius: 50%; background: var(--c, #0b6b3a); }
.esp-chip.on .dot { background: #fff; }
.esp-pre { white-space: pre-line; }
.esp-progress { height: 6px; border-radius: 999px; background: #e9ecef; overflow: hidden; }
.esp-progress > span { display: block; height: 100%; border-radius: 999px; transition: width .8s ease; }
`;export{x as P,k as U,g as a,m as b,u as k,b as u};
