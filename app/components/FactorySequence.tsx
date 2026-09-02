"use client";
import { motion } from "framer-motion";

const items=[
 {n:"01",name:"IDEA",copy:"A signal becomes a direction.",v:"factory-dot"},
 {n:"02",name:"STRATEGY",copy:"Research becomes a deliberate system.",v:"factory-grid"},
 {n:"03",name:"DESIGN",copy:"The system becomes an experience.",v:"factory-ui"},
 {n:"04",name:"DEVELOP",copy:"The experience becomes working code.",v:"factory-code"},
 {n:"05",name:"LAUNCH",copy:"The product enters the real world.",v:"factory-launch"},
 {n:"06",name:"GROWTH",copy:"Attention becomes measurable momentum.",v:"factory-growth"}
];

export default function FactorySequence(){
 return <section className="factory-section" aria-label="Qorvex digital factory"><div className="factory-sticky">
  <div className="factory-heading"><span className="technical-label">DIGITAL FACTORY / 06 STAGES</span><h2>One continuous<br/><em>production line.</em></h2><p>Every stage stays connected. Nothing disappears between idea and growth.</p></div>
  <div className="factory-rail">{items.map((f,i)=><motion.article key={f.n} initial={{opacity:0,y:42,scale:.97}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,amount:.25}} transition={{duration:.75,delay:(i%3)*.08,ease:[.16,1,.3,1]}} whileHover={{y:-8}}><span>{f.n}</span><div className={`factory-visual ${f.v}`}><i/><i/><i/><i/></div><h3>{f.name}</h3><p>{f.copy}</p></motion.article>)}</div>
  <div className="factory-track"><i/></div>
 </div></section>
}
