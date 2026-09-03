import { MonitorSmartphone, Smartphone, PanelsTopLeft, Bot, Megaphone, PenTool, CloudCog, TrendingUp } from "lucide-react";
const icons=[MonitorSmartphone,Smartphone,PanelsTopLeft,Bot,Megaphone,PenTool,CloudCog,TrendingUp];
export default function ServiceGlyph({index}:{index:number}){const Icon=icons[index]||MonitorSmartphone;return <div className="service-icon"><span/><Icon strokeWidth={1.25}/><i/></div>}
