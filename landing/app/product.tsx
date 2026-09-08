'use client';
import { useState } from 'react';
import { Check, Copy, ArrowDown, ArrowUpRight, AudioLines, Apple, Monitor, Terminal } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
const examples = {
  Cursor: 'Refactoriza este componente. Separa la lógica en un hook, conserva los estilos y agrega un estado vacío cuando no haya resultados.',
  Claude: 'Ayúdame a pensar la arquitectura antes de escribir código. Necesito una API para reservas con equipos, roles y zonas horarias.',
  Terminal: 'Explícame por qué está fallando este test. Revisa el diff y propón el cambio más pequeño que lo solucione.'
};
export function PromptExample() {
  const [target,setTarget] = useState<keyof typeof examples>('Cursor');
  const [copy,setCopy] = useState('Copiar prompt');
  return <div className="prompt-example"><div className="example-top"><span className="mini-wordmark">dicta.</span><span className="example-label">EJEMPLO DE PROMPT</span></div><div className="voice-line" aria-hidden="true"><AudioLines/><div className="waveform">{Array.from({length:44},(_,i)=><i key={i} style={{height: `${10+((i*17+11)%43)}px`}} />)}</div></div><div className="example-body"><label htmlFor="prompt-text">De tu voz a {target}</label><textarea id="prompt-text" value={examples[target]} readOnly aria-label={`Ejemplo de prompt para ${target}`}/><span className="example-caret" aria-hidden="true"/></div><div className="example-controls"><Tabs value={target} onValueChange={value=>{setTarget(value as keyof typeof examples);setCopy('Copiar prompt');}}><TabsList aria-label="Ejemplos por herramienta">{Object.keys(examples).map(name=><TabsTrigger key={name} value={name}>{name}</TabsTrigger>)}</TabsList></Tabs><Button className="copy-button" variant="ghost" aria-label={copy} title={copy} onClick={async()=>{try{await navigator.clipboard.writeText(examples[target]);setCopy('Copiado');}catch{setCopy('Selecciona el texto para copiar');}}}>{copy==='Copiado'?<Check/>:<Copy/>}</Button></div><p className="copy-feedback" role="status">{copy==='Copiar prompt'?'Explora un ejemplo y llévatelo.':copy}</p></div>;
}
const questions=[
 ['¿Funciona con Cursor, Claude y otras apps?','Dicta pega texto en el campo que tengas activo. No necesita una integración especial con Cursor o Claude. En Linux, el pegado y los atajos pueden variar según el escritorio y Wayland.'],
 ['¿Necesito internet?','Para descargar la app y el modelo, sí. Después, el dictado local funciona sin conexión. Si activas postprocesado con un proveedor externo, esa función sí necesita internet.'],
 ['¿Entiende español y palabras de código?','Los modelos multilingües permiten dictar en español. La precisión depende del modelo, tu micrófono y el ruido. Puedes añadir vocabulario personalizado para nombres y términos que uses seguido. Revisa siempre el texto antes de enviarlo.'],
 ['¿Qué tengo que configurar al abrirla?','Descarga un modelo multilingüe, elige tu micrófono y configura el atajo. En macOS necesitarás permitir el micrófono y Accesibilidad para pegar en otras apps.'],
 ['¿Qué relación tiene con Handy?','Dicta es una distribución independiente basada en Handy, el proyecto de código abierto de CJ Pais. Conserva su licencia MIT y el reconocimiento a sus contribuyentes. No es un producto oficial de Handy, Cursor ni Anthropic.'],
 ['¿Mis audios se guardan?','La app tiene historial local de transcripciones y grabaciones. Puedes revisar y borrar el historial y configurar la retención desde los ajustes. El dictado local no requiere enviar audio a un servidor.']
];
export function Questions(){return <Accordion className="questions">{questions.map(([q,a],i)=><AccordionItem key={q} value={i}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion>;}
export function Downloads(){return <div className="download-box"><p className="release-label"><span className="status-dot"/> DICTA · EDICIÓN COMUNIDAD</p><a className="button download-primary" href="https://github.com/SantiSparkov/dicta/releases/latest"><ArrowDown size={20}/> Ver descargas disponibles <ArrowUpRight size={17}/></a><div className="platforms"><span><Apple size={17}/>macOS</span><span><Monitor size={17}/>Windows</span><span><Terminal size={17}/>Linux</span></div><p>Elige el instalador de tu sistema en la publicación de GitHub. Consulta allí qué compilaciones están disponibles.</p><a className="text-link" href="https://github.com/SantiSparkov/dicta#instalación">Guía de instalación <ArrowUpRight size={15}/></a></div>;}
