export const DURATION = 53;
export const SCENES = [
  { start:0,end:3,chapter:0,title:'The Universe Awaits',headline:'The universe\nawaits.',copy:'A journey through technology, transformation and everything your business can become.',short:'Opening',color:'#88bbff'},
  { start:3,end:7,chapter:0,title:'Strategy & Consulting',headline:'Strategy &\nConsulting.',copy:'Align your technology with your ambition through a practical, business-led strategy.',short:'Strategy',color:'#46c7ff'},
  { start:7,end:11,chapter:0,title:'Build & Modernize',headline:'Build &\nModernize.',copy:'Create scalable digital products and give your existing systems a new foundation for growth.',short:'Build',color:'#b28bff'},
  { start:11,end:15,chapter:0,title:'Integrate & Migrate',headline:'Integrate &\nMigrate.',copy:'Connect applications, unify your data and move forward with seamless migrations.',short:'Integrate',color:'#ffb180'},
  { start:15,end:19,chapter:0,title:'Optimize with AI',headline:'Optimize\nwith AI.',copy:'Turn information into action with intelligent workflows, analytics and automation.',short:'Optimize',color:'#50efd1'},
  { start:19,end:23,chapter:0,title:'Scale & Support',headline:'Scale &\nSupport.',copy:'Expand with resilient systems, continuous innovation and a technology partner by your side.',short:'Scale',color:'#60b6ff'},
  { start:23,end:27,chapter:0,title:'One Connected Journey',headline:'Five destinations.\nOne transformation.',copy:'Strategy, engineering, integration, intelligence and growth — connected by a shared purpose.',short:'Connected',color:'#c6a5ff'},
  { start:27,end:31,chapter:1,title:'Infrastructure Layer',headline:'Infrastructure.\nBuilt for possibility.',copy:'Cloud, security and DevOps establish a resilient base for your digital business.',short:'Infrastructure',color:'#66b3ff'},
  { start:31,end:35,chapter:1,title:'Data Layer',headline:'Data.\nConnected at the core.',copy:'Bring your information together through integration, migration and thoughtful governance.',short:'Data',color:'#44edcb'},
  { start:35,end:39,chapter:1,title:'Application Layer',headline:'Applications.\nBuilt for your business.',copy:'Custom applications, SaaS and enterprise systems turn your processes into connected experiences.',short:'Application',color:'#ffa56c'},
  { start:39,end:43,chapter:1,title:'Intelligence Layer',headline:'Intelligence.\nAcross your enterprise.',copy:'AI, automation and analytics connect your applications and data to better decisions.',short:'Intelligence',color:'#b28bff'},
  { start:43,end:47,chapter:1,title:'Experience Layer',headline:'Experience.\nEvery interaction matters.',copy:'Web, mobile, portals and APIs bring the power of your technology to the people who use it.',short:'Experience',color:'#6cdbff'},
  { start:47,end:53,chapter:1,title:'Unified Tesserova',headline:'Beyond dimensions.\nBeyond possibilities.',copy:'Five intelligent layers. One powerful foundation. Let’s build what comes next, together.',short:'Unified',color:'#c5a9ff'},
] as const;
export function sceneAt(time:number){return Math.max(0,SCENES.findIndex(s=>time>=s.start&&time<s.end) < 0 ? time>=DURATION?SCENES.length-1:0 : SCENES.findIndex(s=>time>=s.start&&time<s.end));}
export function clamp01(n:number){return Math.max(0,Math.min(1,n));}
export function ease(n:number){const x=clamp01(n);return x*x*(3-2*x);}
