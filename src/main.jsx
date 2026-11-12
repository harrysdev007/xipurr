import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const media = '/media/republic/';
const memes = [
  { file: 'dumplings.jpg', title: 'Your dumplings. Our dumplings.', detail: 'The redistribution is going extremely well.', category: 'Off duty', alt: 'Chairman Meow guarding a huge feast of dumplings in a Chinese canteen' },
  { file: 'wall.jpg', title: 'The Great Wall of Meow.', detail: 'Keeping the dog people out since breakfast.', category: 'On duty', alt: 'Our orange cat in his red scarf sitting on the Great Wall of China' },
  { file: 'meeting.jpg', title: 'This meeting could’ve been a meow.', detail: 'An important announcement about absolutely nothing.', category: 'On duty', alt: 'The cat presiding over a party meeting behind two microphones' },
  { file: 'tractor.jpg', title: 'Seize the means of purrduction.', detail: 'The harvest belongs to whoever sits on it.', category: 'On duty', alt: 'Chairman Meow driving a red tractor through a Chinese rice paddy' },
  { file: 'tea.jpg', title: 'All tea. No thoughts.', detail: 'A brief pause in the glorious revolution.', category: 'Off duty', alt: 'The cat relaxing with a little porcelain teacup in a Chinese courtyard' },
  { file: 'nap.jpg', title: 'The five-year nap.', detail: 'Do not disturb. The chairman is planning.', category: 'Off duty', alt: 'Our cat curled up asleep in a red ceremonial armchair' },
];
function Icon({ name, ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{name === 'download' ? <><path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4"/></> : name === 'copy' ? <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/></> : name === 'close' ? <path d="m6 6 12 12M6 18 18 6"/> : name === 'expand' ? <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6m0 6 7-7"/> : name === 'left' ? <path d="m14 5-7 7 7 7"/> : name === 'right' ? <path d="m10 5 7 7-7 7"/> : <path d="M12 4v16m-6-6 6 6 6-6"/>}</svg>;
}
function XMark() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L.8 2h6.5l5.8 7.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z"/></svg>; }
function App() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState('');
  const dialog = useRef(null);
  const timer = useRef(null);
  const filtered = memes.filter(m => filter === 'All' || m.category === filter);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (selected === null) return;
    if (!dialog.current.open) dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  async function copyTicker() {
    clearTimeout(timer.current);
    try { await navigator.clipboard.writeText('$XIPURR'); setToast('Ticker copied. Glory to the Pawty.'); }
    catch { setToast('Our ticker is $XIPURR. Select it to copy.'); }
    timer.current = setTimeout(() => setToast(''), 3200);
  }
  function changeImage(step) { setSelected(index => (index + step + memes.length) % memes.length); }
  function closeImage() { dialog.current.close(); }
  const current = selected === null ? null : memes[selected];
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <picture className="hero-scene"><source media="(max-width: 680px)" srcSet={media + 'hero-smaller-mobile.jpg'}/><img src={media + 'hero-smaller.jpg'} alt="Chairman Meow sitting in a grand Chinese palace courtyard beneath red silk party banners and lanterns" width="1672" height="941" fetchPriority="high"/></picture>
        <div className="hero-shade" aria-hidden="true"/>
        <div className="hero-content">
          <div className="poster-top"><button className="ticker-signature" onClick={copyTicker} aria-label="Copy XIPURR ticker">$XIPURR <Icon name="copy"/></button><span className="chinese-seal" lang="zh" aria-label="The people's cat">人民<br/>的猫</span></div>
          <h1 id="hero-title">Ni hao,<br/>comrade<span className="title-period">.</span></h1>
          <div className="slogan-ribbon"><span>The chairman has entered the chat.</span></div>
          <div className="poster-dispatch"><span className="dispatch-symbol" aria-hidden="true">☭</span><p>One party. Nine lives. Zero thoughts.<br/><span>Your tuna? <strong>Our tuna.</strong></span></p></div>
          <div className="poster-actions"><a className="social-invite" href="https://x.com/xipurr_on_sol" target="_blank" rel="noopener noreferrer" aria-label="Join XIPURR on X, opens in a new tab"><span className="social-icon"><XMark/></span><span><strong>Join the Pawty</strong><small>@xipurr_on_sol</small></span><span className="invite-arrow" aria-hidden="true">↗</span></a><a className="gallery-invite" href="#gallery"><span>Meet the<br/>comrades</span><Icon name="down"/></a></div>
        </div>
      </section>

      <section className="gallery" id="gallery" aria-labelledby="gallery-title">
        <div className="gallery-intro">
          <div className="gallery-heading"><span className="gallery-chinese" lang="zh" aria-hidden="true">喵</span><h2 id="gallery-title">Glory to<br/>the Pawty.</h2></div>
          <div className="gallery-description"><p>Same chairman. Different nonsense.</p><p>Fresh dispatches from the People’s Republic of Purr.<br/>Save them. Send them. Make the group chat worse.</p><a className="download-original" href={media + 'hero-smaller.jpg'} download="XIPURR-chairman.jpg">Take the chairman home <Icon name="download"/></a></div>
        </div>
        <div className="gallery-toolbar"><div className="filters" role="group" aria-label="Filter memes">{['All', 'On duty', 'Off duty'].map(label => <button key={label} onClick={() => setFilter(label)} aria-pressed={filter === label}>{label === 'All' ? 'All comrades' : label}<span>{label === 'All' ? 6 : 3}</span></button>)}</div><span className="gallery-hint">Made for your camera roll.</span></div>
        <div className="meme-grid">{filtered.map(m => <article className="meme" key={m.file}><div className="meme-picture"><button className="open-image" onClick={() => setSelected(memes.indexOf(m))} aria-label={'Open image: ' + m.title}><img src={media + m.file} alt={m.alt} width="1024" height="1024" loading="lazy" decoding="async"/><span className="image-action"><Icon name="expand"/></span></button><a className="save-image" href={media + m.file} download={'XIPURR-' + m.file} aria-label={'Download image: ' + m.title}><Icon name="download"/></a></div><h3>{m.title}</h3><p>{m.detail}</p></article>)}</div>
        <div className="gallery-end"><span className="end-star" aria-hidden="true">★</span><p>All memes belong to the people.<br/><strong>Especially the cat people.</strong></p><a href="#home">Back to the chairman <span>↑</span></a></div>
      </section>
    </main>
    <div className={'toast' + (toast ? ' visible' : '')} role="status">{toast}</div>
    <dialog className="viewer" ref={dialog} aria-label="Meme viewer" onClose={() => setSelected(null)} onClick={e => { if (e.target === dialog.current) closeImage(); }} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); changeImage(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); changeImage(-1); } }}>{current && <div className="viewer-content"><button className="viewer-close icon-button" onClick={closeImage} aria-label="Close image"><Icon name="close"/></button><div className="viewer-image"><img src={media + current.file} alt={current.alt}/></div><div className="viewer-info"><div><span className="viewer-position">{selected + 1} of {memes.length}</span><h2>{current.title}</h2><p>{current.detail}</p><a className="main-button" href={media + current.file} download={'XIPURR-' + current.file}>Save this meme <Icon name="download"/></a></div><div className="viewer-navigation"><button className="icon-button" onClick={() => changeImage(-1)} aria-label="Previous image"><Icon name="left"/></button><button className="icon-button" onClick={() => changeImage(1)} aria-label="Next image"><Icon name="right"/></button></div></div></div>}</dialog>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
