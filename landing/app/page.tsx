import { ArrowDown, ArrowUpRight, AudioLines, GitBranch, ShieldCheck, Terminal, Keyboard, Cpu } from 'lucide-react';
import { PromptExample, Questions, Downloads } from './product';

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header wrap">
      <a href="#" className="wordmark" aria-label="Dicta, inicio"><img className="brand-mark" src="/dicta.svg" alt="" width="35" height="35"/>dicta<span className="wordmark-dot">.</span></a>
      <nav aria-label="Navegación principal"><a href="#como-funciona">Cómo funciona</a><a href="#por-que">Hecho para tu flow</a><a href="https://github.com/SantiSparkov/dicta" target="_blank" rel="noreferrer"><GitBranch size={17} /> Código abierto</a></nav>
      <a className="button button-small" href="#descargar">Descargar <ArrowDown size={16}/></a>
    </header>
    <main id="contenido">
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> DE TU CABEZA AL PROMPT</p>
          <h1>Menos teclado.<br/>Más <span>idea.</span></h1>
          <p className="hero-description">Tu próximo commit empieza hablando. Dicta convierte tu voz en texto donde ya programas: Cursor, Claude o tu terminal.</p>
          <div className="hero-actions"><a href="#descargar" className="button">Descargar Dicta <ArrowDown size={19}/></a><a className="text-link" href="#como-funciona">Así de simple <ArrowUpRight size={17}/></a></div>
          <p className="microcopy">Gratis · Sin cuenta · Dictado local</p>
          <div className="hero-note"><span aria-hidden="true">↳</span><p>Habla como piensas.<br/><strong>El teclado puede esperar.</strong></p></div>
        </div>
        <div className="hero-product"><div className="product-caption"><span>01 / DEL «Y SI…» AL «YA ESTÁ»</span><AudioLines size={18}/></div><PromptExample/><p className="product-footnote"><ShieldCheck size={15}/> En la app, tu voz se transcribe en tu compu.</p></div>
      </section>
      <section className="workflow-strip wrap" aria-label="Tus herramientas de siempre"><p>Tu stack de siempre.<br/><strong>Una forma nueva de hablarle.</strong></p><div><span><span className="cursor-glyph" aria-hidden="true">↗</span>Cursor</span><span>✳ Claude</span><span><Terminal size={23}/> Terminal</span><span><Keyboard size={23}/> Cualquier campo de texto</span></div></section>
      <section className="how-section wrap" id="como-funciona"><div className="section-heading"><p className="eyebrow">CERO VUELTAS</p><h2>Una idea.<br/>Un atajo. <span>Listo.</span></h2><p>Sin cambiar de pestaña.<br/>Sin perder el hilo.</p></div><ol className="steps"><li><span className="step-number">01</span><div><h3>Activa tu atajo</h3><p>Deja el cursor donde quieres escribir y usa la combinación que elegiste en Dicta.</p></div><Keyboard/></li><li><span className="step-number">02</span><div><h3>Suéltalo como te salga</h3><p>«Refactoriza este componente, separa la lógica y deja los estilos como están». Así, hablando.</p></div><AudioLines/></li><li><span className="step-number">03</span><div><h3>Tu prompt aparece ahí</h3><p>Termina el dictado. Dicta transcribe y pega el texto en el campo activo. Revísalo y envíalo tú.</p></div><ArrowUpRight/></li></ol></section>
      <section className="why-section wrap" id="por-que"><div className="section-heading"><p className="eyebrow">PARA QUIENES CONSTRUYEN</p><h2>Tu flow.<br/><span>Tu voz. Tu compu.</span></h2></div><div className="benefits"><article className="privacy-feature"><ShieldCheck size={28}/><div><p className="eyebrow">LOCAL POR DEFECTO</p><h3>Lo que dices,<br/>se queda contigo.</h3><p>El dictado se procesa en tu computadora. Descargas un modelo una vez y puedes seguir sin conexión.</p><small>El postprocesado con proveedores externos es opcional y puede enviarles texto.</small></div><span className="local-seal"><Cpu size={18}/> EN TU COMPU</span></article><article><span className="feature-index">/01</span><h3>Español, con tu acento.</h3><p>Elige un modelo multilingüe y habla natural. Los nombres de variables y términos en inglés siempre se pueden revisar.</p></article><article><span className="feature-index">/02</span><h3>Sin otra suscripción.</h3><p>Gratis y de código abierto. Sin cuenta, sin contador de palabras, sin venderte un plan pro a mitad del prompt.</p></article></div></section>
      <section className="download-section wrap" id="descargar"><div><p className="eyebrow">DALE VOZ A LO QUE ESTÁS ARMANDO</p><h2>La próxima idea,<br/><span>dila en voz alta.</span></h2><p>Descarga Dicta. Elige un modelo multilingüe.<br/>Y vuelve a construir.</p></div><Downloads/></section>
      <section className="faq-section wrap"><div><p className="eyebrow">ANTES DEL PRIMER PROMPT</p><h2>Lo que quieres saber.</h2></div><Questions/></section>
    </main>
    <footer className="wrap"><div><a className="wordmark" href="#">dicta<span className="wordmark-dot">.</span></a><p>Para quienes piensan en español<br/>y construyen de todo.</p></div><div className="footer-links"><a href="https://github.com/SantiSparkov/dicta">Código fuente <ArrowUpRight size={14}/></a><a href="https://github.com/SantiSparkov/dicta/blob/main/LICENSE">Licencia MIT <ArrowUpRight size={14}/></a><a href="https://github.com/SantiSparkov/dicta/issues">Reportar un problema <ArrowUpRight size={14}/></a></div><p className="credits">Construido sobre <a href="https://github.com/cjpais/handy">Handy</a>.<br/>Gracias a CJ Pais y su comunidad.</p></footer>
  </>;
}
